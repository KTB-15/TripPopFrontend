import React, { useState } from 'react';
import CloseSVG from '@/components/common/icon/Close';
import { useStore } from '@/stores/RegisterPageStore';
import areasData from '@/data/areas.json';
import { useMutation } from '@tanstack/react-query';

interface Area {
    name: string;
    subArea: string[];
}

const registerMember = async (formData: any) => {
    const response = await fetch('http://localhost:8080/member', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error('회원가입에 실패했습니다.');
    }
    return response.json();
};

// 중복확인 API 함수
const checkIdDuplicate = async (id: string) => {
    const response = await fetch(`http://localhost:8080/member/${id}`);

    if (!response.ok) {
        throw new Error('아이디 중복 확인에 실패했습니다.');
    }

    // 응답이 JSON 형식이라고 가정하고 변환
    try {
        const data = await response.json();
        return data.exists; // 서버에서 { exists: true } 또는 { exists: false } 형태로 반환한다고 가정
    } catch (error) {
        // JSON 변환 실패 시
        throw new Error('응답을 JSON으로 변환하는 중 오류가 발생했습니다.');
    }
};



const RegisterMemberPage: React.FC = () => {
    const { isModalOpen, closeModal } = useStore();
    const [areas] = useState<Area[]>(areasData);
    const [selectedArea, setSelectedArea] = useState<string>('');
    const [subAreas, setSubAreas] = useState<string[]>([]);
    
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        passwordConfirm: '',
        gender: '',
        ageGroup: '',
        area: '',
        subArea: '',
    });

    const [isIdChecked, setIsIdChecked] = useState<boolean | null>(null); // 중복 확인 상태

    const mutation = useMutation({
        mutationFn: registerMember,
        onSuccess: () => {
            alert('회원가입이 완료되었습니다.');
            closeModal(); // 모달 닫기
        },
        onError: (error: any) => {
            alert(error.message || '회원가입 중 오류가 발생했습니다.');
        },
    });

    const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        setSelectedArea(selected);

        const area = areas.find(a => a.name === selected);
        setSubAreas(area ? area.subArea : []);
        setFormData({ ...formData, area: selected, subArea: '' }); // 선택 시 하위 지역도 리셋
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 폼의 기본 동작 방지

        if (formData.password !== formData.passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (isIdChecked === false) {
            alert('아이디 중복 확인을 먼저 해주세요.');
            return;
        }

        mutation.mutate(formData);
    };

    // 중복확인 버튼 클릭 핸들러
    const handleCheckId = async () => {
        try {
            const exists = await checkIdDuplicate(formData.id);
            setIsIdChecked(!exists); // 중복이 없는 경우 true, 중복인 경우 false
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* 아이디 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="id" className="block text-sm font-medium text-gray-700 w-1/3">아이디</label>
                        <input
                            type="text"
                            id="id"
                            value={formData.id}
                            onChange={handleInputChange}
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder=""
                        />
                    </section>

                    {/* 중복확인 버튼 */}
                    <section className="flex justify-end mt-1 mb-4">
                        <button
                            type="button"
                            onClick={handleCheckId}
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
                            value={formData.password}
                            onChange={handleInputChange}
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder=""
                        />
                    </section>

                    {/* 비밀번호 재입력 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700 w-1/3">비밀번호 재입력</label>
                        <input
                            type="password"
                            id="passwordConfirm"
                            value={formData.passwordConfirm}
                            onChange={handleInputChange}
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder=""
                        />
                    </section>

                    {/* 성별 선택 박스 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 w-1/3">성별</label>
                        <select
                            id="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="">성별을 선택하세요</option>
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                        </select>
                    </section>

                    {/* 연령대 선택 박스 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 w-1/3">연령대</label>
                        <select
                            id="ageGroup"
                            value={formData.ageGroup}
                            onChange={handleInputChange}
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

                    {/* 시/도 선택 박스 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700 w-1/3">시/도</label>
                        <select
                            id="area"
                            value={formData.area}
                            onChange={handleAreaChange}
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="">시/도를 선택하세요</option>
                            {areas.map(area => (
                                <option key={area.name} value={area.name}>{area.name}</option>
                            ))}
                        </select>
                    </section>

                    {/* 구/군/구 선택 박스 */}
                    <section className="flex items-center space-x-4">
                        <label htmlFor="subArea" className="block text-sm font-medium text-gray-700 w-1/3">구/군/구</label>
                        <select
                            id="subArea"
                            value={formData.subArea}
                            onChange={handleInputChange}
                            className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="">구/군/구를 선택하세요</option>
                            {subAreas.map(subArea => (
                                <option key={subArea} value={subArea}>{subArea}</option>
                            ))}
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

