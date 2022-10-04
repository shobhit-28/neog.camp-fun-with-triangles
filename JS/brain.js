// let form = document.querySelector('.form');
let btn = document.querySelector('.btn');
let declaration = document.querySelector('.declaration');

let ans1 = document.querySelector('input[value = "90°"]');
let ans2 = document.querySelector('input[value = "right angled"]');
let ans3 = document.querySelector('input[value = "one right angle"]');
let ans4 = document.querySelector('input[value = "12, 16, 20"]');
let ans5 = document.querySelector('input[value = "Equilateral triangle"]');
let ans6 = document.querySelector('input[value = "100°"]');
let ans7 = document.querySelector('input[value = "30°"]');
let ans8 = document.querySelector('input[value = "a + b + c"]');
let ans9 = document.querySelector('input[value = "no"]');
let ans10 = document.querySelector('#lastOne');


btn.addEventListener('click', function(){
    // let formRes = new FormData(form);
    // let score = 0;
    // let index = 0;
    // for (let value of formRes.values()){
    //     if (value === answerArr[index]){
    //         score++;
    //     }index++;
    // }
    // declaration.innerText = 'You scored '+score;
    // console.log(ans10.checked);

    let score = 0;

    if(ans1.checked){
        score++;
    }
    if(ans2.checked){
        score++;
    }
    if(ans3.checked){
        score++;
    }
    if(ans4.checked){
        score++;
    }
    if(ans5.checked){
        score++;
    }
    if(ans6.checked){
        score++;
    }
    if(ans7.checked){
        score++;
    }
    if(ans8.checked){
        score++;
    }
    if(ans9.checked){
        score++;
    }
    if(ans10.checked){
        score++;
    }
    declaration.innerText = 'You scored '+score;
})

let today = new Date();
let year = document.querySelector('.year');
year.innerText = today.getDate() + '/' + (today.getMonth()+1) + '/'  + today.getFullYear();