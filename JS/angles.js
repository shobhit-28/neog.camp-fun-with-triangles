let angle1 = parseInt(document.querySelector('#angle1').value);
let angle2 = parseInt(document.querySelector('#angle2').value);
let angle3 = parseInt(document.querySelector('#angle3').value);

let btn = document.querySelector('.btn');
let declaration = document.querySelector('.declaration');

btn.addEventListener('click', function () {
    let triangleCheck = angle1 + angle2 + angle3;
    if (triangleCheck != 180) {
        declaration.innerText = "Oh Oh! The angle doesn't form a triangle";
    }declaration.innerText = "Yay, the angles form a triangle!";
})