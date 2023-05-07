"use strict";

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

const icons = document.querySelectorAll(".section-1-icons i");

let i = 0;

setInterval(() => {
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");
  i++;
  if (i >= icons.length) {
    icons[0].classList.add("change");
    i = 0;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 3000);