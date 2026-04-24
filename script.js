
// Button click
document.querySelector("button").addEventListener("click", () => {
  alert("💧 Order request received! We will contact you soon.");
});
// Contact Form Validation
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.querySelector("input[type=text]").value;
  const email = document.querySelector("input[type=email]").value;
  const message = document.querySelector("textarea").value;
  if (!name || !email || !message) {
    alert("⚠️ Please fill all fields before submitting.");
  } else {
    alert("✅ Message sent successfully!");
  }
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
// Smooth Scroll for Navigation
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    if (targetId && targetId !== "#") {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});



