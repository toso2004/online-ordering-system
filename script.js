function Scroll(){
    const scrollSection = document.querySelector('.restaurant-slider');
    const rightButton = document.querySelector('.right-button');
    const leftButton = document.querySelector('.left-button');


    function LeftScroll() {
        scrollSection.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
        console.log('Left Scroll');
    }

    function RightScroll() {
        scrollSection.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    }

    rightButton.addEventListener('click', RightScroll);
    leftButton.addEventListener('click', LeftScroll);
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', Scroll);
} else {
    Scroll();
}
