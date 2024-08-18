const LoginPage = () => {
    return (
        <main className="min-h-screen flex bg-gray-100">
            {/* 왼쪽 40% 영역 */}
            <div className="w-2/5 flex flex-col bg-transparent">
                {/* 상단 50% */}
                <div className="flex-1 flex flex-col justify-end">
                    <div className="relative text-right">
                        <h1 className="text-6xl font-bold text-blue-500 mb-2">TripPop</h1>
                        <p className="text-xl font-semibold text-black">여행 추천</p>
                    </div>
                </div>
                {/* 하단 50% - 이미지 영역 */}
                <div className="relative h-1/2">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url(/tourImage.png)' }}
                    />
                </div>
            </div>

            {/* 오른쪽 60% 영역 */}
            <div className="w-3/5 flex items-center justify-center bg-transparent">
                <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-4xl font-bold text-center text-blue-500 mb-8">로그인</h2>
                    <form className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <label htmlFor="id" className="block text-sm font-medium text-gray-700 w-1/3">아이디</label>
                            <input 
                                type="id" 
                                id="id" 
                                className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder=""
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 w-1/3">비밀번호</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="block w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder=""
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition-colors duration-200">
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
