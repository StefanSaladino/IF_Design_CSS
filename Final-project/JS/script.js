document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  //slides are each element in the "slides" class
  const slides = document.getElementsByClassName("wrapper");
  //lines are each element with a "line" class
  const dots = document.getElementsByClassName("dot");
  //first element called hamburger-icon is assigned the hamburgerIcon variable
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  //first element called menu-items is assigned the hamburgerIcon variable
  const menuItems = document.querySelector(".menu-items");

  dots[0].classList.add("highlight");

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
      showSlide(i);
    });
  }

  //defining showSlide function
  function showSlide(n) {
    //if n is less than 0, it resets the value to the last slide
    //if n is higher than the last index place, it sets the slide back to index 0
    if (n < 0) {
      currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = n;
    }

    //this sets all classes tagged "slides" to hidden
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    //the currentSlide is set to a display of flex to remain congruent with the CSS
    //ensuring only one slide is displayed at a time
    slides[currentSlide].style.display = "flex";

    //removing the highlight class from each line so multiple lines arent highlighted
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("highlight");
    }

    //the line corresponding to the current slide is highlighted
    dots[currentSlide].classList.add("highlight");
  }

  //toggling the burger menu open and close based on a click event
  hamburgerIcon.addEventListener("click", function () {
    this.classList.toggle("open");
    menuItems.classList.toggle("show");
  });

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  //creating a function which returns a boolean value as to whether or not the current viewport is
  //at least a certain width
  function isViewportAbove(minWidth) {
    return window.innerWidth >= minWidth;
  }

  // Check viewport width before enabling auto-slide
  if (isViewportAbove(599)) { // Adjust the minimum width as needed
    setInterval(nextSlide, 5000);
  }

});
