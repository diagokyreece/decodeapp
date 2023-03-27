const body = document.querySelector("body")
const mobileNavToggle = document.querySelector(".mobile-nav-toggle")
const navOpen = document.querySelector(".fa-bars")
const navClose = document.querySelector(".fa-times")
const nav = document.querySelector("nav")

const prevBtn = document.querySelector(".fa-less-than")
const nextBtn = document.querySelector(".fa-greater-than")
const slide = document.querySelector(".slide")
const carouselUL = document.querySelector("#carousel-ul")

const theRoot = document.documentElement
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun")

navOpen.addEventListener("click", () => {

    nav.classList.add("opened");
    body.style.overflow = "hidden"
    setTimeout( () => {
        navOpen.style.display = "none";
        navClose.style.display = "block";
        // navClose.style.position = "fixed";
    }, 100  
    )
})

navClose.addEventListener("click", () => {
    nav.classList.remove("opened");
    body.style.overflow = "initial"

    setTimeout( () => {
        navOpen.style.display = "block";
        navClose.style.display = "none";
        // navClose.style.position = "initial";
    }, 100
    )
})

nextBtn.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    console.log(carouselUL.scrollLeft)
    carouselUL.scrollLeft += slideWidth;
})

prevBtn.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    console.log(carouselUL.scrollLeft)
    carouselUL.scrollLeft -= slideWidth;
})

moon.addEventListener("click", () => {
    darkmode()
    moon.classList.remove("is-shown")
    sun.classList.add("is-shown")
})

sun.addEventListener("click", () => {
    lightmode()
    sun.classList.remove("is-shown");
    moon.classList.add("is-shown")


})

function lightmode(){
    theRoot.style.setProperty("--clr-primary-400", "#195140")
    theRoot.style.setProperty("--clr-secondary-400", "var(--clr-neutral-300)")
    theRoot.style.setProperty("--clr-accent-400", "var(--clr-neutral-800)")
}

function darkmode(){
    theRoot.style.setProperty("--clr-accent-400", "#195140")
    theRoot.style.setProperty("--clr-primary-400", "var(--clr-neutral-300)")
    theRoot.style.setProperty("--clr-primary-400", "var(--clr-neutral-800)")
    console.log("darkmode")
}

