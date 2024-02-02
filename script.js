// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }
// // ------------------------------------
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () =>{
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top>=offset && top<offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//             sec.classList.add('show-animate');
//         }
//         else{
//             sec.classList.remove('show-animate');
//         }
//     });
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky',window.scrollY>100);

//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');

//     let footer = document.querySelector('footer');
//     footer.classList.toggle('show-animate',this.innerHeight +this.scrollY >= document.scrollingElement.scrollHeight);
// }

document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevents the default form submission behavior

        // Get form values
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const subject = document.querySelector('input[name="subject"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Check if any of the required fields is empty
        if (!name || !email || !phone || !subject || !message) {
            alert('Please fill in all the required fields.');
            return;
        }

        const mailtoLink = `mailto:sayanmaity8002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`)}`;

        // Open the mailto link to initiate email submission
        window.location.href = mailtoLink;

        // Display confirmation message
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.innerHTML = 'Your message has been submitted successfully!';
    });
});

