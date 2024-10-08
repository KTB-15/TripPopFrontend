
# TripPop 🌏


![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=zustand&logoColor=%2361DAFB)



> 맞춤형 여행지 추천 서비스 TripPop

<img width="1692" alt="스크린샷 2024-09-23 오전 10 21 36" src="https://github.com/user-attachments/assets/312afcc3-4bfd-4c26-862e-f738d3518c9b">


## 📖 Description

여행을 가고싶지만 여행지를 고르지 못한 미래의 여행자에게 **AI가 맞춤형 여행지**를 추천합니다.

나이, 성별, 본인의 취향을 입력하고 맞는 여행지를 추천받으세요!

## :baby_chick: Demo
<p float="left">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 25 42" src="https://github.com/user-attachments/assets/72686edd-7a89-434b-b69b-5d6e5be9325e">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 26 22" src="https://github.com/user-attachments/assets/4a255e9a-8cf8-4b06-8d49-ab30637d55bf">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 34 26" src="https://github.com/user-attachments/assets/1601ec17-6c65-4118-8458-601ad0388571">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 36 36" src="https://github.com/user-attachments/assets/b6a20884-7506-43c8-a3ca-1917b3de6c67">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 36 46" src="https://github.com/user-attachments/assets/1fc43755-be0e-4568-996c-2e7dd7b4931a">
    <img width="200" alt="스크린샷 2024-09-23 오전 10 56 43" src="https://github.com/user-attachments/assets/c4d3b1d6-5687-48d7-b4ac-3f2e41c0dffc">
</p>

## ⭐ Main Feature
### 회원가입 및 로그인
- base 로그인, OAuth2 로그인
- JWT 이용

### 이미지 응답
- **Google API**를 활용하여 AI가 추천해준 장소에 대한 이미지 응답
- 즐겨찾기


## 💻 Getting Started

### Installation
```
yarn
```
### Develop Mode
```
yarn dev
```

## 🔧 Stack
- **Language**: TypeScript
- **Library & Framework** : React.js + Vite
- **Status Management** : Zustand
- **CSS** : Tailwindcss

## :open_file_folder: Project Structure

```markdown
src
├── api
├── assets
│   └── font
├── components
│   ├── common
│       └── icon
│   ├── layout
│       └── header
│   ├── place
│       ├── card
│       └── review
│   ├── survey
│   └── userinfo
│       └── card
├── data
├── hooks
├── pages
│   └── userinfo
└── stores
```

## 🔨 Improvement (공통 API 처리)
Fetch API와 React Query를 활용하여 공통 API 훅(useApi)을 만들었습니다.
<img width="600" alt="trippop-api" src="https://github.com/user-attachments/assets/9e59199a-e171-4c7d-8073-b6154211b214">


`useApiQuery`와 `useApiMutate`를 만들어, 리액트 쿼리의 기능과 Fetch API에서 공통적인 설정 정보를 모두 관리하도록하여, 유지보수가 쉽도록 설계했습니다.

<p float="left">
    <img width="500" alt="스크린샷 2024-09-23 오전 10 59 48" src="https://github.com/user-attachments/assets/488254fb-e044-49b5-81dc-16f03276e0ce">
    <img width="500" alt="스크린샷 2024-09-23 오전 11 00 14" src="https://github.com/user-attachments/assets/e8e66345-eaa0-486b-8177-031a0f61a674">
</p>



## 👨‍👩‍👧‍👦 Developer
*  **한신** ([Urchinode](https://github.com/Urchinode))
*  **김영진** ([KmYgJn](https://github.com/KmYgJn))
