// Go With Me Missions

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add a shadow to the navigation when scrolling
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');

  if (!nav) return;

  if (window.scrollY > 30) {
    nav.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  } else {
    nav.style.boxShadow = "none";
  }
});
