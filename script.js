
let slideIndex = 1;
showSlide(slideIndex); 

// Next/previous controls
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Automatic slide change
function autoSlide() {
  showSlide(slideIndex += 1);
}

// Thumbnail image controls (if needed)
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide"); 

  if (n > slides.length) { slideIndex = 1 } 
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides 
  for (let slide of slides) {
    slide.style.display = "none"; 
  }

  // Show the selected slide
  slides[slideIndex - 1].style.display = "block"; 
}

// Start the automatic slide transition
setInterval(autoSlide, 2000); // Change every 2 seconds

const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const slides = document.getElementById('slides1');

prevArrow.addEventListener('click', () => {
  slides.scrollBy({ left: -slides.clientWidth, behavior: 'smooth' });
});

nextArrow.addEventListener('click', () => {
  slides.scrollBy({ left: slides.clientWidth, behavior: 'smooth' });
});

const prevArrow2 = document.querySelector('.arp2');
const nextArrow2 = document.querySelector('.arn2');
const slides2 = document.getElementById('slides2');

prevArrow2.addEventListener('click', () => {
  slides2.scrollBy({ left: -slides2.clientWidth, behavior: 'smooth' });
});

nextArrow2.addEventListener('click', () => {
  slides2.scrollBy({ left: slides2.clientWidth, behavior: 'smooth' });
});