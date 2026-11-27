const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}


const botButton = document.getElementById("botButton");

botButton.addEventListener("click", function() {
    alert("Hi, I am a new bot!");
});


// Initial slide display
showSlide(slideIndex);

// Automatic slide change (you can customize the interval)
setInterval(() => {
  slideIndex = (slideIndex + 1) % slider.children.length;
  showSlide(slideIndex);
}, 5000);










