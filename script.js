const toggle = document.querySelector('.toggle');
const dropdown = document.querySelector('.dropdown');

toggle.addEventListener('click', function(){
    dropdown.classList.toggle('open');
});