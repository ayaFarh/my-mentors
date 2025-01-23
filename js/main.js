
let navIcon = document.querySelector(".fa-bars");
let navlist = document.querySelector("#nav-lisT");


navIcon.addEventListener("click", () => {
    navlist.classList.toggle("show");
    navIcon.classList.toggle("show");
});


navlist.addEventListener("click", () => {
    navlist.classList.remove("show");
    navIcon.classList.remove("show");
});
