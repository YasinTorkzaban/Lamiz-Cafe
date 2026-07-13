const acc1 = document.querySelector('.acc1')
const acc2 = document.querySelector('.acc2')
const acc3 = document.querySelector('.acc3')
const acc4 = document.querySelector('.acc4')
const acc5 = document.querySelector('.acc5')
const menu1 = document.querySelector('.menu1')
const menu2 = document.querySelector('.menu2')
const menu3 = document.querySelector('.menu3')
const menu4 = document.querySelector('.menu4')
const menu5 = document.querySelector('.menu5')

acc1.addEventListener('click' , (e) => {
    acc1.classList.toggle('accmenu')
    acc1.previousElementSibling.classList.toggle('rotate')
    acc1.previousElementSibling.classList.toggle('*:text-[#8E6145]')
    if (menu1.style.maxHeight){
        menu1.style.maxHeight = null
    }else{
        menu1.style.maxHeight = menu1.scrollHeight + 'px'
    }
})

acc2.addEventListener('click' , (e) => {
    acc2.classList.toggle('accmenu')
    acc2.previousElementSibling.classList.toggle('rotate')
    acc2.previousElementSibling.classList.toggle('*:text-[#8E6145]')
    if (menu2.style.maxHeight){
        menu2.style.maxHeight = null
    }else{
        menu2.style.maxHeight = menu2.scrollHeight + 'px'
    }
})

acc3.addEventListener('click' , (e) => {
    acc3.classList.toggle('accmenu')
    acc3.previousElementSibling.classList.toggle('rotate')
    acc3.previousElementSibling.classList.toggle('*:text-[#8E6145]')
    if (menu3.style.maxHeight){
        menu3.style.maxHeight = null
    }else{
        menu3.style.maxHeight = menu3.scrollHeight + 'px'
    }
})

acc4.addEventListener('click' , (e) => {
    acc4.classList.toggle('accmenu')
    acc4.previousElementSibling.classList.toggle('rotate')
    acc4.previousElementSibling.classList.toggle('*:text-[#8E6145]')
    if (menu4.style.maxHeight){
        menu4.style.maxHeight = null
    }else{
        menu4.style.maxHeight = menu4.scrollHeight + 'px'
    }
})

acc5.addEventListener('click' , (e) => {
    acc5.classList.toggle('accmenu')
    acc5.previousElementSibling.classList.toggle('rotate')
    acc5.previousElementSibling.classList.toggle('*:text-[#8E6145]')
    if (menu5.style.maxHeight){
        menu5.style.maxHeight = null
    }else{
        menu5.style.maxHeight = menu5.scrollHeight + 'px'
    }
})