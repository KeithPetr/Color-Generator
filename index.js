const colorEl = document.getElementById('color-input')
const schemeEl = document.getElementById('scheme-input')
const getColorBtn = document.getElementById('get-color-btn')

getColorBtn.addEventListener('click', (e) => {
    console.log(colorEl.value)
    console.log(schemeEl.value)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorEl.value.substring(1)}&mode=${schemeEl.value}`)
    .then(res => res.json())
    .then(data => console.log(data))
})



