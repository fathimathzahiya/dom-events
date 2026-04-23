const input = document.getElementById("input");
const para = document.getElementById("para");
input.addEventListener("input", () => {
    if (input.value.length > 0) {
        para.textContent = "typing...";
    } else {
        para.textContent = "";
    }
});