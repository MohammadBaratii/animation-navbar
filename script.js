const $ = document;

//Selectors
let home = $.getElementById("home");
let shop = $.getElementById("shop");
let cart = $.getElementById("cart");
let contactUs = $.getElementById("contactUs");
let aboutUs = $.getElementById("aboutUs");
let box = $.getElementById("animationBox");
let darkTheme = $.getElementById("darkTheme");
let lightTheme = $.getElementById("lightTheme");
let buttons = $.querySelectorAll(".buttons");

//Events
//make that little box move
home.addEventListener("mouseover", () => {
  box.style.marginLeft = "0%";
});
shop.addEventListener("mouseover", () => {
  box.style.marginLeft = "20%";
});
cart.addEventListener("mouseover", () => {
  box.style.marginLeft = "40%";
});
contactUs.addEventListener("mouseover", () => {
  box.style.marginLeft = "60%";
});
aboutUs.addEventListener("mouseover", () => {
  box.style.marginLeft = "80%";
});

//set dark or light theme
//dark theme
darkTheme.addEventListener("click", () => {
  $.querySelector("body").style.backgroundColor = "#202124";
  $.querySelector("nav").style.backgroundColor = "#3b4044";
  box.style.backgroundColor = "#f58a42";
  buttons.forEach((item) => {
    item.style.color = "#fff";
  });
  $.getElementById("theme").style.color = "#202124";
  $.getElementById("theme").style.backgroundColor = "#cfcfcf";
  darkTheme.style.borderBottom = "2px #202124 solid";
  lightTheme.style.borderBottom = "0px #202124 solid";
});

//light theme
lightTheme.addEventListener("click", () => {
  $.querySelector("body").style.backgroundColor = "#d1d1d1";
  $.querySelector("nav").style.backgroundColor = "#fff";
  box.style.backgroundColor = "#7393d8";
  buttons.forEach((item) => {
    item.style.color = "#000";
  });
  $.getElementById("theme").style.color = "#d1d1d1";
  $.getElementById("theme").style.backgroundColor = "#505050";
  lightTheme.style.borderBottom = "2px #d1d1d1 solid";
  darkTheme.style.borderBottom = "0px #d1d1d1 solid";
});
