const input = document.getElementById("input");
input.addEventListener("input",function() {
    input.value = input.value.replace(/\s+/g, " ");
});