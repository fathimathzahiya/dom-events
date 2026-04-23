const input = document.getElementById("input");
const para = document.getElementById("para");

input.addEventListener("input", () => {
    para.textContent="characters:"+input.value.length;
});

