<<<<<<< HEAD
// Button click
document.querySelector("button").addEventListener("click", () => {
  alert("💧 Order request received! We will contact you soon.");
});

// Fade-in images on scroll
const imgs = document.querySelectorAll(".gallery img");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

imgs.forEach(img => {
  img.style.opacity = 0;
  img.style.transform = "translateY(25px)";
  img.style.transition = "0.6s ease";
  observer.observe(img);
});
=======

>>>>>>> 8deb3bb029f68cea520e3b64e90d06ff1b025fc9
