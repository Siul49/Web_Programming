const num1 = document.querySelector("#num1");
const addButton = document.querySelector("#addButton");
var result = document.querySelector("#result");

addButton.addEventListener("click", () => {
    let s ="";
    for (let i = 1; i < 10; i++) {
        const sum = Number(num1.value * i);
        s += `${num1.value} * ${i} = ${sum}<br>`;
    }
    result.innerHTML = s;
});