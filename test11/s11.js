const parent = document.getElementById("parent");
parent.addEventListener("click", (e) => {
    console.log(e.target.textContent);
})