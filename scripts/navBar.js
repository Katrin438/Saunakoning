var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};