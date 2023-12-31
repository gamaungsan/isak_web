const toggle = document.querySelector('.toggle');
const dropdown = document.querySelector('.dropdown');

toggle.addEventListener('click', function(){
    dropdown.classList.toggle('open');
});

dropdown.addEventListener('click', function(){
    dropdown.classList.toggle('open');
})

function sendEmail(e){
    e.preventDefault();
    (function(){
        emailjs.init("fUu5PCTZKC_RM6lNx")
    })();

    var params = {
        name: document.querySelector('#name').value,
        sender: document.querySelector('#email').value,
        subject: document.querySelector('#subject').value,
        stype: document.querySelector('#stype').value,
        message: document.querySelector('#description').value,
        date: new Date().toLocaleString(),
    };

    var serviceId = 'service_d1px6ek';
    var templateId = 'template_j0b2cb2';

    emailjs.send(serviceId, templateId, params)
    .then(res => {
        alert('Email Sent Successfully');
    })
    .catch();
}

const button = document.querySelector('#submit');
button.addEventListener('click', sendEmail);

(function() {
    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
    })
})();
