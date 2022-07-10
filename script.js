const firstClick = document.querySelector('#testClick');
const secondClick = document.querySelector('#testClick2');
const menuToDisplay = document.querySelector('#ulToDisplay');
const menuToDisplayS = document.querySelector('#ulToDisplay2');

firstClick.addEventListener('click', function() {
    if (menuToDisplay.classList.contains('display-none')) {
    menuToDisplay.classList.remove('display-none');
    menuToDisplayS.classList.add('display-none');
    } else {
    menuToDisplay.classList.add('display-none');
    }
});

secondClick.addEventListener('click', function() {
    
    if (menuToDisplayS.classList.contains('display-none')) {
    menuToDisplayS.classList.remove('display-none');
    menuToDisplay.classList.add('display-none');
    } else {
    menuToDisplayS.classList.add('display-none');
    }
});


const sectionClickable = document.querySelector('#sectionTest');

sectionClickable.addEventListener('click', function(e) {
    if (e.target.classList.contains('clickable')) {
        
    }else {
        menuToDisplay.classList.add('display-none');
        menuToDisplayS.classList.add('display-none');
    }
});