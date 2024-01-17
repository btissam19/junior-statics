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
const carousel2 = document.getElementById("carouselExampleControls2");
const carouselInner2 = carousel2.querySelector(".carousel-inner");
const carouselItems2 = carouselInner2.querySelectorAll(".carousel-item");
const carouselImages2 = carouselInner2.querySelectorAll(".carousel-item img");

let startX2;
let endx2;

carouselImages2.forEach(image => {
    image.addEventListener("touchstart", (e) => {
        if (e.currentTarget.parentElement.classList.contains("active")) { // Check if the image touched is currently active
            startX2 = e.touches[0].clientX;
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
    if (startX2 > endX + 50) {
        // Swiped left, go to the next slide
        const nextSlide = currentActive.nextElementSibling;  // get the next sibling
        if (nextSlide) {
            currentActive.classList.remove("active");
            nextSlide.classList.add("active");
        }
    } else if (startX2 + 50 < endX) {
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

function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name === "" || email === "" || message === "") {
        document.querySelector('.error-message').innerText = 'Please fill in all fields.';
        document.querySelector('.error-message').style.display = 'block';
        return;
    }

    var params = {
        name: name,
        email: email,
        message: message
    };

    const serviceID = "service_rx7xzdc";
    const templateID = "template_ax92u6f";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.querySelector('.sent-message').style.display = 'block';
            document.querySelector('.error-message').style.display = 'none';
        })
        .catch(err => {
            console.log(err);
            document.querySelector('.error-message').innerText = 'Failed to send message. Please try again later.';
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.sent-message').style.display = 'none';
        });
}
