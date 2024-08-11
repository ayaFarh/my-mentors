let navIcon = document.querySelector(".fa-bars");
let nav = document.querySelector(".nav-list-1");
let navlist = document.querySelector("#nav-lisT");
let navDEV = document.querySelector("#nav-container"); 



navIcon.addEventListener("click",()=>{
    navlist.classList.toggle("show")
    navIcon.classList.toggle("show")
    
})

navlist.addEventListener("click",()=>{
    navlist.classList.remove("show")
    navIcon.classList.remove("show")
})
    
