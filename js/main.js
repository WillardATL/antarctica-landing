let mobileBody=document.getElementById("body");
let mobileHeader=document.getElementById("header");
let burgerButton=document.getElementById("burger__checkbox");
let mobileMenu=document.getElementById('burger-menu__list');

burgerButton.addEventListener("click", function() {
    mobileHeader.classList.toggle("header-fixed");
    mobileBody.classList.toggle("body-overflow");
  });

mobileMenu.onclick = function() {

      burgerButton.click();
      mobileBody.classList.remove("body-overflow");
      mobileHeader.classList.remove("header-fixed");
  }