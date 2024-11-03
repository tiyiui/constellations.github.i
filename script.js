document.addEventListener('DOMContentLoaded', () => {
    const zodiacInfo = {
        aries: {
            name: "牡羊座 (Aries)",
            dates: "3月21日 - 4月19日",
            traits: "熱情、勇敢、自信",
            career: "企業家、運動員",
            loveMatch: "獅子座、射手座",
            element: "火",
            rulingPlanet: "火星",
            image: "星座1.jpeg"  // 替換為您的圖片路徑
        },
        taurus: {
            name: "金牛座 (Taurus)",
            dates: "4月20日 - 5月20日",
            traits: "穩重、實際、可靠",
            career: "藝術家、金融專家",
            loveMatch: "處女座、摩羯座",
            element: "土",
            rulingPlanet: "金星",
            image: "星座2.jpeg"  // 替換為您的圖片路徑
        },
        gemini: {
            name: "雙子座 (Gemini)",
            dates: "5月21日 - 6月20日",
            traits: "機智、善變、靈活",
            career: "作家、老師",
            loveMatch: "天秤座、水瓶座",
            element: "風",
            rulingPlanet: "水星",
            image: "星座3.jpeg"  // 替換為您的圖片路徑
        },
        cancer: {
            name: "巨蟹座 (Cancer)",
            dates: "6月21日 - 7月22日",
            traits: "敏感、直覺、情感豐富",
            career: "護理、心理學家",
            loveMatch: "雙魚座、處女座",
            element: "水",
            rulingPlanet: "月亮",
            image: "星座4.jpg"  // 替換為您的圖片路徑
        },
        leo: {
            name: "獅子座 (Leo)",
            dates: "7月23日 - 8月22日",
            traits: "自信、慷慨、領導力強",
            career: "演藝人員、管理者",
            loveMatch: "白羊座、射手座",
            element: "火",
            rulingPlanet: "太陽",
            image: "星座5.jpg"  // 替換為您的圖片路徑
        },
        virgo: {
            name: "處女座 (Virgo)",
            dates: "8月23日 - 9月22日",
            traits: "務實、細心、追求完美",
            career: "醫療工作者、分析師",
            loveMatch: "金牛座、摩羯座",
            element: "土",
            rulingPlanet: "水星",
            image: "星座6.jpeg"  // 替換為您的圖片路徑
        },
        libra: {
            name: "天秤座 (Libra)",
            dates: "9月23日 - 10月22日",
            traits: "公平、公正、社交性強",
            career: "律師、設計師",
            loveMatch: "雙子座、水瓶座",
            element: "風",
            rulingPlanet: "金星",
            image: "星座7.jpg"  // 替換為您的圖片路徑
        },
        scorpio: {
            name: "天蠍座 (Scorpio)",
            dates: "10月23日 - 11月21日",
            traits: "神秘、堅毅、忠誠",
            career: "偵探、心理醫生",
            loveMatch: "巨蟹座、雙魚座",
            element: "水",
            rulingPlanet: "冥王星",
            image: "星座8.jpg"  // 替換為您的圖片路徑
        },
        sagittarius: {
            name: "射手座 (Sagittarius)",
            dates: "11月22日 - 12月21日",
            traits: "樂觀、愛冒險、自由",
            career: "旅行作家、導遊",
            loveMatch: "白羊座、獅子座",
            element: "火",
            rulingPlanet: "木星",
            image: "星座9.jpg"  // 替換為您的圖片路徑
        },
        capricorn: {
            name: "摩羯座 (Capricorn)",
            dates: "12月22日 - 1月19日",
            traits: "務實、野心、責任感強",
            career: "企業家、工程師",
            loveMatch: "金牛座、處女座",
            element: "土",
            rulingPlanet: "土星",
            image: "星座10.jpg"  // 替換為您的圖片路徑
        },
        aquarius: {
            name: "水瓶座 (Aquarius)",
            dates: "1月20日 - 2月18日",
            traits: "創新、獨立、智慧",
            career: "發明家、社會工作者",
            loveMatch: "雙子座、天秤座",
            element: "風",
            rulingPlanet: "天王星",
            image: "星座11.jpg"  // 替換為您的圖片路徑
        },
        pisces: {
            name: "雙魚座 (Pisces)",
            dates: "2月19日 - 3月20日",
            traits: "富有同情心、感性、藝術性強",
            career: "藝術家、音樂家",
            loveMatch: "巨蟹座、天蠍座",
            element: "水",
            rulingPlanet: "海王星",
            image: "星座12.jpg"  // 替換為您的圖片路徑
        }
    };

    const homePage = document.getElementById('home-page');
    const zodiacPage = document.getElementById('zodiac-page');
    const zodiacName = document.getElementById('zodiac-name');
    const zodiacDates = document.getElementById('zodiac-dates');
    const zodiacTraits = document.getElementById('zodiac-traits');
    const zodiacCareer = document.getElementById('zodiac-career');
    const zodiacLoveMatch = document.getElementById('zodiac-love-match');
    const zodiacElement = document.getElementById('zodiac-element');
    const zodiacRulingPlanet = document.getElementById('zodiac-ruling-planet');
    const zodiacImage = document.getElementById('zodiac-image');
    const backHomeButton = document.getElementById('back-home-button');
    const randomButton = document.getElementById('random-button');

    // 取得所有星座按鈕，並為它們添加點擊事件
    const buttons = document.querySelectorAll('.zodiac-button');
    buttons.forEach(button => {
        // 懸停事件
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)'; // 放大效果
            button.style.transition = 'transform 0.2s'; // 過渡效果
        });

        // 移開事件
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)'; // 恢復原大小
        });

        // 按鈕點擊事件
        button.addEventListener('click', () => {
            const sign = button.getAttribute('data-sign');
            const zodiac = zodiacInfo[sign];

            // 更新星座頁面的內容
            zodiacName.textContent = zodiac.name;
            zodiacImage.src = zodiac.image;
            zodiacDates.textContent = `日期範圍: ${zodiac.dates}`;
            zodiacTraits.textContent = `性格特點: ${zodiac.traits}`;
            zodiacCareer.textContent = `適合職業: ${zodiac.career}`;
            zodiacLoveMatch.textContent = `愛情配對: ${zodiac.loveMatch}`;
            zodiacElement.textContent = `元素: ${zodiac.element}`;
            zodiacRulingPlanet.textContent = `守護星: ${zodiac.rulingPlanet}`;

            // 隱藏首頁，顯示星座詳情
            homePage.style.display = 'none';
            zodiacPage.style.display = 'block';
            setTimeout(() => {
                zodiacPage.classList.add('fade-in');
            }, 10); // 添加小延遲以確保過渡效果
        });
    });

    // 返回首頁按鈕事件
    backHomeButton.addEventListener('click', () => {
        zodiacPage.classList.remove('fade-in'); // 移除動畫類
        zodiacPage.style.display = 'none';
        homePage.style.display = 'block';
    });

    // 隨機星座展示功能
    randomButton.addEventListener('click', () => {
        const signs = Object.keys(zodiacInfo);
        const randomSign = signs[Math.floor(Math.random() * signs.length)];
        const zodiac = zodiacInfo[randomSign];

        // 更新星座頁面的內容
        zodiacName.textContent = zodiac.name;
        zodiacImage.src = zodiac.image;
        zodiacDates.textContent = `日期範圍: ${zodiac.dates}`;
        zodiacTraits.textContent = `性格特點: ${zodiac.traits}`;
        zodiacCareer.textContent = `適合職業: ${zodiac.career}`;
        zodiacLoveMatch.textContent = `愛情配對: ${zodiac.loveMatch}`;
        zodiacElement.textContent = `元素: ${zodiac.element}`;
        zodiacRulingPlanet.textContent = `守護星: ${zodiac.rulingPlanet}`;

        // 隱藏首頁，顯示星座詳情
        homePage.style.display = 'none';
        zodiacPage.style.display = 'block';
        setTimeout(() => {
            zodiacPage.classList.add('fade-in');
        }, 10); // 添加小延遲以確保過渡效果
    });
});

