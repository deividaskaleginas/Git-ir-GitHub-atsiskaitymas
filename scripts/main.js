const introModal = document.querySelector(".intro-modal");
const workModal = document.querySelector(".work-modal");
const aboutModal = document.querySelector(".about-modal");
const contactModal = document.querySelector(".contact-modal");
const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModalAbout = document.querySelectorAll(".btn-about");
const btnsOpenModalContact = document.querySelectorAll(".btn-contact");

// Button intro

document.querySelector(".btn-intro").addEventListener("click", (e) => {
  introModal.classList.remove("hidden");
  const introOverlay = document.querySelector(".intro-overlay");
  introOverlay.classList.remove("hidden");

  introOverlay.addEventListener("click", (e) => {
    introModal.classList.add("hidden");
    introOverlay.classList.add("hidden");
  });

  document
    .querySelector(".intro-close-modal")
    .addEventListener("click", (e) => {
      introModal.classList.add("hidden");
      introOverlay.classList.add("hidden");
    });
});

// Button work
document.querySelector(".btn-work").addEventListener("click", (e) => {
  workModal.classList.remove("hidden");
  const workOverlay = document.querySelector(".work-overlay");
  workOverlay.classList.remove("hidden");

  workOverlay.addEventListener("click", (e) => {
    workModal.classList.add("hidden");
    workOverlay.classList.add("hidden");
  });

  document.querySelector(".work-close-modal").addEventListener("click", (e) => {
    workModal.classList.add("hidden");
    workOverlay.classList.add("hidden");
  });
});

// Button about
document.querySelector(".btn-about").addEventListener("click", (e) => {
  aboutModal.classList.remove("hidden");
  const aboutOverlay = document.querySelector(".about-overlay");
  aboutOverlay.classList.remove("hidden");

  aboutOverlay.addEventListener("click", (e) => {
    aboutModal.classList.add("hidden");
    aboutOverlay.classList.add("hidden");
  });

  document
    .querySelector(".about-close-modal")
    .addEventListener("click", (e) => {
      aboutModal.classList.add("hidden");
      aboutOverlay.classList.add("hidden");
    });
});

// Button contact
document.querySelector(".btn-contact").addEventListener("click", (e) => {
  contactModal.classList.remove("hidden");
  const contactOverlay = document.querySelector(".contact-overlay");
  contactOverlay.classList.remove("hidden");

  contactOverlay.addEventListener("click", (e) => {
    contactModal.classList.add("hidden");
    contactOverlay.classList.add("hidden");
  });

  document
    .querySelector(".contact-close-modal")
    .addEventListener("click", (e) => {
      contactModal.classList.add("hidden");
      contactOverlay.classList.add("hidden");
    });
});
