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

