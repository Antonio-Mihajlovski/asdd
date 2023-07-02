const inputedSize = document.getElementById('inputGroupSelect01')

const addToCart = document.getElementById('addToCart')
console.log(addToCart)

addToCart.addEventListener('click', () => {
    const value = inputedSize.value
    const size = inputedSize.options[inputedSize.selectedIndex].innerHTML
    console.log(size)

})





