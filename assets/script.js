let plus = document.querySelector('#quantity-up')
let minus = document.querySelector('#quantity-down')
let quant = document.querySelector('.total-quantity')
console.log(quant.textContent)
let num = 1


plus.addEventListener('click', function(){
    num ++
    quant.textContent =`Quantity: ${num}`
    console.log('plus clikced')
    console.log(num)
})

minus.addEventListener('click', function(){
    if (num <= 0) {num = 0}
    else{
    num --
    quant.textContent = `butty: ${num}`
    }
    
})
