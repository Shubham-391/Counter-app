const add = document.querySelector(".add"), save = document.querySelector(".save"), reset = document.querySelector(".reset");
let value = document.querySelector(".value"), show = document.querySelector(".print");;
add.addEventListener("click", function () {
    value.innerHTML = +value.innerHTML + 1;
});

reset.addEventListener("click", function () {
    value.innerHTML = 0;
    show.innerHTML = "";

});
save.addEventListener("click", function () {
    if (value.innerHTML == 0) {
        save.classList.add("not-allowed");
    } else if (show.innerHTML == "") {
        save.classList.remove("not-allowed");
        show.innerHTML = value.innerHTML; 
    } else {
        save.classList.remove("not-allowed");
        show.innerHTML = show.innerHTML + "," + value.innerHTML;
    }
    value.innerHTML = 0;
})