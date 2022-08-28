const navSlide = () => {
   const hamburger = document.querySelector(".hamburger");
   const desktop = document.querySelector(".desktop");


   hamburger.addEventListener("click", () => {
     hamburger.classList.toggle(".desktop");
     desktop.classList.toggle(desktop)
   })
}


navSlide();