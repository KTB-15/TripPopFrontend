import React from 'react';
import CloseSVG from '@/components/common/icon/Close';
import { useStore } from '@/stores/RegisterPageStore';
import { useMutation } from '@tanstack/react-query';
import { FormData } from '@/stores/RegisterPageStore';

// member 등록 API 함수
const registerMember = async (formData: FormData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/member/join`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('회원가입에 실패했습니다.');
  }

  const responseData = await response.text();
  return responseData;
};

// 중복확인 API 함수
const checkIdDuplicate = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/member/exists/${id}`);

  if (!response.ok) {
    throw new Error('아이디 중복 확인에 실패했습니다.');
  }

  const res = await response.json();
  return res;
};

const RegisterMemberPage: React.FC = () => {
  const { isModalOpen, closeModal, formData, setFormData } = useStore();
  const [isIdChecked, setIsIdChecked] = React.useState<boolean | null>(null);

  const mutation = useMutation({
    mutationFn: registerMember,
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      closeModal(); // 모달 닫기 및 데이터 리셋
    },
    onError: (error: any) => {
      alert(error.message || '회원가입 중 오류가 발생했습니다.');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ [id]: value });

    if (id === 'memberId') {
      setIsIdChecked(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 입력 검증
    if (!formData.memberId) {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (!isIdChecked) {
      alert('아이디 중복 확인을 먼저 해주세요.');
      return;
    }
    if (formData.password !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!formData.password || !formData.passwordConfirm) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (!formData.gender) {
      alert('성별을 선택해주세요.');
      return;
    }
    if (!formData.ageGroup) {
      alert('연령대를 선택해주세요.');
      return;
    }

    mutation.mutate(formData);
  };

  const handleCheckId = async () => {
    if (!formData.memberId) {
      alert('아이디를 입력해주세요.');
      return;
    }

    try {
      const exists = await checkIdDuplicate(formData.memberId);
      setIsIdChecked(!exists);
      if (exists) {
        alert('이미 존재하는 아이디입니다.');
      } else {
        alert('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      alert('아이디 중복 확인 중 오류가 발생했습니다.');
    }
  };

  if (!isModalOpen) return null;

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <section className="relative w-full max-w-sm rounded-lg bg-white p-8 shadow-lg">
        <button className="absolute right-2 top-2 rounded p-2 text-blue-500" onClick={closeModal} aria-label="닫기">
          <CloseSVG />
        </button>
        <section className="mb-5"></section>

        {/* 회원가입 폼 */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* 아이디 */}
          <section className="flex items-center space-x-4">
            <label htmlFor="id" className="block w-1/3 text-sm font-medium text-gray-700">
              아이디
            </label>
            <input
              type="text"
              id="memberId"
              value={formData.memberId}
              onChange={handleInputChange}
              className="block w-2/3 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder=""
            />
          </section>

          {/* 중복확인 버튼 */}
          <section className="mb-4 mt-1 flex justify-end">
            <button
              type="button"
              onClick={handleCheckId}
              disabled={!formData.memberId}
              className={`rounded-md px-4 py-1 shadow transition-colors duration-200 ${formData.memberId ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}>
              중복확인
            </button>
          </section>

          {/* 비밀번호 */}
          <section className="flex items-center space-x-4">
            <label htmlFor="password" className="block w-1/3 text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="block w-2/3 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder=""
            />
          </section>

          {/* 비밀번호 재입력 */}
          <section className="flex items-center space-x-4">
            <label htmlFor="passwordConfirm" className="block w-1/3 text-sm font-medium text-gray-700">
              비밀번호 재입력
            </label>
            <input
              type="password"
              id="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleInputChange}
              className="block w-2/3 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              placeholder=""
            />
          </section>

          {/* 성별 선택 박스 */}
          <section className="flex items-center space-x-4">
            <label htmlFor="gender" className="block w-1/3 text-sm font-medium text-gray-700">
              성별
            </label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="block w-2/3 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
              <option value="">성별을 선택하세요</option>
              <option value="MALE">남성</option>
              <option value="FEMALE">여성</option>
            </select>
          </section>

          {/* 연령대 선택 박스 */}
          <section className="flex items-center space-x-4">
            <label htmlFor="ageGroup" className="block w-1/3 text-sm font-medium text-gray-700">
              연령대
            </label>
            <select
              id="ageGroup"
              value={formData.ageGroup}
              onChange={handleInputChange}
              className="block w-2/3 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
              <option value="">연령대를 선택하세요</option>
              <option value="0">0~9</option>
              <option value="10">10~19</option>
              <option value="20">20~29</option>
              <option value="30">30~39</option>
              <option value="40">40~49</option>
              <option value="50">50~59</option>
              <option value="60">60~69</option>
              <option value="70">70~79</option>
              <option value="80">80~89</option>
              <option value="90">90~99</option>
            </select>
          </section>

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white shadow transition-colors duration-200 hover:bg-blue-600">
            회원가입
          </button>
        </form>
      </section>
    </section>
  );
};

export default RegisterMemberPage;
