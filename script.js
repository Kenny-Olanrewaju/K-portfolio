//script.js

document.addEventListener('DOMContentLoaded', function (){
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');


    // toggle mobile menu 
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        console.log("Hamburger clicked");
    });


    // scroll-based navbar color inversion for mobile screens
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50){
            navbar.classList.add('inverted'); 
        }else{
            navbar.classList.remove('inverted');
        }
    });

    // scroll-based navbar color inversion for desktop screens
    window.addEventListener('scroll', () =>{
        if(window.scrollY>800){
            navbar.classList.add('change');
        }else{
            navbar.classList.remove('change');
        }
    });

    // scroll- based navbar color inversion for desktops to it's original state
    window.addEventListener('scroll', () =>{
        if(window.scrollY>5100){
            navbar.classList.add('original');
        }else{
            navbar.classList.remove('original');
        }

    });
});
