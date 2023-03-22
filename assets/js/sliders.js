// Navbar

let navBar = document.getElementById('navBar');

window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
        navBar.style.background = 'none';
        navBar.style.height = '5rem';
    } else {
        navBar.style.background = '#0D6EFD';
        navBar.style.height = '7rem';
    }
}, { passive: true })


// Slidebar

let carrousel = document.getElementById('carrousel');

let slideBtn1 = document.getElementById('slideBtn1'),
    slideBtn2 = document.getElementById('slideBtn2'),
    slideBtn3 = document.getElementById('slideBtn3');

function scrollSlide(slide) {
    carrousel.scrollLeft = (document.getElementById('slide1').clientWidth * slide);
}

slideBtn1.addEventListener('click', () => {
    slideBtn1.style.color = '#0D6EFD';
    slideBtn2.style.color = '#FFF';
    slideBtn3.style.color = '#FFF';
    scrollSlide(0);
})

slideBtn2.addEventListener('click', () => {
    slideBtn1.style.color = '#FFF';
    slideBtn2.style.color = '#0D6EFD';
    slideBtn3.style.color = '#FFF';
    scrollSlide(1);
})

slideBtn3.addEventListener('click', () => {
    slideBtn1.style.color = '#FFF';
    slideBtn2.style.color = '#FFF';
    slideBtn3.style.color = '#0D6EFD';
    scrollSlide(2);
}
)