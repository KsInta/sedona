var popup = document.querySelector(".popup-container");
var open = document.querySelector(".search-btn");

popup.classList.add("popup-container-display-none");

open.addEventListener("click", function() {
  popup.classList.toggle("popup-container-display-none");
})
