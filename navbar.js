const ham = document.querySelector('.ham');
const links = document.querySelector('nav ul');
const bars = document.querySelectorAll('.ham span');


ham.addEventListener('click', () =>{
    links.classList.toggle('activate');
    bars.forEach(child => {child.classList.toggle('animated')});
});