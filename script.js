document.addEventListener('DOMContentLoaded', () => {
    const zodiacInfo = {
         aries: {
        name: "牡羊座 (Aries)",
        dates: "3月21日 - 4月19日",
        traits: "熱情、勇敢、自信",
        image: "星座1.jpeg",
        career: "企業家、運動員、消防員",
        loveMatch: "獅子座、射手座",
        element: "火",
        rulingPlanet: "火星"
    },
    taurus: {
        name: "金牛座 (Taurus)",
        dates: "4月20日 - 5月20日",
        traits: "穩重、實際、可靠",
        image: "星座2.jpeg",
        career: "金融專家、藝術家、廚師",
        loveMatch: "處女座、摩羯座",
        element: "土",
        rulingPlanet: "金星"
    },
    gemini: {
        name: "雙子座 (Gemini)",
        dates: "5月21日 - 6月20日",
        traits: "機智、善變、靈活",
        image: "星座3.jpeg",
        career: "作家、記者、教師",
        loveMatch: "天秤座、水瓶座",
        element: "風",
        rulingPlanet: "水星"
    },
    cancer: {
        name: "巨蟹座 (Cancer)",
        dates: "6月21日 - 7月22日",
        traits: "敏感、直覺、情感豐富",
        image: "星座4.jpg",
        career: "心理學家、護理師、教師",
        loveMatch: "天蠍座、雙魚座",
        element: "水",
        rulingPlanet: "月亮"
    },
    leo: {
        name: "獅子座 (Leo)",
        dates: "7月23日 - 8月22日",
        traits: "自信、慷慨、領導力強",
        image: "星座5.jpg",
        career: "演員、領袖、管理者",
        loveMatch: "牡羊座、射手座",
        element: "火",
        rulingPlanet: "太陽"
    },
    virgo: {
        name: "處女座 (Virgo)",
        dates: "8月23日 - 9月22日",
        traits: "務實、細心、追求完美",
        image: "星座6.jpeg",
        career: "分析師、營養師、科學家",
        loveMatch: "金牛座、摩羯座",
        element: "土",
        rulingPlanet: "水星"
    },
    libra: {
        name: "天秤座 (Libra)",
        dates: "9月23日 - 10月22日",
        traits: "公平、公正、社交性強",
        image: "星座7.jpg",
        career: "外交官、設計師、律師",
        loveMatch: "雙子座、水瓶座",
        element: "風",
        rulingPlanet: "金星"
    },
    scorpio: {
        name: "天蠍座 (Scorpio)",
        dates: "10月23日 - 11月21日",
        traits: "神秘、堅毅、忠誠",
        image: "星座8.jpg",
        career: "偵探、心理學家、外科醫生",
        loveMatch: "巨蟹座、雙魚座",
        element: "水",
        rulingPlanet: "冥王星、火星"
    },
    sagittarius: {
        name: "射手座 (Sagittarius)",
        dates: "11月22日 - 12月21日",
        traits: "樂觀、愛冒險、自由",
        image: "星座9.jpg",
        career: "旅行家、教師、哲學家",
        loveMatch: "牡羊座、獅子座",
        element: "火",
        rulingPlanet: "木星"
    },
    capricorn: {
        name: "摩羯座 (Capricorn)",
        dates: "12月22日 - 1月19日",
        traits: "務實、野心、責任感強",
        image: "星座10.jpg",
        career: "CEO、會計師、工程師",
        loveMatch: "金牛座、處女座",
        element: "土",
        rulingPlanet: "土星"
    },
    aquarius: {
        name: "水瓶座 (Aquarius)",
        dates: "1月20日 - 2月18日",
        traits: "創新、獨立、智慧",
        image: "星座11.jpg",
        career: "發明家、科學家、社會活動家",
        loveMatch: "雙子座、天秤座",
        element: "風",
        rulingPlanet: "天王星、土星"
    },
    pisces: {
        name: "雙魚座 (Pisces)",
        dates: "2月19日 - 3月20日",
        traits: "富有同情心、感性、藝術性強",
        image: "星座12.jpg",
        career: "藝術家、音樂家、療癒師",
        loveMatch: "巨蟹座、天蠍座",
        element: "水",
        rulingPlanet: "海王星、木星"
    },
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

    // 星座按鈕事件處理
    const buttons = document.querySelectorAll('.zodiac-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sign = button.getAttribute('data-sign');
            showZodiacInfo(sign);
        });
    });

    // 隨機選擇星座
    randomButton.addEventListener('click', () => {
        const signs = Object.keys(zodiacInfo);
        const randomSign = signs[Math.floor(Math.random() * signs.length)];
        showZodiacInfo(randomSign);
    });

    // 顯示星座資訊的函數
    function showZodiacInfo(sign) {
        const zodiac = zodiacInfo[sign];
        zodiacName.textContent = zodiac.name;
        zodiacImage.src = zodiac.image;
        zodiacDates.textContent = `日期範圍: ${zodiac.dates}`;
        zodiacTraits.textContent = `性格特點: ${zodiac.traits}`;
        zodiacCareer.textContent = `適合職業: ${zodiac.career}`;
        zodiacLoveMatch.textContent = `愛情配對: ${zodiac.loveMatch}`;
        zodiacElement.textContent = `元素: ${zodiac.element}`;
        zodiacRulingPlanet.textContent = `守護星: ${zodiac.rulingPlanet}`;

        homePage.style.display = 'none';
        zodiacPage.style.display = 'block';
    }

    // 返回首頁按鈕事件
    backHomeButton.addEventListener('click', () => {
        zodiacPage.style.display = 'none';
        homePage.style.display = 'block';
    });
});
