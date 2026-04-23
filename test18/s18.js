const input = document.getElementById("input");
const items = document.querySelectorAll("#list li");
input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});