// const slider = document.getElementById("testimonial-holder");
// const sliderElements = document.querySelectorAll(".testimonial-holder .box");
// let slideLevel = 0;

// let testimonialsWidth = window
//   .getComputedStyle(sliderElements[0], null)
//   .getPropertyValue("width");
// console.log(testimonialsWidth);

// window.addEventListener("resize", (e) => {
//   console.log(e);

//   if (parseInt(window.innerWidth) <= 767) {
//   }

//   testimonialsWidth = window
//     .getComputedStyle(sliderElements[0], null)
//     .getPropertyValue("width");
//   sliderMovement();
// });

// function smoothSlider(sliderPos) {
//   console.log("hello world");
//   slider.style.left = `${sliderPos}px`;
// }

// function sliderMovement() {
//   let slidePos;
//   slidePos =
//     parseInt(testimonialsWidth) * slideLevel -
//     parseInt(testimonialsWidth + testimonialsWidth / 2);
//   console.log(slidePos);
//   smoothSlider(slidePos);
// }

// sliderMovement();

// // setInterval(() => {
// //   slideLevel--;
// //   sliderMovement();
// // }, 1000);
