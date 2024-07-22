package com.example.ott_server.service.member;

import com.example.ott_server.dto.PasswordChangeDTO;
import com.example.ott_server.dto.member.MemberAllDTO;
import com.example.ott_server.dto.member.MemberRegisterDTO;
import com.example.ott_server.model.member.Member;
import com.example.ott_server.model.member.MemberProfile;
import com.example.ott_server.model.member.Membership;
import com.example.ott_server.model.member.Payment;
import com.example.ott_server.repository.member.MemberProfileRepository;
import com.example.ott_server.repository.member.MemberRepository;
import com.example.ott_server.repository.member.MembershipRepository;
import com.example.ott_server.repository.member.PaymentRepository;
import com.example.ott_server.status.ResultStatus;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService{

    // 멤버 리포지토리
    @Autowired
    private MemberRepository memberRepository;

    // 멤버프로필 리포지토리
    @Autowired
    private MemberProfileRepository memberProfileRepository;

    // 멤버십 리포지토리
    @Autowired
    private MembershipRepository membershipRepository;

    // 결제정보 리포지토리
    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // 모든 이메일 가져오기
    @Override
    public List<String> getAllEmails() {
        List<String> allEmail = new ArrayList<>();

        // 멤버에 등록된 이메일들 저장
        List<Member> members = memberRepository.findAll();
        for(Member member : members) {
            allEmail.add(member.getEmail());
        }

        // 멤버 프로필에 등록된 이메일들 저장
        List<MemberProfile> memberProfiles = memberProfileRepository.findAll();
        for(MemberProfile memberProfile : memberProfiles) {
            allEmail.add(memberProfile.getMember_email());
        }

        return allEmail;

    }

    // 멤버 추가
    @Override
    @Transactional
    public ResultStatus addMemberRegister(MemberRegisterDTO memberRegisterDTO) {
        try{
            // 결제 정보
            Payment payment = new Payment();
            payment.setCard_number(memberRegisterDTO.getCard_number());
            payment.setExpiry_date(memberRegisterDTO.getExpiry_date());
            payment.setPayment_date(LocalDate.now());
            payment.setCard_name(memberRegisterDTO.getCard_name());
            payment.setAmount(memberRegisterDTO.getAmount());

            // 멤버십 등급 결정
            Membership membership = determinerMembership(memberRegisterDTO.getAmount());

            // 멤버 생성 및 저장
            Member member = new Member();
            member.setName(memberRegisterDTO.getName());
            member.setEmail(memberRegisterDTO.getEmail());

            // 비밀번호 해시코드 변환
            String encodedPassword = passwordEncoder.encode(memberRegisterDTO.getPassword());
            member.setPassword(encodedPassword);

            member.setMembership(membership);
            member = memberRepository.save(member);

            // 결제 정보와 멤버 연결 및 저장
            payment.setMember(member);
            paymentRepository.save(payment);

            return ResultStatus.SUCCESS;
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return ResultStatus.FAIL;
        } catch (Exception e) {
            e.printStackTrace();
            return ResultStatus.FAIL;
        }
    }

    // 결제 금액에 따른 멤버십 등급 결정 로직
    private Membership determinerMembership (BigDecimal amount) {
        String membershipLevel;
        if (amount.equals(BigDecimal.valueOf(17000))) {
            membershipLevel = "프리미엄(Premium) 4K+HDR";
        } else if (amount.equals(BigDecimal.valueOf(13500))) {
            membershipLevel = "스탠다드(Standard) 1080p";
        } else if (amount.equals(BigDecimal.valueOf(5500))) {
            membershipLevel = "광고형스탠다드(AD) 1080p";
        } else {
            // 예외처리
            throw new IllegalArgumentException("멤버십 등급에 맞지 않는 결제 금액입니다.");
        }
        return membershipRepository.findByLevel(membershipLevel);
    }

    // 멤버 비밀번호 수정
    @Override
    @Transactional
    public ResultStatus changePassword(int memberId, PasswordChangeDTO passwordChangeDTO) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        if (!optionalMember.isPresent()) {
            throw new IllegalArgumentException("존재하지 않는 회원입니다.");
        }

        Member member = optionalMember.get();

        // 새로운 비밀번호 설정 (암호화)
        String encodedPassword = passwordEncoder.encode(passwordChangeDTO.getNewPassword());
        member.setPassword(encodedPassword);
        memberRepository.save(member);

        return ResultStatus.SUCCESS;
    }

    // 멤버 삭제
    @Override
    @Transactional
    public ResultStatus deleteMember (int memberId) {
        try {
            Optional<Member> optionalMember = memberRepository.findById(memberId);

            // Member 존재 확인
            if (optionalMember.isPresent()) {
                Member member = optionalMember.get();

                // MemberProfile 삭제
                List<MemberProfile> memberProfiles = memberProfileRepository.findByMemberId(memberId);
                if (!memberProfiles.isEmpty()) {
                    memberProfileRepository.deleteAll(memberProfiles);
                }

                // Payments 삭제
                Payment payment = paymentRepository.findByMemberId(memberId);
                if (payment != null) {
                    paymentRepository.delete(payment);
                }

                // Member 삭제
                memberRepository.delete(member);

                return ResultStatus.SUCCESS;
            } else {
                throw new IllegalArgumentException("존재하지 않는 회원입니다.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResultStatus.FAIL;
        }
    }

    //    특정 이메일의 회원 정보를 모두 가져오기
    @Override
    public List<MemberAllDTO> GetMember(String email) {
//      DTO 형식으로 원시 쿼리문 작성이 불가능하기에 오브젝트로 받고 튜플로 DTO 형식 대입
        List<Object[]> results = memberRepository.findByMember(email);
//      대입할 DTO 형식 생성
        List<MemberAllDTO> dtoList = new ArrayList<>();

        for (Object[] result : results) {
            MemberAllDTO dto = new MemberAllDTO(
                    (Integer) result[0],
                    (String) result[1],
                    (Integer) result[2],
                    (String) result[3],
                    (String) result[4],
                    (Integer) result[5],
                    (Integer) result[6],
                    (String) result[7],
                    (String) result[8],
                    (String) result[9],
                    (String) result[10],
                    (String) result[11],
                    (String) result[12],
                    (String) result[13],
                    (String) result[14],
                    (String) result[15],
                    (String) result[16],
                    (String) result[17],
                    (String) result[18],
                    (String) result[19],
                    ((Number) result[20]).doubleValue(),
                    (String) result[21],
                    (String) result[22],
                    (String) result[23],
                    (String) result[24],
                    ((Number) result[25]).doubleValue()
            );
            dtoList.add(dto);
        }

        return dtoList;
    }
}
