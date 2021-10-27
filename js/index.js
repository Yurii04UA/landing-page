const btnRight = document.querySelector(".portfolio-box-arrow");

const btnLeft = document.querySelector(".box-arrow_left");

const maibBox = document.querySelector(".portfolio-main-box");

const subBox = document.querySelector(".portfolio-sub-box");

btnRight.addEventListener("click", ()=> {
   maibBox.classList.add("main-box-activ");
   subBox.classList.add("sub-box-activ");
});

btnLeft.addEventListener("click", ()=> {
   maibBox.classList.remove("main-box-activ");
   subBox.classList.remove("sub-box-activ");
});

// Full images One
const imgOne = document.querySelector(".portfolio-box-item-image-one");
const imgOneZoomInOut = document.querySelector(".portfolio-full-one");
const imgOneFull = document.querySelector(".portfolio-full-item-one");

imgOne.addEventListener("click", () => {
   imgOneZoomInOut.classList.toggle("portfolio-full-active")
});

imgOneFull.addEventListener("click", () => {
   imgOneZoomInOut.classList.toggle("portfolio-full-active")
});

// Full images Two
const imgTwo = document.querySelector(".portfolio-box-item-image-two");
const imgTwoZoomInOut = document.querySelector(".portfolio-full-two");
const imgTwoFull = document.querySelector(".portfolio-full-item-two");

imgTwo.addEventListener("click", () => {
   imgTwoZoomInOut.classList.toggle("portfolio-full-active")
});

imgTwoFull.addEventListener("click", () => {
   imgTwoZoomInOut.classList.toggle("portfolio-full-active")
});

// Full images Three
const imgThree = document.querySelector(".portfolio-box-item-image-three");
const imgThreeZoomInOut = document.querySelector(".portfolio-full-three");
const imgThreeFull = document.querySelector(".portfolio-full-item-three");

imgThree.addEventListener("click", () => {
   imgThreeZoomInOut.classList.toggle("portfolio-full-active")
});

imgThreeFull.addEventListener("click", () => {
   imgThreeZoomInOut.classList.toggle("portfolio-full-active")
});

// Full images Four
const imgFour = document.querySelector(".portfolio-box-item-image-four");
const imgFourZoomInOut = document.querySelector(".portfolio-full-four");
const imgFourFull = document.querySelector(".portfolio-full-item-four");

imgFour.addEventListener("click", () => {
   imgFourZoomInOut.classList.toggle("portfolio-full-active")
});

imgFourFull.addEventListener("click", () => {
   imgFourZoomInOut.classList.toggle("portfolio-full-active")
});
// Full images Five
const imgFive = document.querySelector(".portfolio-box-item-image-five");
const imgFiveZoomInOut = document.querySelector(".portfolio-full-five");
const imgFiveFull = document.querySelector(".portfolio-full-item-five");

imgFive.addEventListener("click", () => {
   imgFiveZoomInOut.classList.toggle("portfolio-full-active")
});

imgFiveFull.addEventListener("click", () => {
   imgFiveZoomInOut.classList.toggle("portfolio-full-active")
});

// Full images Six
const imgSix = document.querySelector(".portfolio-box-item-image-six");
const imgSixZoomInOut = document.querySelector(".portfolio-full-six");
const imgSixFull = document.querySelector(".portfolio-full-item-six");

imgSix.addEventListener("click", () => {
   imgSixZoomInOut.classList.toggle("portfolio-full-active")
});

imgSixFull.addEventListener("click", () => {
   imgSixZoomInOut.classList.toggle("portfolio-full-active")
});