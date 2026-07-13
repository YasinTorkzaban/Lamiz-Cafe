const close_Aside_Menu = document.querySelector('.close-aside-menu')
const contact_Li = document.querySelector('.contact-li')
const others_Li = document.querySelector('.others-li')
const contact_Submenu = document.querySelector('.contact-submenu')
const others_Submenu = document.querySelector('.others-submenu')
const cover = document.querySelector('.cover')
const aside_Menu = document.querySelector('.aside-menu')
const hamburger_Menu = document.querySelector('.hamburger-menu')
const contact_Txt = document.querySelector('.contact-text')
const others_Txt = document.querySelector('.others-text')
const basket_Btn = document.querySelectorAll('.shopping-basket-btn')
const basket = document.querySelector('.shopping-basket')
const basket_Cover = document.querySelector('.cover-basket')
const close_Basket_Btn = document.querySelector('.close-basket-btn')
const go_To_Start = document.querySelector('.go-to-start')

close_Aside_Menu.addEventListener('click', (e) => {
    close_Aside()
    close_Contact_Li()
    close_Others_Li()
})

hamburger_Menu.addEventListener('click', (e) => {
    open_Aside()
})

cover.addEventListener('click', (e) => {
    close_Aside()
    close_Contact_Li()
    close_Others_Li()
})

function close_Aside() {
    aside_Menu.style.right = '-110%'
    aside_Menu.style.opacity = '0'
    setTimeout(() => {
        cover.style.display = 'none'
    }, 1000)
    check_Scroll(st)
}

function open_Aside() {
    cover.style.display = 'block'
    aside_Menu.style.right = '0'
    aside_Menu.style.opacity = '1'
    close_Go_To_Top(st)
}

contact_Li.addEventListener('click', (e) => {
    e.preventDefault()

    if (contact_Submenu.getAttribute('data-status') == 'close') {
        open_Contact_Li()
    } else {
        close_Contact_Li()
    }
    console.log(contact_Submenu.scrollHeight)
})

function close_Contact_Li() {
    contact_Submenu.style.maxHeight = '0px'
    contact_Submenu.setAttribute('data-status', 'close')
    contact_Txt.style.color = '#FFFFFF'
}

function open_Contact_Li() {
    contact_Submenu.style.maxHeight = contact_Submenu.scrollHeight + 'px'
    contact_Submenu.setAttribute('data-status', 'open')
    contact_Txt.style.color = '#FF6E1F'
}

others_Li.addEventListener('click', (e) => {
    e.preventDefault()
    
    if (others_Submenu.getAttribute('data-status') == 'close') {
        open_Others_Li()
    } else {
        close_Others_Li()
    }
    console.log(others_Submenu.scrollHeight)
})

function open_Others_Li() {
    others_Submenu.style.maxHeight = others_Submenu.scrollHeight + 'px'
    others_Submenu.setAttribute('data-status', 'open')
    others_Txt.style.color = '#FF6E1F'
}

function close_Others_Li() {
    others_Submenu.style.maxHeight = '0px'
    others_Submenu.setAttribute('data-status', 'close')
    others_Txt.style.color = '#FFFFFF'
}

basket_Btn.forEach((val) => {
    val.addEventListener('click', (e) => {
        console.log(e);
        e.preventDefault()
        close_Aside()
        open_Basket()
    })
})

basket_Cover.addEventListener('click', (e) => {
    close_Basket()
})

close_Basket_Btn.addEventListener('click', (e) => {
    close_Basket()
})

function open_Basket() {
    basket.style.left = '0'
    setTimeout(() => {
        basket_Cover.style.display = 'block'
    }, 100)
    close_Go_To_Top(st)
}

function close_Basket() {
    basket.style.left = '-110%'
    setTimeout(() => {
        basket_Cover.style.display = 'none'
    }, 100)
    check_Scroll(st)
}

let st = 0

window.addEventListener('scroll' , (e) => {
    st = window.scrollY
    check_Scroll(st)
})

function close_Go_To_Top(st) {
        go_To_Start.style.left = '-210%'
        go_To_Start.style.opacity = '0'
}

function check_Scroll(st) {
    if(st > 100) {
        go_To_Start.style.left = '20px'
        go_To_Start.style.opacity = '1'
    }else{
        go_To_Start.style.left = '-210%'
        go_To_Start.style.opacity = '0'
    }
}

function empty_Basket () {
    return `
    <div class="w-full h-50 flex flex-wrap justify-center items-center gap-y-5">

                <div class="w-50 h-30 flex items-center justify-center relative pt-7!">
                    <i class="ri-shopping-cart-2-line text-[#3333331d] text-[100px]"></i>
                    <i class="ri-close-line text-[#3333331d] text-[70px] absolute top-3 left-17"></i>
                </div>

                <p class="w-full text-[14px] text-[#242424] flex items-center justify-center">هیچ محصولی در سبد خرید نیست.</p>

                <a class="w-32 h-9 bg-[#FF6E1F] rounded-[3px] flex items-center justify-center" href="../menu page/menu.html">
                    <p class="text-white text-[12px] font-bold flex items-center justify-center">بازگشت به فروشگاه</p>
                </a>

            </div>
    `
}

function creatDiv_Buy (buy) {
    return `
    <div class="w-full h-25 flex justify-center items-start">
    <div class="h-full w-[80%] flex justify-center items-center border-b border-b-[rgba(0,0,0,0.16)]">
        <div class="w-full h-20 flex">
            <div class="flex justify-center items-center w-1/3 h-full">
                <img class="w-16" src="${buy.src}" alt="">
            </div>
            
            <div class="flex flex-1 flex-col justify-center">
                <div class="h-1/3 w-full flex items-center pr-3">
                    <p class="text-[14px] text-[#333333]">${buy.faname}</p>
                </div>
                <div class="h-1/3 w-full flex items-center pr-3">
                    <p class="text-[#ff6e1f] text-[12px] font-bold"><span>${buy.price.toLocaleString('en-US')}</span> تومان</p>
                </div>
                <div class="h-1/3 w-full flex items-center pr-3 justify-end">
                    <div class="plus w-7 h-7 bg-[#FF6E1F] rounded-sm flex items-center justify-center text-white font-bold text-[16px] ml-1! cursor-pointer">+</div>
                    <span class="qnt text-[16px] font-bold px-2">${buy.qnt}</span>
                    <div class="minus w-7 h-7 bg-[#FF6E1F] rounded-sm flex items-center justify-center text-white font-bold text-[16px] mr-1! cursor-pointer">-</div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}

function creatDiv_Pay () {
    return `
    <div class="w-full h-40 pt-5! pb-15! flex flex-wrap gap-y-5 justify-center items-center">

                <div class="h-1/2 w-[80%] flex">
                    <div class="h-full w-1/3 flex items-center justify-start">
                        <p class="text-[#242424] text-[18px] font-bold">جمع کل:</p>
                    </div>
                    <div class="h-full w-2/3 flex items-center justify-end">
                        <p class="text-[#FF6E1F] text-[18px] font-bold"><span class="text-[18px] text-[#FF6E1F] font-bold">${total_Price.toLocaleString('en-US')}</span> تومان</p>
                    </div>
                </div>

                <div class="h-1/2 w-[80%] flex items-center justify-center font-bold text-white text-[13px] bg-[#FF6E1F] rounded-xs cursor-pointer">تسویه حساب</div>

            </div>
    `
}

const basket_Cart_Section = document.querySelector('.cart-section')

const saved_Cart = localStorage.getItem('cart')
let cart = saved_Cart ? JSON.parse(saved_Cart) : []
console.log(cart);

const total_Qnt_Saved = localStorage.getItem('total-qnt')
console.log(total_Qnt_Saved);
let total_Qnt = Number(total_Qnt_Saved)

const total_Price_Saved = localStorage.getItem('total-price')
let total_Price = Number(total_Price_Saved)

const buy_Btn = document.querySelectorAll('.buy')
const total_Tag = document.querySelectorAll('.bought-quantity')


let product = {
    faname: "",
    price: 0,
    src: "",
    qnt: 0
}

let fullSrc = ""

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy')) {

        product.faname = e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
        product.price = Number(e.target.previousElementSibling.innerHTML.replace(',', ''))
        fullSrc = e.target.parentElement.previousElementSibling.children[0].src.slice(34)
        product.src = fullSrc.slice(fullSrc.indexOf('src'))
        product.qnt = 1

        const exists = cart.some(
            item => item.faname === product.faname
        )

        if (!exists) {

            cart.push({ ...product })

            console.log(product);
            console.log(cart);

            localStorage.setItem('cart', JSON.stringify(cart))

            total_Qnt += 1
            localStorage.setItem('total-qnt', JSON.stringify(total_Qnt))
            console.log(total_Qnt);

            total_Price += Number(product.price)
            localStorage.setItem('total-price', JSON.stringify(total_Price))
            render_Basket()
        }
        
    }
})

function render_Basket() {
    total_Tag.forEach(val => {
        val.innerHTML = total_Qnt
    })
    if (total_Qnt == 0){
        basket_Cart_Section.innerHTML = empty_Basket()
    }else{
        let basketHTML = ""
        
        cart.forEach(val => {
            basketHTML += creatDiv_Buy(val)
        })
        
        basketHTML += creatDiv_Pay()
        
        basket_Cart_Section.innerHTML = basketHTML
    }
}

render_Basket()

let current_Qnt = 0

document.addEventListener('click' , (e) => {
    if (e.target.classList.contains('plus')) {
        
        cart.forEach(val => {
            if(val.faname == e.target.parentElement.previousElementSibling.previousElementSibling.children[0].innerHTML){
                val.qnt += 1
                localStorage.setItem('cart', JSON.stringify(cart))

                total_Price += Number(e.target.parentElement.previousElementSibling.children[0].children[0].innerHTML.replace(',', ''))
                localStorage.setItem('total-price' , JSON.stringify(total_Price))

                total_Qnt += 1
                localStorage.setItem('total-qnt', JSON.stringify(total_Qnt))
            }
        })
        render_Basket()
    }
})

document.addEventListener('click' , (e) => {
    if (e.target.classList.contains('minus')) {

        const productName = e.target.parentElement.previousElementSibling.previousElementSibling.children[0].innerHTML

        if (e.target.previousElementSibling.innerHTML == 1){

            const itemIndex = cart.findIndex(val => val.faname === productName)
            const item = cart[itemIndex]

            total_Price -= item.price
            total_Qnt -= 1

            cart.splice(itemIndex, 1)

            localStorage.setItem('cart', JSON.stringify(cart))
            localStorage.setItem('total-price', JSON.stringify(total_Price))
            localStorage.setItem('total-qnt', JSON.stringify(total_Qnt))

        }else{
            cart.forEach(val => {
                if(val.faname == e.target.parentElement.previousElementSibling.previousElementSibling.children[0].innerHTML){
                    val.qnt -= 1
                    localStorage.setItem('cart', JSON.stringify(cart))
    
                    total_Price -= Number(e.target.parentElement.previousElementSibling.children[0].children[0].innerHTML.replace(',', ''))
                    localStorage.setItem('total-price' , JSON.stringify(total_Price))
    
                    total_Qnt -= 1
                    localStorage.setItem('total-qnt', JSON.stringify(total_Qnt))
                }
            })
        }
        render_Basket()
    }
})