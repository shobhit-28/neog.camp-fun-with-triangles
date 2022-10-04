let base = document.querySelector('#base');
let height = document.querySelector('#height');

let btn = document.querySelector('.btn');

let declaration = document.querySelector('.declaration')

btn.addEventListener('click', function(){
    if (base.value <= 0 || height.value <= 0) {
        declaration.innerText = 'Enter a valid value'
    } else {
        let hypotenuse = Math.sqrt((base.value*base.value)+(height.value*height.value));
        declaration.innerText = 'The length of hypotenuse is ' + hypotenuse;
    }
})

let today = new Date();
let year = document.querySelector('.year');
year.innerText = today.getDate() + '/' + (today.getMonth()+1) + '/'  + today.getFullYear();