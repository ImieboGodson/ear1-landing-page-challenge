const toggle = document.getElementById('toggle-btn');
const navlink = document.querySelectorAll('.navlink');
const dropdownMenu = document.getElementById('navlinks-wrapper');


function toggleDropdown () {
    dropdownMenu.classList.toggle('active');
}

function closeDropdown () {
    dropdownMenu.classList.remove('active')
}


toggle.addEventListener('click', toggleDropdown);

navlink.forEach(link => link.addEventListener('click', closeDropdown))