import CloseSVG from '@/components/common/icon/Close';
import React from 'react';

// Props 타입 정의
type RegisterMemberPageProps = {
    isModalOpen: boolean;
    closeModal: () => void;
};

const RegisterMemberPage: React.FC<RegisterMemberPageProps> = ({ isModalOpen, closeModal }) => {
    if (!isModalOpen) return null;

    return (
        <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <section className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
                <button
                    className="absolute top-2 right-2 p-2 text-blue-500 rounded"
                    onClick={closeModal}
                    aria-label="닫기"
                >
                    <CloseSVG />
                </button>
                <section className="mb-5"></section>

                {/* 회원가입 폼 */}
                <form className="space-y-4">
                    {/* 아이디 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="id" className="block text-sm font-medium text-gray-700 w-1/3">아이디</label>
                        <input
                            type="text"
                            id="id" 
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder=""
                        />
                    </section>

                    {/* 중복확인 버튼 */}
                    <section className="flex justify-end mt-1 mb-4">
                        <button
                            type="button"
                            className="bg-blue-500 text-white py-1 px-4 rounded-md shadow hover:bg-blue-600 transition-colors duration-200"
                        >
                            중복확인
                        </button>
                    </section>

                    {/* 비밀번호 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 w-1/3">비밀번호</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder=""
                        />
                    </section>

                    {/* 비밀번호 재입력 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="password-confirm" className="block text-sm font-medium text-gray-700 w-1/3">비밀번호 재입력</label>
                        <input 
                            type="password" 
                            id="password-confirm" 
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder=""
                        />
                    </section>

                    {/* 성별 선택 박스 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 w-1/3">성별</label>
                        <select
                            id="gender"
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="">성별을 선택하세요</option>
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                        </select>
                    </section>

                    {/* 연령대 선택 박스 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="age-group" className="block text-sm font-medium text-gray-700 w-1/3">연령대</label>
                        <select
                            id="age-group"
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="">연령대를 선택하세요</option>
                            <option value="0-9">0~9</option>
                            <option value="10-19">10~19</option>
                            <option value="20-29">20~29</option>
                            <option value="30-39">30~39</option>
                            <option value="40-49">40~49</option>
                            <option value="50-59">50~59</option>
                            <option value="60-69">60~69</option>
                            <option value="70-79">70~79</option>
                        </select>
                    </section>

                    {/* 회원가입 버튼 */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition-colors duration-200"
                    >
                        회원가입
                    </button>
                </form>
            </section>
        </section>
    );
};

export default RegisterMemberPage;
