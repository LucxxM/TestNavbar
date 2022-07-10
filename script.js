// const firstClick = document.querySelector('#testClick');
// const secondClick = document.querySelector('#testClick2');
// const thirdClick = document.querySelector('#testClick3');
// const fourthClick = document.querySelector('#testClick4');
// const fiveClick = document.querySelector('#testClick5');
// const menuToDisplay = document.querySelector('#ulToDisplay');
// const menuToDisplay2 = document.querySelector('#ulToDisplay2');
// const menuToDisplay3 = document.querySelector('#ulToDisplay3');
// const menuToDisplay4 = document.querySelector('#ulToDisplay4');
// const menuToDisplay5 = document.querySelector('#ulToDisplay5');

// firstClick.addEventListener('click', function() {
//     if (menuToDisplay.classList.contains('display-none')) {
//     menuToDisplay.classList.remove('display-none');
//     menuToDisplay2.classList.add('display-none');
//     menuToDisplay3.classList.add('display-none');
//     menuToDisplay4.classList.add('display-none');
//     menuToDisplay5.classList.add('display-none');
//     } 
// });

// secondClick.addEventListener('click', function() {
    
//     if (menuToDisplay2.classList.contains('display-none')) {
//     menuToDisplay2.classList.remove('display-none');
//     menuToDisplay.classList.add('display-none');
//     menuToDisplay3.classList.add('display-none');
//     menuToDisplay4.classList.add('display-none');
//     menuToDisplay5.classList.add('display-none');
//     } 
// });

// thirdClick.addEventListener('click', function() {
//     if (menuToDisplay3.classList.contains('display-none')) {
//     menuToDisplay3.classList.remove('display-none');
//     menuToDisplay.classList.add('display-none');
//     menuToDisplay2.classList.add('display-none');
//     menuToDisplay4.classList.add('display-none');
//     menuToDisplay5.classList.add('display-none');
//     } 
// });

// fourthClick.addEventListener('click', function() {
//     if (menuToDisplay4.classList.contains('display-none')) {
//     menuToDisplay4.classList.remove('display-none');
//     menuToDisplay.classList.add('display-none');
//     menuToDisplay2.classList.add('display-none');
//     menuToDisplay3.classList.add('display-none');
//     menuToDisplay5.classList.add('display-none');
//     } 
// });  

// fiveClick.addEventListener('click', function() {
//     if (menuToDisplay5.classList.contains('display-none')) {
//     menuToDisplay5.classList.remove('display-none');
//     menuToDisplay.classList.add('display-none');
//     menuToDisplay2.classList.add('display-none');
//     menuToDisplay3.classList.add('display-none');
//     menuToDisplay4.classList.add('display-none');
//     } 
// });





const sectionClickable = document.querySelector('#sectionTest');
const linkClickables = document.querySelectorAll('a');
const liRelatives = document.querySelectorAll('ul');

sectionClickable.addEventListener('click', function(e) {
    if (e.target.classList.contains('clickable')) {
    }else {
        for (i=0 ; i<liRelatives.length ; i++) {    
            if (liRelatives[i].id != ""){
                liRelatives[i].classList.add('display-none');
            }
        }
    }
});

linkClickables.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        for (i=0 ; i<liRelatives.length ; i++) {    
            if (liRelatives[i].id != ""){
                liRelatives[i].classList.add('display-none');
                link.parentElement.parentElement.classList.remove('display-none');
            }
        }
        link.nextElementSibling.classList.remove('display-none');
    });   
});