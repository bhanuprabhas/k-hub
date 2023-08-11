const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Initial slide display
showSlide(slideIndex);

// Automatic slide change (you can customize the interval)
setInterval(() => {
  slideIndex = (slideIndex + 1) % slider.children.length;
  showSlide(slideIndex);
}, 5000);










