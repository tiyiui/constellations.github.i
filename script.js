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
        //...其他星座的資料以此類推
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
