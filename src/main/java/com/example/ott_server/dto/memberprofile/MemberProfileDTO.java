package com.example.ott_server.dto.memberprofile;

import com.example.ott_server.model.member.MemberProfile;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberProfileDTO {
    @NonNull
    private String member_name;

    @NonNull
    private String member_email;

    @NonNull
    private String member_password;

    @NonNull
    private int member_id;

    public MemberProfileDTO(MemberProfile memberProfile) {
        this.member_name = memberProfile.getMember_name();
        this.member_email = memberProfile.getMember_email();
        this.member_password = memberProfile.getMember_password();
        this.member_id = memberProfile.getMember().getId();
    }
}
