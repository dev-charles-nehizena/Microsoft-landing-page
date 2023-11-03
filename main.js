const  hambuger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".nav-menu");


hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
})



document.querySelectorAll(".nav-links").forEach(n => n.
addEventListener("click", () => {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
}))



// BANNER
let previous = document.querySelector(".previous-btn")
let  next = document.querySelector(".next-btn");
let banner2 = document.querySelector(".banner2");
let banner1 = document.querySelector(".banner1")

next.addEventListener("click", () => {
    next.classList.toggle("active");
    banner2.classList.toggle("active");
})






