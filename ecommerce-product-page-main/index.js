const menu = document.getElementById('menu-svg')
const close = document.getElementById('close-svg')
const nav = document.getElementById('nav-bar')

menu.addEventListener('click', function(){
    nav.classList.add('open-nav')
})

close.addEventListener('click', function(){
    nav.classList.remove('open-nav') 
})