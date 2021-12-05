// So what functionality do we want here?

// First pass:
// When arrow (prev or next) is clicked, change slide to prev or next.
//  - if at slide 1, prev will send user to last slide;
//  - if at last slide, next will send user to first, slide 1.

// Second pass: 
// After we've done media queries in CSS to make it responsive, we'll have a look at adding auto-slide.

// PROCESS:     
// 1. Grab all dom elements and assign them to vars
// 2. 2 methods/functions to create: nextSlide, prevSlide
// 3. Add button events

// =============================================================

// 1. Grab all dom elements and assign them to vars

const slides = document.querySelectorAll(".slide");
    // returns a NodeList of 6 div.slide elements

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

// for use in auto-slide after we've done media queries in CSS:
const auto = false;
const intervalTime = 5000;
let slideInterval;
    // we'll reset auto to true later; intervalTime assigned 5seconds; slideInterval is initialized for setting later.


// 2. 2 methods/functions to create: nextSlide, prevSlide

const nextSlide = () => {
    // get element with class .current:
    const current = document.querySelector(".current");
    // remove class .current from this element
    current.classList.remove('current');
    // add class .current to the next slide in sequence (or first if this is last slide)
    if (current.nextElementSibling) {
        // add class .current to next sibling
        current.nextElementSibling.classList.add("current");
    } else {
        // or add class .current to first element in var slides:
        slides[0].classList.add("current");
    }
    // after a little delay, re run the remove class .current
    setTimeout(()=>current.classList.remove("current"),200);
        // not sure why this is here, perhaps to just make sure this class is removed?
}

const prevSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove('current');
    // add class .current to the prev slide in sequence (or last if this is slide 1)
    if (current.previousElementSibling) {
        // add class .current to next sibling
        current.previousElementSibling.classList.add("current");
    } else {
        // or add class .current to last element in var slides:
        slides[slides.length-1].classList.add("current");
    }
    // after a little delay, re run the remove class .current
    setTimeout(()=>current.classList.remove("current"),200);
        // not sure why this is here, perhaps to just make sure this class is removed?
}

// 3. Add button events
// the event calls the function
next.addEventListener("click", e=>nextSlide());
prev.addEventListener("click", e=>prevSlide());

