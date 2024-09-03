import React, { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { useNavigate } from 'react-router-dom';

const TokenProvider = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 컴포넌트가 마운트될 때 getJwtToken 호출
        getJwtToken();
    }, []);

    const getJwtToken = async () => {
        try {
            const response = await fetch('http://localhost:8080/auth/jwt-token', {
                method: 'GET',
                credentials: 'include', // 쿠키를 포함하여 요청
            });

            if (response.ok) {
                const tokenDto = await response.json();

                const setTokens = useAuthStore.getState().setTokens;
                setTokens(tokenDto.accessToken, tokenDto.refreshToken);

                navigate('/');
            } else {
                console.error('Failed to retrieve token');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return null;
};

export default TokenProvider;
