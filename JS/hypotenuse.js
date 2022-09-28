let base = document.querySelector('#base');
let height = document.querySelector('#height');

let btn = document.querySelector('.btn');

let declaration = document.querySelector('.declaration')

btn.addEventListener('click', function(){
    let hypotenuse = Math.sqrt((base.value*base.value)+(height.value*height.value));
    declaration.innerText = 'The length of hypotenuse is ' + hypotenuse;
})