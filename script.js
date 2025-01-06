//TO SHOW MENU
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

//ACTIVE MENU AND REMOVE MENU
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  //Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  //Remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

//SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "Top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
/*SCROLL HOME */
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", { delay: 200 });
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 400 });

/*SCROLL WORK */
sr.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__input", { interval: 200 });

//FORM VALIDATIION
// Select the form and response message elements
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

// Add an event listener to the form for the "submit" event
contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Display a "Sending..." message to the user
  formResponse.style.display = "block";
  formResponse.textContent = "Sending...";

  // Create a FormData object from the form
  const formData = new FormData(contactForm);

  // Send the form data to Formspree using Fetch API
  fetch("https://formspree.io/f/xannlpgr", {
    method: "POST",
    body: formData, // Send the FormData directly without converting to JSON
  })
    .then((response) => {
      if (response.ok) {
        // If the submission is successful, show a success message
        formResponse.textContent = "Message sent successfully!";
        contactForm.reset(); // Clear the form fields
      } else {
        // If there is an error, show an error message
        formResponse.textContent = "Something went wrong. Please try again.";
      }
    })
    .catch((error) => {
      // Handle network or other errors
      formResponse.textContent =
        "Error: Unable to send your message. Please try again.";
    });
});
