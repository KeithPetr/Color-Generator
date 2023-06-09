const colorEl = document.getElementById("color-input");
const schemeEl = document.getElementById("scheme-input");
const getColorBtn = document.getElementById("get-color-btn");
const mainEl = document.getElementById("main");

// Functions
function getScheme () {
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorEl.value.substring(1)}&mode=${schemeEl.value}`)
    .then((res) => res.json())
    .then((data) => {
      mainEl.innerHTML = data.colors
        .map((color) => {
          return `
            <div class="color-container">
                <div class="color"><img src="${color.image.bare}"></div>
                <p class="hex-value" id="hex-value">${color.hex.value}</p>
            </div>
            `;
        }).join("");
    });
}

// Copy hex value to clipboard
function copyHexValue(e) {
    const hexValueEl = e.target;
    const hexValueText = hexValueEl.textContent;
    const textarea = document.createElement("textarea");
    textarea.value = hexValueText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  
    // Show alert with hex value
    alert(`Copied ${hexValueText} to clipboard!`);
  }

// Event Listeners
mainEl.addEventListener("click", (e) => {
  if (e.target.matches("#hex-value")) {
    copyHexValue(e);
  }
});

getColorBtn.addEventListener("click", getScheme);

// Function Calls
getScheme()
