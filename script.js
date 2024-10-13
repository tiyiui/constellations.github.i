document.addEventListener('DOMContentLoaded', () => {
    const zodiacInfo = {
        aries: {
            name: "牡羊座 (Aries)",
            dates: "3月21日 - 4月19日",
            traits: "熱情、勇敢、自信",
            image: "星座1.jpeg"  // 新增圖片檔名
        },
        taurus: {
            name: "金牛座 (Taurus)",
            dates: "4月20日 - 5月20日",
            traits: "穩重、實際、可靠",
            image: "星座2.jpeg"  // 新增圖片檔名
        },
        gemini: {
            name: "雙子座 (Gemini)",
            dates: "5月21日 - 6月20日",
            traits: "機智、善變、靈活",
            image: "星座3.jpeg"  // 新增圖片檔名
        },
        cancer: {
            name: "巨蟹座 (Cancer)",
            dates: "6月21日 - 7月22日",
            traits: "敏感、直覺、情感豐富",
            image: "星座4.jpg"  // 新增圖片檔名
        },
        leo: {
            name: "獅子座 (Leo)",
            dates: "7月23日 - 8月22日",
            traits: "自信、慷慨、領導力強",
            image: "星座5.jpg"  // 新增圖片檔名
        },
        virgo: {
            name: "處女座 (Virgo)",
            dates: "8月23日 - 9月22日",
            traits: "務實、細心、追求完美",
            image: "星座6.jpeg"  // 新增圖片檔名
        },
        libra: {
            name: "天秤座 (Libra)",
            dates: "9月23日 - 10月22日",
            traits: "公平、公正、社交性強",
            image: "星座7.jpg"  // 新增圖片檔名
        },
        scorpio: {
            name: "天蠍座 (Scorpio)",
            dates: "10月23日 - 11月21日",
            traits: "神秘、堅毅、忠誠",
            image: "星座8.jpg"  // 新增圖片檔名
        },
        sagittarius: {
            name: "射手座 (Sagittarius)",
            dates: "11月22日 - 12月21日",
            traits: "樂觀、愛冒險、自由",
            image: "星座9.jpg"  // 新增圖片檔名
        },
        capricorn: {
            name: "摩羯座 (Capricorn)",
            dates: "12月22日 - 1月19日",
            traits: "務實、野心、責任感強",
            image: "星座10.jpg"  // 新增圖片檔名
        },
        aquarius: {
            name: "水瓶座 (Aquarius)",
            dates: "1月20日 - 2月18日",
            traits: "創新、獨立、智慧",
            image: "星座11.jpg"  // 新增圖片檔名
        },
        pisces: {
            name: "雙魚座 (Pisces)",
            dates: "2月19日 - 3月20日",
            traits: "富有同情心、感性、藝術性強",
            image: "星座12.jpg"  // 新增圖片檔名
        }
    };

    const homePage = document.getElementById('home-page');
    const zodiacPage = document.getElementById('zodiac-page');
    const zodiacName = document.getElementById('zodiac-name');
    const zodiacDates = document.getElementById('zodiac-dates');
    const zodiacTraits = document.getElementById('zodiac-traits');
    const zodiacImage = document.getElementById('zodiac-image'); // 新增圖片元素
    const backHomeButton = document.getElementById('back-home-button');

    // 取得所有星座按鈕，並為它們添加點擊事件
    const buttons = document.querySelectorAll('.zodiac-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sign = button.getAttribute('data-sign');
            const zodiac = zodiacInfo[sign];

            // 更新星座頁面的內容
            zodiacName.textContent = zodiac.name;
            zodiacImage.src = zodiac.image;
            zodiacDates.textContent = `日期範圍: ${zodiac.dates}`;
            zodiacTraits.textContent = `性格特點: ${zodiac.traits}`;
            zodiacImage.src = zodiac.image;  // 更新圖片

            // 隱藏首頁，顯示星座詳情
            homePage.style.display = 'none';
            zodiacPage.style.display = 'block';
        });
    });

    // 返回首頁按鈕事件
    backHomeButton.addEventListener('click', () => {
        // 隱藏星座詳情頁面，顯示首頁
        zodiacPage.style.display = 'none';
        homePage.style.display = 'block';
    });
        
});

