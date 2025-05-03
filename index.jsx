import { useState } from 'react';

function App() {
    // 아코디언 상태 관리
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    };

    // 주차별 콘텐츠 데이터
    const weeklyContents = [
        {
            week: 1,
            links: [
                { title: "hello, World", url: "ch1/hello, world.html" }
            ]
        },
        {
            week: 2,
            links: [
                { title: "Login made with bootstrap", url: "ch2/bootstrap_login.html" }
            ]
        },
        {
            week: 3,
            links: [
                { title: "html 태그 연습", url: "ch3/index.html" }
            ]
        },
        {
            week: 4,
            links: [
                { title: "gogodan", url: "ch4/gogodan.html" }
            ]
        },
        {
            week: 5,
            links: [
                { title: "버튼 1", url: "ch5/ch3_1.html" },
                { title: "버튼 2", url: "ch5/ch3_2.html" },
                { title: "버튼 3", url: "ch5/ch3_3.html" },
                { title: "마우스 눌렀다 놓았다", url: "ch5/ch4_1.html" },
                { title: "주문 1, 2 alert", url: "ch5/ch4_2.html" }
            ]
        },
        {
            week: 6,
            links: [
                { title: "book", url: "ch6/server/book.html" }
            ]
        },
        {
            week: 7,
            links: [
                { title: "데이터 베이스 연동하기", url: "ch3/index.html" }
            ]
        },
        {
            week: "여러가지 기능 구현해보기",
            links: [
                { title: "DoItList", url: "personal_practice/DoItList.html" },
                { title: "숫자 더하기", url: "personal_practice/addNum.html" },
                { title: "버튼클릭으로 숫자 더하기", url: "personal_practice/controllNum.html" },
                { title: "카드 뒤집기", url: "personal_practice/filpCard.html" },
                { title: "목록 펼치기", url: "personal_practice/openList.html" },
                { title: "슬라이더", url: "personal_practice/slider.html" },
                { title: "타임테이블", url: "personal_practice/Time_Table/page1_dynamic.html" }
            ]
        }
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
                <h1 className="p-4 text-2xl font-bold">수업 실습 및 개인 예제 코드</h1>
                <hr className="mb-6" />

                {/* 주차별 아코디언 렌더링 */}
                <div className="space-y-6">
                    {weeklyContents.map((weekData, index) => (
                        <section key={index}>
                            <button
                                className={`hover:bg-gray-300 transition text-black px-4 py-2 rounded text-xl font-semibold m-2 ${
                                    activeIndex === index ? 'bg-gray-200' : ''
                                }`}
                                onClick={() => handleToggle(index)}
                            >
                                {activeIndex === index ? '👇' : '👉'} {weekData.week}주차
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeIndex === index ? 'h-auto' : 'h-0'
                                }`}
                            >
                                <ul>
                                    {weekData.links.map((link, linkIndex) => (
                                        <div key={linkIndex}>
                                            <a
                                                href={link.url}
                                                className="inline-block hover:bg-blue-300 text-black transition font-bold py-2 px-4 mx-4 rounded"
                                            >
                                                ✨ {link.title}
                                            </a>
                                            {linkIndex < weekData.links.length - 1 && <br />}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    ))}
                </div>
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