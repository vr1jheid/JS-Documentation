"use strict"

let menuButton = document.querySelector(".menu-button");
let navMenu = document.querySelector(".aside");

menuButton.addEventListener("click", function(){
  navMenu.classList.toggle("aside_mobile");
})

navMenu.addEventListener("click", function(event){
  let link = event.target.closest(".aside__link")
  if (!link) return;
  setTimeout(()=>navMenu.classList.toggle("aside_mobile"), 50);
})