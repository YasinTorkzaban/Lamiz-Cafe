const warm_Bar = document.querySelector('.warm-bar')
const cold_Bar = document.querySelector('.cold-bar')
const sandwich = document.querySelector('.sandwich')
const cake = document.querySelector('.cake')
const tea = document.querySelector('.tea')

function creatDiv(div) {
    return `
    <div class="w-[95%] h-45 md:h-78 flex flex-wrap justify-self-center justify-center border-b border-b-[#555555] bg-[#F0F0F0]">
    
    <div class="w-full h-[85%] flex flex-wrap justify-center items-center p-5! md:p-3!">
    
    <div class="w-1/3 h-full md:w-full md:h-auto flex justify-center items-center">
    <img class="w-full max-w-34" src="${div.src}" alt="">
    </div>
    
    <div class="w-2/3 h-full md:w-full md:h-auto flex flex-wrap justify-center items-center gap-y-2 *:w-full *:text-center">
    <p class="text-[12px] md:text-[14px] font-bold">${div.faname}</p>
    <p class="text-[12px] md:text-[14px] font-bold">${div.enname}</p>
    <p class="text-[12px] font-bold">${div.price}</p>
    
    <div class="buy w-30! h-8 flex justify-center items-center bg-[#FF6E1F] hover:bg-[#ff6d1fbe] text-[10px] text-white font-bold rounded-sm cursor-pointer">
    افزودن به سبد خرید
    </div>
    </div>
    
    </div>
    
    <div class="w-full h-auto flex justify-center items-center">
    <p class="text-[9px] md:text-[10px] text-center text-[#555555]">
    ${div.desc}
    </p>
    </div>
    
    </div>
    `
}

fetch('http://localhost:3000/warm-bar')
    .then(res => res.json())
    .then(data => {
        warm_Bar.innerHTML = data.map(val => {
            return creatDiv(val)
        }).join('')
    })

fetch('http://localhost:3000/cold-bar')
    .then(res => res.json())
    .then(data => {
        cold_Bar.innerHTML = data.map(val => {
            return creatDiv(val)
        }).join('')
    })

fetch('http://localhost:3000/sandwich')
    .then(res => res.json())
    .then(data => {
        sandwich.innerHTML = data.map(val => {
            return creatDiv(val)
        }).join('')
    })

fetch('http://localhost:3000/tea')
    .then(res => res.json())
    .then(data => {
        tea.innerHTML = data.map(val => {
            return creatDiv(val)
        }).join('')
    })

fetch('http://localhost:3000/cake')
    .then(res => res.json())
    .then(data => {
        cake.innerHTML = data.map(val => {
            return creatDiv(val)
        }).join('')
    })

