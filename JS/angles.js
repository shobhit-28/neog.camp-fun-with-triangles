let angle1 = document.querySelector('#angle1');
let angle2 = document.querySelector('#angle2');
let angle3 = document.querySelector('#angle3');

let btn = document.querySelector('.btn');
let declaration = document.querySelector('.declaration');

btn.addEventListener('click', function () {
    let triangleCheck = parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value);
    if (triangleCheck != 180) {
        declaration.innerText = "Oh Oh! The angle doesn't form a triangle";
    } else {
        declaration.innerText = "Yay, the angles form a triangle!";
    }
})

let today = new Date();
let year = document.querySelector('.year');
year.innerText = today.getDate() + '/' + (today.getMonth()+1) + '/'  + today.getFullYear();