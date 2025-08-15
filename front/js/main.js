(function init100vh(){
    function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();
window.addEventListener('orientationchange', () => {
    window.location.reload();
});

const debug = true

if(debug){
    const i18nData = {
        uk: {
            bannerTitle: "Вітальний бонус",
            bonus: "до 225 000 ₴",
            "300fs": "+ 300 FS",
            bannerInfo:
                "Під бонусом розуміється можливість отримати приз в рамках акції «Вітальний бонус». Період дії акції з 24.03.2025 по 31.12.2025 року. Бонус доступний тільки для нових клієнтів. Деталі на сайті favbet.ua."
        },
        en: {
            bannerTitle: "Welcome Bonus",
            bonus: "up to 225 000 ₴",
            "300fs": "+ 300 FS",
            bannerInfo:
                "Bonus means the opportunity to receive a prize as part of the «Welcome bonus» Promotion. Details on the website favbet.ua. Promotion dates are from 24.03.2025 to 31.12.2025. The bonus is available for new customers only."
        }
    }

    const translateState = true

    function translate(dict) {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length && translateState) {
            elems.forEach(elem => {
                const key = elem.getAttribute('data-translate')
                elem.innerHTML = dict[key] || '*----NEED TO BE TRANSLATED----* key: ' + key
            })
        }
    }

    function setTranslations() {
        const locale = sessionStorage.getItem("locale") || "uk"
        const dict = i18nData[locale] || i18nData["uk"]
        translate(dict)
    }

    setTranslations()

    const lngBtn = document.querySelector(".lng-btn")

    lngBtn.addEventListener("click", () => {
        const current = sessionStorage.getItem("locale") || "uk"
        const nextLocale = current === "uk" ? "en" : "uk"
        sessionStorage.setItem("locale", nextLocale)
        setTranslations()
    })
}
