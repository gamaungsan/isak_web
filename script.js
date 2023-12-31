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
        emailjs.init("service_d1px6ek")
    })();

    var params = {
        name: document.querySelector('#name').value,
        sender: document.querySelector('#email').value,
        subject: document.querySelector('#subject').value,
        stype: document.querySelector('#stype').value,
        message: document.querySelector('#description').value,
        date: new Date().toLocaleString(),
    };

    var serviceId = 'service_h2h9w7j';
    var templateId = 'template_j0b2cb2';

    emailjs.send(serviceId, templateId, params)
    .then(res => {
        alert('Email Sent Successfully');
    })
    .catch();
}

const button = document.querySelector('#submit');
button.addEventListener('click', sendEmail);