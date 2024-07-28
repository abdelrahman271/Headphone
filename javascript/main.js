document.addEventListener('DOMContentLoaded', function() {

let arrow = document.getElementById('btn');
let bars = document.getElementById('bars');
let nav = document.getElementById('navbar');
let icon = document.getElementById('icon');
let navlinks=document.querySelectorAll('ul li');


window.onscroll = function() {
    if (window.scrollY >= 500) {
    arrow.style.display = 'block';
    } 
    else {
    arrow.style.display = 'none';
}
}

arrow.onclick= function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
})
}


bars.onclick = function() {
    nav.classList.toggle('sm:hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-x');
};

navlinks.forEach(function(ele){
    ele.onclick=()=>{
    nav.classList.add('sm:hidden');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-x');


    }
})


const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?(\d{3})-?(\d{3})-?(\d{4,6})$/;
const messageRegex = /^.{10,}$/;

let username = false;
let email = false;
let phone = false;
let message = false;

function validate(){
    if (username && email && phone && message) {
        document.querySelector('.submit').removeAttribute('disabled');
    } else {
        document.querySelector('.submit').setAttribute('disabled', true);
    }
};

document.querySelector('.name').addEventListener('input', function() {
    const usernameValid = nameRegex.test(this.value);
    document.querySelector('.message-name').classList.toggle('hidden', usernameValid);
    username = usernameValid;
    validate();
});

document.querySelector('.email').addEventListener('input', function() {
    const emailValid = emailRegex.test(this.value);
    document.querySelector('.message-email').classList.toggle('hidden', emailValid);
    email = emailValid;
    validate();
});

document.querySelector('.phone').addEventListener('input', function() {
    const phoneValid = phoneRegex.test(this.value);
    document.querySelector('.message-phone').classList.toggle('hidden', phoneValid);
    phone = phoneValid;
    validate();
});

document.querySelector('.message').addEventListener('input', function() {
    const messageValid = messageRegex.test(this.value);
    document.querySelector('.message-textarea').classList.toggle('hidden', messageValid);
    message = messageValid;
    validate();
});

document.querySelector('.submit').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.name').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.phone').value = '';
    document.querySelector('.message').value = '';
});



var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

ScrollReveal().reveal('.imghome', { 
    duration: 2000,
    origin: 'right',
    distance: '50px',
});
ScrollReveal().reveal('.texthome', { 
    duration: 2000,
    origin: 'left',
    distance: '50px',
});
ScrollReveal().reveal('.about,.serv,.swip,.cont', { 
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
});
});
