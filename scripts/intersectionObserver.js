document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      // filter only visible items
      const visible = entries.filter(entry => entry.isIntersecting);

      // stagger only the visible ones
      visible.forEach((entry, index) => {
        entry.target.style.transitionDelay = `${index * 0.1}s`;
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach(el => observer.observe(el));
});