let side1 = document.querySelector('#side1');
let side2 = document.querySelector('#side2');
let side3 = document.querySelector('#side3');

let btn = document.querySelector('.btn');

let declaration = document.querySelector('.declaration');

btn.addEventListener('click', function () {
    let semiPerimeter = (parseInt(side1.value) + parseInt(side2.value) + parseInt(side3.value)) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - parseInt(side1.value)) * (semiPerimeter - parseInt(side2.value)) * (semiPerimeter - parseInt(side3.value)));
    declaration.innerText = "Area of a triangle using heron's formula " + area + " units";
})