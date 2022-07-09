const btn = document.querySelector('#testHover');
const menuToDisplay = document.querySelector('#ulToDisplay');

btn.addEventListener('click', function() {
    if (menuToDisplay.classList.contains('display-none')) {
    menuToDisplay.classList.remove('display-none');
    } else {
    menuToDisplay.classList.add('display-none');
    }
});
