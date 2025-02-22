const burgerIcon = document.getElementById("burger-menu");
const navigationLinks = document.getElementById("nav-link");
const accoridanList = document.querySelectorAll(".accordian h4");

burgerIcon.addEventListener("click", (e) => {
  navigationLinks.classList.toggle("active");
});

for (const item of accoridanList) {
  item.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("active")) {
      e.target.parentElement.classList.remove("active");
      return;
    }
    clearActiveAccordian(accoridanList, e.target.parentElement);
    e.target.parentElement.classList.toggle("active");
  });
}

function clearActiveAccordian(list, item) {
  for (const item of list) {
    item.parentElement.classList.remove("active");
  }
}
