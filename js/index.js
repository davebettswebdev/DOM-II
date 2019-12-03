// Your code goes here

// Unique Event Listener 1

const logo = document.querySelector(".logo-heading")

logo.addEventListener("mouseover", () => {
    logo.style.transform = "scale(2)"
})

// Unique Event Listener 2

const topPic = document.querySelector(".topPic")

topPic.addEventListener("click", () => {
    topPic.src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
})

// Unique Event Listener 3

const letsGo = document.querySelector(".text-content h2")

letsGo.addEventListener("dblclick", () => {
    letsGo.style.color="red";
})

// Unique Event Listener 4

const goImage = document.querySelector(".img-content")

goImage.addEventListener("auxclick", () => {
    goImage.style.transform="rotate(30deg)"
})

// Unique Event Listener 5

const awaitsImage = document.querySelector(".img-fluid")

awaitsImage.addEventListener("mouseenter", () => {
    awaitsImage.style.transform="rotate(0.5turn)"
})

// Unique Event Listener 6

const pickYour = document.querySelector(".content-destination h2")

pickYour.addEventListener("mouseout", () => {
    pickYour.style.color="green"
})

// Unique Event Listener 7

const pickPara = document.querySelector(".content-destination p")

pickPara.addEventListener("mouseup", () => {
    pickPara.style.transform="scale(.50)"
})

// Unique Event Listener 8 

const pickImg = document.querySelector(".content-destination img")

pickImg.addEventListener("contextmenu", () => {
    pickImg.style.transform="skew(30deg, 20deg)"
})

// Unique Event Listener 9

const pageUp = document.querySelector("body")

pageUp.addEventListener("keydown", () => {
    pageUp.style.border="20px solid red" 
})

// Unique Event Listener 10

const pageDown = document.querySelector("body")

pageDown.addEventListener("keyup", () => {
    pageDown.style.border="20px solid green" 
})

// Stop the navigation items from refreshing the page by using preventDefault()

const stopNav = document.querySelector(".nav-link")

stopNav.addEventListener("click", (event) => {
  event.preventDefault();
})

// Stretch Go look at GSAP and implement the animations found in that library with your custom events.

document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
       duration: 4,
       rotateY: 360,
       ease: "elastic(1, 0.75)"
      })
    })
  })





