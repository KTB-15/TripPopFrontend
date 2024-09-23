
# TripPop 🌏



![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)



> 한 사람을 위해 마음을 전달하는 온라인 롤링페이퍼! 👉 https://rollingpaper.site/

(↑프로젝트 한 줄 설명 : 설명을 장황하게 작성하는 것보다 한 줄로 어떤 프로젝트인지 설명하는 것이 훨씬 직관적이다.)



![](https://user-images.githubusercontent.com/38487811/90950455-85d36700-e48c-11ea-9b79-72b5dcb6c6d6.png)

(↑프로젝트를 대표하는 대표 이미지)


## 📖 Description

오프라인에 존재했던 롤링페이퍼 서비스를 온라인으로 옮겨왔습니다.

친구들, 동료들과 함께 링크를 공유하여 한 사람을 위한 롤링페이퍼를 만들어보세요.

다양한 종류의 편지지와 스티커로 화면을 꾸미고, 소중한 사람에게 뜻깊은 경험을 선물하세요!

(↑프로젝트에 대한 자세한 설명)

## :baby_chick: Demo
(↑해당 프로젝트가 실제 배포되고 있지 않아서, 이미지로 프로젝트의 뷰를 대체할 경우)
<p float="left">
    <img src="https://lh3.googleusercontent.com/iYHEwh2_Q6nIKS67eItV4AwIokeJDNe0ojtpWGqKpRyhaRlmCSmBcnkFNCmXbTkajKA=w2560-h1330-rw" width=200 />
    <img src="https://lh3.googleusercontent.com/xl0sqT6Jz1p9Gq9slw4VXRr-akf4v74b_k3QkZUMZPvYV37-e5LqTZcOjofof4Xyl48=w2560-h1330-rw" width=200 />
    <img src="https://lh3.googleusercontent.com/JqUUXWSgU0bhSBpOObERLvfUGE3eBnInmYvDMY3S2aAatyeFKLOifWnBLgZ0KLGbmA=w2560-h1330-rw" width=200 />
    <img src="https://lh3.googleusercontent.com/AdN5fkguQMSc4M6iVkAFONsuxZhOQaKE7TDzuhF56FgDLORAnBv8160W7vva4a6kFBg=w2560-h1330-rw" width=200 />
    <img src="https://lh3.googleusercontent.com/ruDvvtKehqGB_4PX7QBsUY2RLDe_v6g5FL-_XmC6SUGjKUQqa08Uy-DtsNi8wYuuXU4=w2560-h1330-rw" width=200 />
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
