# 서버 🗄️

## 개발 개요 📜
- 새로운 OTT 플랫폼 서비스를 제공하기 위해 구축된 서버입니다. 

- ## 기술 스택 🔧
| 항목             | 내용                                         |
|------------------|--------------------------------------------|
| **개발 환경**    | IntelliJ IDEA , DBeaver                                      |
| **프로그래밍 언어** | Java(JDK-17)                  |
| **프레임워크/라이브러리** | Spring Boot 3.3.1, JWT, JPA |
| **데이터베이스**       | MySQL                         |
| **ERD**       | DrawSQL                         |
| **API 테스트 도구**       | Postman                         |
| **버전 관리**    | Git, GitHub                                  |
| **커뮤니케이션** | Notion, KakaoTalk                           |
| **배포** | AZURE                           |

![logo](/BackLogo1.png)

## 팀원 🧑‍🤝‍🧑
- **Developer**: 노유정, 김민서
- **Project Manager**: 김민서
- **Data Collector, QA**: 홍석환

### 업무 및 포지션
- **👦🏻 김민서 (Developer, Project Manager)**
    - 계정 데이터 HTTP 응답 비즈니스 로직 구현
    - 콘텐츠 데이터 HTTP 응답 비즈니스 및 콘텐츠 데이터 수집 및 생성 
    - 위시리스트 요청 및 응답 비즈니스 로직 구현
    - 서버 테스트 및 처리
    - 빌드및 배포, 버전 관리
  
- **👩🏻 노유정 (Developer)**
    - DB 설계 및 ERD 작성
    - 계정 데이터 HTTP 요청 및 응답 비즈니스 로직 구현
    - 멤버 시스템 요청 및 응답 비즈니스 로직 구현
    - 서버 테스트 및 처리
    - 보안(security)처리 및 JWT토큰 시스템 구현
    - 에러 처리 가이드 라인 기술
    - DB 관리 및 유지 보수
    - 무결성, 유효성 검사 처리
    - 시드 데이터 설계
    
- **👨🏻‍🦱 홍석환 (Data Collector)**
    - 데이터 수집 및 시드 데이터 설계
 
## 개발 기간 및 기획 📝

### 개발 기간 
#### 2024년 7월
- **ERD 작성 및 스키마 검증**: 7/1 ~ 7/2
- **DB 구축 및 데이터 수집:** 7/3 ~ 7/7
- **데이터 생성 및 비즈니스 로직 설계 :** 7/7 ~ 7/9
- **비즈니스 로직 기반 컨트롤러 및 서비스 개발:** 7/9 ~ 7/12
- **컨트롤러 및 서비스 네트워크 테스트:** 7/12 ~ 7/13
- **네트워크 테스트 처리 및 빌드, 배포 파이프라인 구축:** 7/12 ~ 7/15
- **JWT 및 보안 시스템 설계:** 7/15 ~ 7/22
- **JWT 및 보안 시스템 네트워크 테스트:** 7/22 ~ 7/24
- **테스트 처리 및 빌드, 배포  :** 7/22 ~ 7/24
- **유지보수  :** 7/24 ~ 7/31

#### 2024년 8월
- **문서화 및   :** 8/1 ~ 8/4


### DB 🗃️

![ERD](/ERD.png)

#### 회원 (Member) 테이블 : 회원 정보를 저장하는 테이블
| 컬럼명         | 데이터 타입  | 설명                       |
| -------------- | ------------ | -------------------------- |
| id             | INT          | 회원 ID (PK)               |
| name           | VARCHAR(255) | 회원 이름                  |
| email          | VARCHAR(255) | 이메일 주소 (UNIQUE, NOT NULL) |
| password       | VARCHAR(255) | 비밀번호 (NOT NULL)        |
| membership_id  | INT          | 멤버쉽 ID (FK)             |

#### 멤버프로필 (MemberProfile) 테이블 : 회원 프로필 정보를 저장하는 테이블
| 컬럼명          | 데이터 타입  | 설명                       |
| --------------- | ------------ | -------------------------- |
| id              | INT          | 프로필 ID (PK)             |
| member_id       | INT          | 회원 ID (FK)               |
| member_name     | VARCHAR(255) | 프로필 이름                |
| member_email    | VARCHAR(255) | 이메일 주소 (UNIQUE, NOT NULL) |
| member_password | VARCHAR(255) | 비밀번호 (NOT NULL)        |

#### 멤버쉽 (Membership) 테이블 : 멤버쉽 정보를 저장하는 테이블
| 컬럼명 | 데이터 타입  | 설명               |
| ------ | ------------ | ------------------ |
| id     | INT          | 멤버쉽 ID (PK)     |
| level  | VARCHAR(50)  | 멤버쉽 등급        |
| amount | DECIMAL(10,2)| 결제 금액          |

#### 찜 (Wishlist) 테이블 : 회원들의 찜 목록 정보를 저장하는 테이블
| 컬럼명            | 데이터 타입 | 설명                       |
| ----------------- | ----------- | -------------------------- |
| id                | INT         | 찜목록 ID (PK)             |
| member_id         | INT         | 회원 ID (FK)               |
| member_profile_id | INT         | 멤버프로필 ID (FK)         |
| movie_id          | INT         | 영화 ID (FK)               |

#### 결제 (Payment) 테이블 : 결제 정보를 저장하는 테이블
| 컬럼명       | 데이터 타입  | 설명                |
| ------------ | ------------ | ------------------- |
| id           | INT          | 결제 ID (PK)        |
| member_id    | INT          | 회원 ID (FK)        |
| card_number  | VARCHAR(50)  | 카드번호            |
| expiry_date  | VARCHAR(50)  | 유효기간            |
| payment_date | DATE         | 결제 날짜           |
| card_name    | VARCHAR(50)  | 카드 이름           |
| amount       | DECIMAL(10,2)| 결제 금액           |

#### 영화 (Movie) 테이블 : 영화 정보를 저장하는 테이블
| 컬럼명        | 데이터 타입  | 설명                |
| ------------- | ------------ | ------------------- |
| id            | INT          | 영화 ID (PK)        |
| title         | VARCHAR(255) | 영화 제목           |
| age_rating    | VARCHAR(50)  | 연령 등급           |
| runtime       | VARCHAR(50)  | 상영 시간           |
| rating        | DECIMAL(3,2) | 영화 평점           |
| teaser_url    | VARCHAR(255) | 티저 URL            |
| poster_img    | VARCHAR(255) | 포스터 이미지 경로  |
| plot_summary  | TEXT         | 줄거리              |
| release_date  | VARCHAR(255) | 개봉일              |

#### 장르 (Genre) 테이블 : 영화 장르 정보를 저장하는 테이블
| 컬럼명 | 데이터 타입  | 설명          |
| ------ | ------------ | ------------- |
| id     | INT          | 장르 ID (PK)  |
| name   | VARCHAR(50)  | 장르 이름     |

#### 영화-장르 (MovieGenre) 테이블 : 영화와 장르 간의 관계를 저장하는 테이블
| 컬럼명   | 데이터 타입 | 설명            |
| -------- | ----------- | --------------- |
| movie_id | INT         | 영화 ID (FK)    |
| genre_id | INT         | 장르 ID (FK)    |

#### 제작사 (ProductionCompany) 테이블 : 제작사 정보를 저장하는 테이블
| 컬럼명 | 데이터 타입  | 설명            |
| ------ | ------------ | --------------- |
| id     | INT          | 제작사 ID (PK)  |
| name   | VARCHAR(255) | 제작사 이름     |

#### 영화-제작사 (MovieProduction) 테이블 : 영화와 제작사 간의 관계를 저장하는 테이블
| 컬럼명                | 데이터 타입 | 설명               |
| --------------------- | ----------- | ------------------ |
| movie_id              | INT         | 영화 ID (FK)       |
| production_company_id | INT         | 제작사 ID (FK)     |

#### 감독 (Director) 테이블 : 감독 정보를 저장하는 테이블
| 컬럼명 | 데이터 타입  | 설명         |
| ------ | ------------ | ------------ |
| id     | INT          | 감독 ID (PK) |
| name   | VARCHAR(255) | 감독 이름    |

#### 영화-감독 (MovieDirector) 테이블 : 영화와 감독 간의 관계를 저장하는 테이블
| 컬럼명    | 데이터 타입 | 설명          |
| --------- | ----------- | ------------- |
| movie_id  | INT         | 영화 ID (FK)  |
| director_id | INT       | 감독 ID (FK)  |

#### 카테고리 (Category) 테이블 : 영화 카테고리 정보를 저장하는 테이블
| 컬럼명 | 데이터 타입  | 설명             |
| ------ | ------------ | ---------------- |
| id     | INT          | 카테고리 ID (PK) |
| name   | VARCHAR(255) | 카테고리 이름    |

#### 영화-카테고리 (MovieCategory) 테이블 : 영화와 카테고리 간의 관계를 저장하는 테이블
| 컬럼명    | 데이터 타입 | 설명             |
| --------- | ----------- | ---------------- |
| movie_id  | INT         | 영화 ID (FK)     |
| category_id | INT       | 카테고리 ID (FK) |

### 서버 전체 코드 구조 📃
- **config/**: 애플리케이션 설정 파일. 보안 설정(SecurityConfig)과 웹 설정(WebConfig)을 포함.
- **controller/**: HTTP 요청을 처리하는 컨트롤러 클래스. 기능별로 세분화된 서브 디렉토리 포함.
- **dto/**: 데이터 전송 객체(Data Transfer Object) 클래스. 계층 간 데이터 교환을 담당.
- **model/**: 데이터베이스 엔티티 클래스. 데이터베이스 테이블과 매핑.
- **query/**: 데이터베이스 쿼리 메서드를 포함하는 클래스.
- **repository/**: 데이터베이스 접근을 담당하는 JPA 리포지토리 인터페이스.
- **security/**: 보안 관련 클래스. JWT 토큰 처리와 사용자 인증 및 권한 부여를 포함.
- **service/**: 비즈니스 로직을 처리하는 서비스 계층 클래스.
- **status/**: 응답 상태를 정의하는 클래스.
- **util/**: 애플리케이션에서 사용하는 유틸리티 클래스.

![file](/데이터구조.png)

### 라우터 🌐
- **Member**
    - **GET /member/allEmail:** 모든 회원의 이메일을 조회
    - **POST /member/add:** 새로운 회원을 추가 (회원가입)
    - **PUT /member/changePassword:** 회원의 비밀번호를 변경
    - **DELETE /member/delete:** 회원을 삭제
    - **GET /member/member:** 특정 이메일의 회원 정보를 조회
- **MemberProfile**
    - **POST /memberprofile/add:** 새로운 멤버 프로필을 추가
    - **DELETE /memberprofile/delete:** 멤버 프로필을 삭제
    - **PUT /memberprofile/changepassword:** 멤버 프로필의 비밀번호를 변경
- **GetAllMovie**
    - **GET /movie/all:** 모든 영화 데이터를 조회
- **Wishlist**
    - **POST /wishlist/user/add:** 사용자의 위시리스트에 영화를 추가
    - **POST /wishlist/member/add:** 멤버의 위시리스트에 영화를 추가
    - **DELETE /wishlist/user/delete:** 사용자의 위시리스트에서 영화를 삭제
    - **DELETE /wishlist/member/delete:** 멤버의 위시리스트에서 영화를 삭제
- **Auth**
    - **POST /auth/login:** 사용자 로그인 및 JWT 토큰 발급을 처리

### 컨트롤러 ⌨️
- **MemberController:** 사용자 관리
- **MemberProfileController:** 사용자 프로필 관리
- **GetAllMovieController:** 모든 영화 조회
- **WishlistController:** 위시리스트 관리
- **AuthController:** 인증 처리

### 서비스 ⚙️ 
- **MemberService:** 사용자 관련 비즈니스 로직
- **MemberProfileService:** 사용자 프로필 관련 비즈니스 로직
- **MovieService:** 영화 관련 비즈니스 로직
- **WishlistService:** 위시리스트 관련 비즈니스 로직
- **MemberLoginService:** 로그인 관련 비즈니스 로직

### 보안(시큐리티, 토큰) 🔐
- Spring Security와 JWT(Json Web Token)를 사용하여 보안을 구현. JWT를 통해 사용자의 인증과 권한 부여를 관리
- **JWTFilter:** HTTP 요청을 가로채고 JWT 토큰을 검증하는 필터
- **SecurityConfig:** Spring Security 설정을 정의한 클래스.  JWTFilter를 SecurityFilterChain에 추가하고, 인증 및 권한 부여 규칙을 설정
- **UserDetailsService:** 사용자 정보를 로드하는 서비스. 이메일을 기반으로 사용자를 검색하고 인증에 필요한 정보를 제공
- **PasswordEncoder:** BCryptPasswordEncoder를 사용하여 비밀번호를 암호화

### 에러처리 ❗
- 일관된 에러 처리를 위해 ApiResponse와 ResponseStatus 열거형을 사용

## 테스트케이스 📝
- **회원 관리**
    | 테스트 케이스 ID | 제목 | 목적 | 전체 조건 | 실제 결과 | 상태 | 처리 |
    | --- | --- | --- | --- | --- | --- | --- |
    | M-TC01 | 회원 등록 | 새로운 회원을 등록 | 이름, 이메일, 비밀번호, 카드 정보 입력 | Payment 정보가 null로 저장됨 | 실패 | Payment 정보가 올바르게 저장되도록 수정 |
    | M-TC02 | 회원 정보 조회 | 회원의 이메일을 조회 | 회원 데이터가 존재 | 회원 이메일이 성공적으로 조회됨 | 성공 | 정상 처리됨 |
    | M-TC03 | 회원 삭제 | 기존 회원 삭제 | 이메일 입력 | 찜 목록을 먼저 삭제하지 않아 회원 삭제 실패 | 실패 | 찜 목록을 먼저 삭제하는 로직 추가 후 회원 삭제 처리 |
    | M-TC04 | 멤버 등록 | 새로운 멤버를 등록 | 이름, 이메일, 비밀번호 입력 | 멤버가 성공적으로 등록됨 | 성공 | 정상 처리됨 |
    | M-TC05 | 멤버 삭제 | 기존 멤버 삭제 | 멤버 ID 입력 | 찜 목록을 먼저 삭제하지 않아 멤버 삭제 실패 | 실패 | 찜 목록을 먼저 삭제하는 로직 추가 후 멤버 삭제 처리 |

- **인증**
    | 테스트 케이스 ID | 제목 | 목적 | 전체 조건 | 실제 결과 | 상태 | 처리 |
    | --- | --- | --- | --- | --- | --- | --- |
    | A-TC01 | 로그인 | 사용자가 로그인 | 이메일과 비밀번호 입력 | JWT 토큰이 발급되지 않음 | 실패 | 토큰 발급 로직 수정 |
    | A-TC02 | 로그아웃 | 사용자가 로그아웃 | JWT 토큰 입력 | 사용자가 성공적으로 로그아웃됨 | 성공 | 정상 처리됨 |

- **콘텐츠 관리**
    | 테스트 케이스 ID | 제목 | 목적 | 전체 조건 | 실제 결과 | 상태 | 처리 |
    | --- | --- | --- | --- | --- | --- | --- |
    | C-TC01 | 영화 목록 조회 | 모든 영화 데이터를 조회 | 영화 데이터가 존재 | 영화 목록이 성공적으로 조회됨 | 성공 | 정상 처리됨 |
    | C-TC02 | 찜 목록 추가 | 사용자가 찜 목록에 영화 추가 | 영화 ID 입력 | 영화가 찜 목록에 추가됨 | 성공 | 정상 처리됨 |
    | C-TC03 | 찜 목록 삭제 | 사용자가 찜 목록에서 영화 삭제 | 영화 ID 입력 | 영화가 찜 목록에서 삭제됨 | 성공 | 정상 처리됨 |

## 참고자료 및 출처 📡
- **책**
    - *RESTful API 서버 구현: 스프링 부트와 JPA를 이용하는 API 서버 만들기* - 저자: 김영한, 출판연도: 2020
    - *스프링 부트 3 백엔드 개발자 되기: 백엔드 로드맵에서 엄선한 최신 테크 트리로 탄탄히 배우기, 자바 편* - 저자: 이지스퍼블리싱, 출판연도: 2023
- **데이터**: 
  - YouTube: [https://www.youtube.com](https://www.youtube.com)
  - Netflix: [https://www.netflix.com/kr/](https://www.netflix.com/kr/)
  - 나무위키: [https://namu.wiki](https://namu.wiki)
