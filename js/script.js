const burger = document.querySelector('.hambargur')
const menu = document.querySelector('.navMenu')

    burger.addEventListener('click',()=>{
        burger.classList.toggle('active')
        menu.classList.toggle('active')
    })

   document.querySelectorAll('.navLink').forEach(n => n.addEventListener('click',()=>{
        hambarger.classList.remove('active')
        navMenu.classList.remove('active')
    }))
