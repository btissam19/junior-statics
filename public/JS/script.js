
//first slide
const carousel = document.getElementById("carouselExampleControls");
const carouselInner = carousel.querySelector(".carousel-inner");
const carouselItems = carouselInner.querySelectorAll(".carousel-item");
const carouselImages = carouselInner.querySelectorAll(".carousel-item img");

let startX;
let endX;

// Attach event listeners to each individual image
carouselImages.forEach(image => {
    image.addEventListener("touchstart", (e) => {
        if (e.currentTarget.parentElement.classList.contains("active")) { // Check if the image touched is currently active
            startX = e.touches[0].clientX;
        }
    });

    image.addEventListener("touchend", (e) => {
        if (e.currentTarget.parentElement.classList.contains("active")) { // Check if the image released is currently active
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        }
    });
});

function handleSwipe() {
    const currentActive = carouselInner.querySelector(".carousel-item.active");
    if (startX > endX + 50) {
        // Swiped left, go to the next slide
        const nextSlide = currentActive.nextElementSibling;  // get the next sibling
        if (nextSlide) {
            currentActive.classList.remove("active");
            nextSlide.classList.add("active");
        }
    } else if (startX + 50 < endX) {
        // Swiped right, go to the previous slide
        const prevSlide = currentActive.previousElementSibling;  // get the previous sibling
        if (prevSlide) {
            currentActive.classList.remove("active");
            prevSlide.classList.add("active");
        }
    }
    updateCarouselIndicator();
}

function updateCarouselIndicator() {
    const activeIndex = [...carouselItems].findIndex(item => item.classList.contains("active"));
    carouselItems.forEach((item, idx) => {
        const indicator = item.querySelector(".carousel-indicator");
        if (indicator) {
            indicator.textContent = `${idx + 1}/${carouselItems.length}`;
        }
    });
}

// Initial setup
updateCarouselIndicator();

//secund slide 
const carousel2=document.getElementById("carouselExampleControls2");
const carouselInner2 = carousel2.querySelector(".carousel-inner");
const carouselItems2 = carouselInner2.querySelectorAll(".carousel-item");
const carouselImages2 = carouselInner2.querySelectorAll(".carousel-item img");

let startX2;
let endx2;

carouselImages2.forEach(image => {
  image.addEventListener("touchstart", (e) => {
      if (e.currentTarget.parentElement.classList.contains("active")) { // Check if the image touched is currently active
          startX = e.touches[0].clientX;
      }
  });

  image.addEventListener("touchend", (e) => {
      if (e.currentTarget.parentElement.classList.contains("active")) { // Check if the image released is currently active
          endX = e.changedTouches[0].clientX;
          handleSwipe2();
      }
  });
});

function handleSwipe2() {
  const currentActive = carouselInner2.querySelector(".carousel-item.active");
  if (startX > endX + 50) {
      // Swiped left, go to the next slide
      const nextSlide = currentActive.nextElementSibling;  // get the next sibling
      if (nextSlide) {
          currentActive.classList.remove("active");
          nextSlide.classList.add("active");
      }
  } else if (startX + 50 < endX) {
      // Swiped right, go to the previous slide
      const prevSlide = currentActive.previousElementSibling;  // get the previous sibling
      if (prevSlide) {
          currentActive.classList.remove("active");
          prevSlide.classList.add("active");
      }
  }
  updateCarouselIndicator2();
}

function updateCarouselIndicator2() {
  const activeIndex = [...carouselItems2].findIndex(item => item.classList.contains("active"));
  carouselItems2.forEach((item, idx) => {
      const indicator = item.querySelector(".carousel-indicator");
      if (indicator) {
          indicator.textContent = `${idx + 1}/${carouselItems2.length}`;
      }
  });
}
let form =document.getElementsByTagName("form")
for( let i=0;i<=form.length;i++){
  form[i].addEventListener('submit', function(e) {
    e.preventDefault(); 
    let inputs = form[i].querySelectorAll('input, textarea');
    inputs.forEach(function(input) {
      if(input.value!=="Send" && input.value!=="Subscribe")
        input.value = '';
    });
});


}


