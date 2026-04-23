const input = document.getElementById("inputBox");
const result = document.getElementById("result");
input.addEventListener("input", () => {
    const num = Number(input.value);
    if (input.value==="") {
        result.textContent = "";
    } else if (num % 2 === 0) {
        result.textContent = "even";
    } else {
        result.textContent = "odd";
    }
});