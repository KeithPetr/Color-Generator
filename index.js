const colorEl = document.getElementById('color-input')
const schemeEl = document.getElementById('scheme-input')
const getColorBtn = document.getElementById('get-color-btn')
const mainEl = document.getElementById('main')

let html = ''

getColorBtn.addEventListener('click', (e) => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorEl.value.substring(1)}&mode=${schemeEl.value}`)
    .then(res => res.json())
    .then(data => {
        html = data.colors.map( color => {
            return `
            <div class="color-container">
                <div class="color"><img src="${color.image.bare}"></div>
                <p class="hex-value" id="hex-value">${color.hex.value}</p>
            </div>
            `
        }).join('')
        mainEl.innerHTML = html
    })
})



