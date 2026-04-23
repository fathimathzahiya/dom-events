const emailInput = document.getElementById("email");
const result = document.getElementById("result");
emailInput.addEventListener("input", () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value;
    if (pattern.test(emailInput.value)) {
        result.textContent = "Valid email";
        result.style.color = "green";
    } else {
        result.textContent = "invalid email";
        result.style.color = "red";
    }
});