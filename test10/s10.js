const button = document.getElementById("btn");
const head = document.getElementById("head");

let num = 1;

button.addEventListener("click", () => {
    if (num < 100) {
        num = num * 2;
        head.textContent = num;
    }
});