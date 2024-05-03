// Statistics Section 
let st = document.querySelector(".Statistics");
let nums = document.querySelectorAll(".number")
let started = false

function starCount(el) { // Count For Number From 0 => goal

    let goal = el.dataset.goal
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count)
        }
    },2000 / goal)
}
window.addEventListener("scroll", function () {
    if (window.scrollY >= st.offsetTop) {
        if(!started){
        nums.forEach((e) => starCount(e))
        }
        started = true;
    }
})

// Transition Section (Our-Skills)
let our = document.querySelector(".our-skills");
let spans = document.querySelectorAll('.prog-holder .prog span');

window.addEventListener("scroll",function () {
    if (window.scrollY >= our.offsetTop + 0) {
        spans.forEach((e) => {
            e.style.width = e.dataset.progress;
        }); 
    }})



// Adding Dynminc Year Inside Footer
let y = document.querySelector("footer .cont .yy");
let now = new Date()
y.textContent = now.getFullYear()


// Pricing Section
let myPricing = document.querySelector(".pricing")
let mySS = document.querySelectorAll(".plans span")

window.addEventListener("scroll", () => {
    
})