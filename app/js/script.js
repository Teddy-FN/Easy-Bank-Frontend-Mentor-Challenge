const hamburgerBtn = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems  = document.querySelectorAll('.has-fade');

hamburgerBtn.addEventListener('click', function() {
    if (header.classList.contains('open')) {
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach((res) => {
            res.classList.add('fade-out')
            res.classList.remove('fade-in')
        })

    } else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach((res) => {
            console.log(res)
            res.classList.add('fade-in');
            res.classList.remove('fade-out')
        })
    }
});