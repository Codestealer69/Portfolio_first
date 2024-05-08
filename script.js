// document.addEventListener('DOMContentLoaded', function () {
//     let menuIcon = document.querySelector('#menu-icon');
//     let navbar = document.querySelector('.navbar');
//     let sections = document.querySelectorAll('section');
//     let navLinks = document.querySelectorAll('header nav a');

//     // Toggle mobile menu
//     menuIcon.onclick = () => {
//         menuIcon.classList.toggle('bx-x');
//         navbar.classList.toggle('active');
//     };

//     // Smooth scrolling for navigation links
//     navLinks.forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();

//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 window.scrollTo({
//                     top: targetSection.offsetTop - 100,
//                     behavior: 'smooth'
//                 });
//             }

//             // Close the mobile menu after clicking a navigation link
//             menuIcon.classList.remove('bx-x');
//             navbar.classList.remove('active');
//         });
//     });

//     // Highlight active navigation link on scroll
//     window.addEventListener('scroll', () => {
//         let scrollPosition = window.scrollY;

//         sections.forEach(sec => {
//             let offset = sec.offsetTop - 150;
//             let height = sec.offsetHeight;
//             let id = sec.getAttribute('id');

//             if (scrollPosition >= offset && scrollPosition < offset + height) {
//                 navLinks.forEach(link => {
//                     link.classList.remove('active');
//                 });
//                 document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
//             }
//         });
//     });

//     // Form submission
//     document.getElementById('contactForm').addEventListener('submit', function (e) {
//         e.preventDefault();

//         const name = document.querySelector('input[name="name"]').value;
//         const email = document.querySelector('input[name="email"]').value;
//         const phone = document.querySelector('input[name="phone"]').value;
//         const subject = document.querySelector('input[name="subject"]').value;
//         const message = document.querySelector('textarea[name="message"]').value;

//         if (!name || !email || !phone || !subject || !message) {
//             alert('Please fill in all the required fields.');
//             return;
//         }

//         const mailtoLink = `mailto:sayanmaity8002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`)}`;
//         window.location.href = mailtoLink;

//         const confirmationMessage = document.getElementById('confirmationMessage');
//         confirmationMessage.innerHTML = 'Your message has been submitted successfully!';
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  // Toggle mobile menu
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // Smooth scrolling for navigation links
  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }

      // Close the mobile menu after clicking a navigation link
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");

      // Remove active class from all links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      // Add active class to the clicked link
      this.classList.add("active");
    });
  });

  // Highlight active navigation link on scroll
  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    sections.forEach((sec) => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (scrollPosition >= offset && scrollPosition < offset + height) {
        // Remove active class from all links
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        // Add active class to the link corresponding to the section in view
        document
          .querySelector(`header nav a[href="#${id}"]`)
          .classList.add("active");
      }
    });
  });

  // Form submission
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const phone = document.querySelector('input[name="phone"]').value;
      const subject = document.querySelector('input[name="subject"]').value;
      const message = document.querySelector('textarea[name="message"]').value;

      if (!name || !email || !phone || !subject || !message) {
        alert("Please fill in all the required fields.");
        return;
      }

      const mailtoLink = `mailto:sayanmaity8002@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
      )}`;
      window.location.href = mailtoLink;

      const confirmationMessage = document.getElementById(
        "confirmationMessage"
      );
      confirmationMessage.innerHTML =
        "Your message has been submitted successfully!";
    });
});
