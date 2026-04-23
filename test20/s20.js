const input = document.getElementById("input");
const para = document.getElementById("para");
input.addEventListener("input", () => {
    const rev=input.value.split("").reverse().join("");
    para.textContent=rev;
});