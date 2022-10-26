const menu = document.getElementById('menu-svg')
const close = document.getElementById('close-svg')
const nav = document.getElementById('nav-bar')
const cart = document.getElementById('cart')
const basket = document.getElementById('basket')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
let currentPrice = document.getElementById('current-price')
const quantityContainer = document.getElementById('quantity-container')
let basketFilled = document.getElementById('basket-filled')
const addToCart = document.getElementById('add-to-cart')
let product = document.getElementById('product-1')
let productTitle = document.getElementById('title')
let productImageContainer = document.getElementById('product-image-container')
const deleteContainer = document.getElementById('delete-container') 
const deleteFromBasket = document.getElementById('delete-container').innerHTML  
let productPrice = document.getElementById('product-price')
let productQuantity = document.getElementById('product-quantity')
let productTotal = document.getElementById('product-total')
let productOneImages = ['images/image-product-1.jpg','images/image-product-2.jpg','images/image-product-3.jpg','images/image-product-4.jpg']


const shoe = {
    Image : 'images/image-product-1-thumbnail.jpg',
    Name: "Fall Limited Edition",
    Price : 125.00,
  }

let quantity = 0
let productIncrement = 0

menu.addEventListener('click', function () {
    nav.classList.add('open-nav')
})

close.addEventListener('click', function () {
    nav.classList.remove('open-nav')
})

cart.addEventListener('click', function () {
    if (basket.style.display !== "none") {
        basket.style.display = "none"
    } else {
        basket.style.display = "unset"
    }
})

minus.addEventListener('click', function () {
    if (quantity != 0) {
        quantity -= 1
        quantityContainer.value = quantity
    }
})

plus.addEventListener('click', function () {
    quantity += 1
    quantityContainer.value = quantity
})

next.addEventListener('click', function () {
    if (productIncrement != 3){
        productIncrement += 1
        product.src = productOneImages[productIncrement]
    }
})
previous.addEventListener('click', function () {
    if (productIncrement > 0){
        productIncrement -= 1
        product.src = productOneImages[productIncrement]
    }
})

addToCart.addEventListener('click', function () {
    productTitle.innerHTML = shoe.Name
    productPrice.innerHTML = `$${shoe.Price}`
    productQuantity.innerHTML = `x ${quantityContainer.value}`
    productTotal.innerHTML = shoe.Price * quantityContainer.value
    productImageContainer.innerHTML = `
        <img src="images/image-product-1-thumbnail.jpg" alt="Shoe Thumbnail">
    `
    deleteContainer.innerHTML = `
    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
    `
})

deleteFromBasket.addEventListener("click", function(){
    deleteContainer.remove()
})


