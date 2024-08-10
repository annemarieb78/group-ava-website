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

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from submitting right away

//     // Basic validation
//     const firstName = document.getElementById("first-name").value.trim();
//     const lastName = document.getElementById("last-name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     if (!firstName || !lastName || !email || !message) {
//       alert("Please fill out all mandatory fields.");
//       return;
//     }

//     if (!validateEmail(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     // If validation passes, show the success message
//     const successMessage = document.getElementById("success-message");
//     successMessage.textContent =
//       "Message sent successfully! We will get back to you shortly.";
//     successMessage.classList.add("visible");

//     // Reset the form
//     document.getElementById("contact-form").reset();

//     // Optionally, hide the success message after a few seconds
//     setTimeout(() => {
//       successMessage.classList.remove("visible");
//     }, 5000); // Hide after 5 seconds
//   });

// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(String(email).toLowerCase());
// }
