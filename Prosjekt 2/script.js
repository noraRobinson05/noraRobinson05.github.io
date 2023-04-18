const hamburger = document.querySelector(".hamburger");
const navMeny = document.querySelector(".nav-meny");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMeny.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMeny.classList.remove("active");

}))