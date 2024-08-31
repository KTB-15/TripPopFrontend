import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/stores/RegisterPageStore';
import { useLogin } from '@/hooks/useLogin';
import RegisterMemberPage from '@/pages/RegisterMemberPage';

const LoginPage = () => {
  const navigate = useNavigate();
  const { openModal } = useStore();
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useLogin();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    loginMutation.mutate({ memberId, password }, {
      onSuccess: () => {
        navigate('/');
      }
    });
  };

  return (
    <main className="flex min-h-screen bg-gray-100">
      {/* 왼쪽 40% 영역 */}
      <section className="flex w-2/5 flex-col bg-transparent">
        {/* 상단 50% */}
        <section className="flex flex-1 flex-col justify-end">
          <section className="relative text-right">
            <h1 className="mb-2 text-6xl font-bold text-blue-500">TripPop</h1>
            <p className="text-xl font-semibold text-black">여행 추천</p>
          </section>
        </section>
        {/* 하단 50% - 이미지 영역 */}
        <section className="relative h-1/2">
          <section
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/tour_image.png)' }}
          />
        </section>
      </section>

      {/* 오른쪽 60% 영역 */}
      <section className="flex w-3/5 items-center justify-center bg-transparent">
        <section className="w-full max-w-md rounded-lg bg-white p-10 shadow-lg">
          <form className="space-y-4" onSubmit={handleLogin}>
            <section className="flex items-center space-x-4">
              <label htmlFor="id" className="block w-1/3 text-sm font-medium text-gray-700">
                아이디
              </label>
              <input
                type="text"
                id="id"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                className="block w-2/3 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder=""
              />
            </section>
            <section className="flex items-center space-x-4">
              <label htmlFor="password" className="block w-1/3 text-sm font-medium text-gray-700">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-2/3 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder=""
              />
            </section>

            {/* 아이디 찾기 | 비밀번호 찾기 | 회원가입 링크 */}
            <section className="mb-0 mt-0 flex justify-end text-sm text-gray-500">
              <a href="#" className="hover:underline">
                아이디 찾기
              </a>
              <span className="px-2">|</span>
              <a href="#" className="hover:underline">
                비밀번호 찾기
              </a>
              <span className="px-2">|</span>
              <a href="#" className="hover:underline" onClick={openModal}>
                회원가입
              </a>
            </section>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 px-4 py-2 text-white shadow transition-colors duration-200 hover:bg-blue-600">
              로그인
            </button>

            <section className="my-6 flex items-center px-4">
              <section className="flex-grow border-t border-gray-300"></section>
              <h5 className="px-4 text-gray-400">소셜 계정으로 로그인</h5>
              <section className="flex-grow border-t border-gray-300"></section>
            </section>

            <section className="mt-4 flex justify-between px-4">
              <img src="/kakao_login_logo.png" alt="Kakao Login" className="h-12 cursor-pointer" />

              <img src="/google_login_logo.png" alt="Google Login" className="h-12 cursor-pointer" />

              <img src="/naver_login_logo.png" alt="Naver Login" className="h-12 cursor-pointer" />
            </section>
          </form>
        </section>
      </section>

      {/* 회원가입 모달 */}
      <RegisterMemberPage />
    </main>
  );
};

export default LoginPage;
