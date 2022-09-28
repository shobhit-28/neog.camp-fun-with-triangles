let form = document.querySelector('.form');
let btn = document.querySelector('.btn');
let declaration = document.querySelector('.declaration');

let answerArr = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°"
]

btn.addEventListener('click', function(){
    let formRes = new FormData(form);
    let score = 0;
    let index = 0;
    for (let value of formRes.values()){
        if (value === answerArr[index]){
            score++;
        }index++;
    }
    declaration.innerText = 'You scored '+score;
})

let today = new Date();
let year = document.querySelector('.year');
year.innerText = today.getDate() + '/' + (today.getMonth()+1) + '/'  + today.getFullYear();