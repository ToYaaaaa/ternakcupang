// hamburger menu
const btnHamburger = document.querySelector('.navigasi .navigasi-extra .menu')
const sidebar = document.querySelector('.navigasi-navbar')

btnHamburger.addEventListener("click", function(){
    sidebar.classList.toggle('active');
})