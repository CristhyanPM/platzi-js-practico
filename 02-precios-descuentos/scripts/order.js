const order = document.getElementById('order')
const price = order.querySelector('.order__price')
const discount = order.querySelector('.order__discount')
const saved = order.querySelector('.order__saved')
const finalPrice = order.querySelector('.order__price-discounted')
const inputCoupons = document.getElementById('coupons')
const inputCodeBox = document.getElementById('input-code-box')
const inputCode = document.getElementById('input-code')
const inputCodeBtn = document.getElementById('input-code-btn')
const copyBtns = [...document.querySelectorAll('.copy-button')]


const coupons = [
  {name:"first-buy", discount:"3"},
  {name:"platzi-buy", discount:"15"}
]

const codes = [
  {name:"TZEN4AQQ", discount:"20"},
  {name:"3HUG8FTR", discount:"22"},
  {name:"RT2479HJ", discount:"24"},
  {name:"KB5PLLYU", discount:"25"},
]


function aplyDiscount(price, percentage, finalPrice) {
  let priceValue = Number(price.textContent.split(',').join('').slice(1))
  let amountDiscounted = Number(priceValue*(percentage/100)).toFixed(2)
  let priceLessDiscount = Number(priceValue*(1-(percentage/100))).toFixed(2)
  let fixFinalPrice;
  // console.log(priceLessDiscount.split('.')[0].slice(1))
  if(priceLessDiscount.split('.')[0].length <= 3) {
    fixFinalPrice = priceLessDiscount
  } else if(priceLessDiscount.split('.')[0].length == 4) {
    fixFinalPrice = `${priceLessDiscount[0]},${priceLessDiscount.slice(1)}`
  } else if(priceLessDiscount.split('.')[0].length == 5) {
    fixFinalPrice = `${priceLessDiscount[0]}${priceLessDiscount[1]},${priceLessDiscount.slice(2)}`
  }
  // console.log(priceLessDiscount.split('.')[0].length)
  // console.log(fixFinalPrice)
  finalPrice.textContent = `$${fixFinalPrice}`
  discount.textContent = `-${percentage}%`
  saved.textContent = `¡¡Ahorra $${amountDiscounted}!!`
}

function checkCoupon() {
  if(inputCoupons.value === "input-code"){
    inputCodeBox.style.cssText = "display: flex;";
  } else {
    inputCodeBox.style.cssText = "display: none;";
    let couponSelected = coupons.find(ele => ele.name === inputCoupons.value)
    let couponDiscount = Number(couponSelected.discount)
    // console.log(couponDiscount)
    aplyDiscount(price, couponDiscount, finalPrice)
  }
}

for(let j = 0; j<copyBtns.length; j++){
  copyBtns[j].addEventListener('click',async() => {
    let inputLabeled = copyBtns[j].previousElementSibling
    await navigator.clipboard.writeText(inputLabeled.value)
    let copiedText = await navigator.clipboard.readText()
    inputCode.value = copiedText
  })
}


window.onload = () => {
  checkCoupon()

}

inputCoupons.onchange = () => {
  checkCoupon()
}

inputCodeBtn.addEventListener('click', function(){
  let codeSubmited = inputCode.value
  if(!codeSubmited){
    alert('Ingrese un código primero')
    return
  }
  let verifyCodeSubmited = codes.find(ele => ele.name === codeSubmited)
  if(!verifyCodeSubmited){
    alert('Código no válido')
  } else {
    let validCodeDiscount = verifyCodeSubmited.discount
    aplyDiscount(price, validCodeDiscount, finalPrice)
  }
})