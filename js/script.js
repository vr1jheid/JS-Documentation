"use strict"

let menuButton = document.querySelector(".menu-button");
let navMenu = document.querySelector(".aside");
let main = document.querySelector(".wrapper");

menuButton.addEventListener("click", function(){
  navMenu.classList.toggle("aside_mobile");
  main.classList.toggle("hide-overflow");
})

navMenu.addEventListener("click", function(event){
  let link = event.target.closest(".aside__link")
  if (!link) return;
  main.classList.remove("hide-overflow");
  navMenu.classList.toggle("aside_mobile");

})