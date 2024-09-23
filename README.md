<img width="1482" alt="스크린샷 2024-09-23 오전 10 25 26" src="https://github.com/user-attachments/assets/902468b8-9234-4186-8dc8-e8c7c0ac4384">
# TripPop 🌏



![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)



> 맞춤형 여행지 추천 서비스 TripPop

<img width="1692" alt="스크린샷 2024-09-23 오전 10 21 36" src="https://github.com/user-attachments/assets/312afcc3-4bfd-4c26-862e-f738d3518c9b">


## 📖 Description

여행을 가고싶지만 여행지를 고르지 못한 미래의 여행자에게 맞춤형 여행지를 추천합니다.

나이, 성별, 본인의 취향을 입력하고 맞는 여행지를 추천받으세요!

## :baby_chick: Demo
<p float="left">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 25 42" src="https://github.com/user-attachments/assets/72686edd-7a89-434b-b69b-5d6e5be9325e">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 26 22" src="https://github.com/user-attachments/assets/4a255e9a-8cf8-4b06-8d49-ab30637d55bf">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 31 58" src="https://github.com/user-attachments/assets/db616bdc-adcb-4f4e-8f4c-421d6a0f2e17">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 29 25" src="https://github.com/user-attachments/assets/08b287fd-5270-41b8-ad2e-83edcec75f38">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 28 21" src="https://github.com/user-attachments/assets/150b2122-1a6b-4e98-bab8-185d16be4055">
</p>

## ⭐ Main Feature
### 정기 결제 기능
- 아임포트(Iamport)를 이용한 정기 결제 기능 구현

### 회원가입 및 로그인 
- JWT 이용

### 기타 기능
- 상품 리스트 조회 및 세부 사항 조회
- 마이페이지

## 💻 Getting Started
(↑해당 프로젝트 설치 및 실행 방법)

### Installation
```
yarn install
```
### Develop Mode
```
yarn dev
```

## 🔧 Stack
- **Language**: JavaScript
- **Library & Framework** : Node.js
- **Database** : AWS RDS (MariaDB)
- **ORM** : Sequelize
- **Deploy**: AWS EC2

## :open_file_folder: Project Structure

```markdown
src
├── common
│   ├── config
│   ├── types
│   └── utils
│       ├── types
│       └── utils
├── controller
├── entity
├── infrastructure
│   ├── express
│   └── typeorm
├── repository
└── ser
```

## 🔨 Server Architecture
(↑서버 아키텍처에 대한 내용을 그림으로 표현함으로써 인프라를 어떻게 구축했는 지 한 눈에 보여줄 수 있다.)
![](https://docs.aws.amazon.com/gamelift/latest/developerguide/images/realtime-whatis-architecture-vsd.png)

## ⚒ CI/CD
- github actions를 활용해서 지속적 통합 및 배포
- `feature` 브랜치에서 `dev`로 Pull Request를 보내면, CI가 동작된다.
- `dev`에서 `master`로 Pull Request를 보내면, CI가 동작되고 Merge가 되면, 운영 리소스에 배포된다.

## 👨‍💻 Role & Contribution

**Frontend (Web)**

- 관리자 페이지 (Vue.js) 개발
- 전체 아키텍처 구성

**Devops**

- CI/CD 구축 (Docker, Github Action)
- 서버 모니터링

**etc**

- 전체 개발 일정 및 이슈 관리

## 👨‍👩‍👧‍👦 Developer
*  **박재성** ([jaeseongDev](https://github.com/jaeseongDev))
*  **고성진** ([seongjin96](https://github.com/seongjin96))
*  **조연희** ([yeoneei](https://github.com/yeoneei))
