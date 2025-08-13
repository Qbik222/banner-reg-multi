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