const eye_On1 = document.querySelector('.eye1')
const eye_Off1 = document.querySelector('.eye-off1')
const eye_On2 = document.querySelector('.eye2')
const eye_Off2 = document.querySelector('.eye-off2')
const pass_Inp1 = document.querySelector('.pass-inp1')
const pass_Inp2 = document.querySelector('.pass-inp2')

eye_On1.addEventListener('click' , (e) => {
    eye_Off1.style.display = 'block'
    eye_On1.style.display = 'none'
    pass_Inp1.type = 'text'
})

eye_Off1.addEventListener('click' , (e) => {
    eye_On1.style.display = 'block'
    eye_Off1.style.display = 'none'
    pass_Inp1.type = 'password'
})

eye_On2.addEventListener('click' , (e) => {
    eye_Off2.style.display = 'block'
    eye_On2.style.display = 'none'
    pass_Inp2.type = 'text'
})

eye_Off2.addEventListener('click' , (e) => {
    eye_On2.style.display = 'block'
    eye_Off2.style.display = 'none'
    pass_Inp2.type = 'password'
})
