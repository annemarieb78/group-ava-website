document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navWrapper = document.getElementById("nav-wrapper");

  hamburger.addEventListener("click", () => {
    navWrapper.classList.toggle("active");
  });
});

document.querySelectorAll(".see-more").forEach((button) => {
  button.addEventListener("click", () => {
    const description = button.previousElementSibling;
    const expanded = description.classList.toggle("expanded");
    button.textContent = expanded ? "See Less" : "See More";
  });
});
