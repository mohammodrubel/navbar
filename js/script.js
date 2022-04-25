const burger = document.querySelector('.hambargur')
const menu = document.querySelector('.navMenu')

    burger.addEventListener('click',()=>{
        burger.classList.toggle('active')
        menu.classList.toggle('active')
    })

    console.log('hello wrold')