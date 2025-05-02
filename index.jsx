import { useState, useEffect } from 'react';

function App() {
// 아코디언 상태 관리
const [activeIndex, setActiveIndex] = useState(null);

const handleToggle = (index) => {
setActiveIndex(activeIndex === index ? null : index);
};

// 주차별 콘텐츠 데이터
const weeklyContents = [
{ week: 1, links: ['ch1/hello, world.html'] },
{ week: 2, links: ['ch2/bootstrap_login.html'] },
// ... 다른 주차 데이터 추가
];

return (
<div className="bg-gray-500 min-h-screen">
    {/* 헤더 섹션 */}
    <header className="text-center p-5 bg-gray-200 h-40 shadow-md rounded">
        <h1 className="text-4xl font-bold hover:bg-gray-300 transition py-4">
            갱수의 웹플밍
        </h1>
        <nav className="flex flex-wrap justify-center gap-4 mt-4">
            {['주차별 실습', '타임테이블 제작실', '자기 소개'].map((item) => (
            <a
                    key={item}
                    href="#"
                    className="hover:bg-blue-300 transition px-4 py-2 rounded"
            >
                {item}
            </a>
            ))}
        </nav>
    </header>

    {/* 메인 레이아웃 */}
    <main className="flex px-4 py-8 gap-4">
        {/* 사이드바 */}
        <aside className="w-64 bg-gray-300 border-black border shadow-md rounded p-5">
            <img
                    src="/image/kangssu.jpg"
                    className="w-full h-auto rounded-xl mb-4"
                    alt="갱수 프로필"
            />
            <a
                    href="https://github.com/Siul49"
                    className="block text-center hover:bg-blue-300 transition p-2 rounded"
            >
                GitHub
            </a>
        </aside>

        {/* 메인 컨텐츠 */}
        <article className="flex-1 bg-white border-black border shadow-md rounded p-4">
            <h1 className="text-2xl font-bold p-4">수업 실습 및 개인 예제 코드</h1>

            {/* 아코디언 섹션 */}
            {weeklyContents.map((weekData, index) => (
            <section key={index} className="mb-4">
                <button
                        className={`w-full text-left hover:bg-gray-300 transition px-4 py-2 rounded text-xl font-semibold ${
                        activeIndex === index ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleToggle(index)}
                >
                {activeIndex === index ? '👇' : '👉'} {weekData.week}주차
                </button>

                <div
                        className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
                >
                <div className="p-4">
                    {weekData.links.map((link, linkIndex) => (
                    <a
                            key={linkIndex}
                            href={link}
                            className="block hover:bg-blue-300 transition p-2 rounded mb-2"
                    >
                        ✨ {link.split('/').pop().replace('.html', '')}
                    </a>
                    ))}
                </div>
</div>
</section>
))}
</article>
</main>

{/* 푸터 */}
<footer className="p-6 text-center text-gray-400">
    © 2024 갱수의 웹플밍. All rights reserved.
</footer>
</div>
);
}

export default App;
