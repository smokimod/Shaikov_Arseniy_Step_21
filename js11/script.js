// #3
// let btn = document.querySelector('#bot');
// let btn1 = document.querySelector('#bot1');
// let btn2 = document.querySelector('#bot2');
// let txt = document.querySelector('#text');

// btn.addEventListener("click", function () {
//     if (txt.style.display === 'none') {
//         txt.style.display = 'block'
//     }
//     else {
//         txt.style.display = 'none'
//     }
// })

//#4
// let block1 = document.querySelector('#text');
// let block2 = document.querySelector('#text1');
// let block3 = document.querySelector('#text2');
// btns = document.querySelector('#btns');
// function showHide(event) {
//     block1.style.display = 'none';
//     block2.style.display = 'none';
//     block3.style.display = 'none';
//     if (event.target.id === 'bot1') {
//         block1.style.display = 'block';
//     }
//     if (event.target.id === 'bot') {
//         block2.style.display = 'block';
//     }
//     if (event.target.id === 'bot2') {
//         block3.style.display = 'block';
//     }
// }
// btns.addEventListener('click', showHide);

//#5
// btn.addEventListener('click', progressIn);

// let progress = document.querySelector('#progress');
// let btn = document.querySelector('#btn');
// let widthB = 0;
// let div = document.createElement('div');
// progress.append(div);
// div.style.height = 'inherit';
// div.style.background = 'red';
// div.style.width = widthB;
// function progressIn() {
//     if (widthB === 100) {
//         return
//     }
//     if (widthB > 30 && widthB < 60) {
//         div.style.background = 'yellow';
//     }
//     if (widthB > 60) {
//         div.style.background = 'green';
//     }
//     widthB = widthB + 5;
//     div.style.width = widthB + 'px'

// }
// btn.addEventListener('click', progressIn);
///////////////////////////////////////////////////////////////////////DZ///////////////////////////////////////

// #1
// let input = document.querySelector('#input1');
// let reg = /[0-9]/g;
// input.addEventListener('keydown', function () {
//     input.value = input.value.replace(reg, '')
// });
// input.addEventListener('keyup', function () {
//     input.value = input.value.replace(reg, '')
// });

//#2
// let modal = document.querySelector('#modal');
// let btn = document.querySelector('#button');
// let span = document.querySelector('#span');


// btn.addEventListener('click', function () {
//     modal.style.display = 'block';
// })
// span.addEventListener('click', function () {
//     modal.style.displey = 'none';
// })
// window.addEventListener('click', function (event) {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// })

//#3
// let field = document.querySelector('#field');

// function football(event) {
//     ball.style.top = event.clientY - field.getBoundingClientRect().top - field.clientTop - (ball.getBoundingClientRect().height / 2) + 'px';
//     ball.style.left = event.clientX - field.getBoundingClientRect().left - field.clientLeft - (ball.getBoundingClientRect().width / 2) + 'px';
// }

// field.addEventListener('click', football);

//#4
// let btns = document.querySelector('#button');
// let cont = document.querySelector('#container');
// let block1 = document.querySelector('#red');
// let block2 = document.querySelector('#yellow');
// let block3 = document.querySelector('#green');
// let value = 0;
// block1.style.backgroundColor = 'grey';
// block2.style.backgroundColor = 'grey';
// block3.style.backgroundColor = 'grey';
// function getShow() {

//     value++
//     if (value === 1) {
//         block1.style.backgroundColor = 'red';
//         block2.style.backgroundColor = 'grey';
//         block3.style.backgroundColor = 'grey';
//     }
//     else if (value === 2) {
//         block2.style.backgroundColor = 'yellow';
//         block1.style.backgroundColor = 'grey';
//         block3.style.backgroundColor = 'grey';
//     }
//     else if (value === 3) {
//         block3.style.backgroundColor = 'green';
//         block2.style.backgroundColor = 'grey';
//         block1.style.backgroundColor = 'grey';
//     }
//     else if (value > 3) {
//         value = 0;
//         block1.style.backgroundColor = 'grey';
//         block2.style.backgroundColor = 'grey';
//         block3.style.backgroundColor = 'grey';
//     }
// }

// btns.addEventListener('click', getShow);

//#5
// let block = document.querySelector('#block');
// let res = document.querySelectorAll('#color');
// function getColor(event) {
//     for (let i = 0; i < res.length; i++) {
//         res[i].style.backgroundColor = 'white';
//     }
//     event.target.style.backgroundColor = 'orange'
// }
// block.addEventListener('click', getColor)

// #6
//Не моё решение, пока что сложно, разбираюсь

// let toolTipobj

// document.onmouseover = function (event) {
//     let target = event.target;
//     let tip = target.dataset.tooltip;
//     if (!tip) return;

//     toolTipobj = document.createElement('div');
//     toolTipobj.className = 'tooltip';
//     toolTipobj.innerHTML = tip;
//     document.body.append(toolTipobj);

//     let coords = target.getBoundingClientRect();
//     let left = coords.left + (target.offsetWidth - toolTipobj.offsetWidth) / 2;
//     if (left < 0) left = 0;
//     let top = coords.top = toolTipobj.offsetHeight - 5;
//     if (top < 0) {
//         top = coords.top + target.offsetHeight + 5;
//     }
//     toolTipobj.style.left = left + 'px';
//     toolTipobj.style.top = top + 'px';
// }

// document.onmouseout = function () {
//     if (toolTipobj) {
//         toolTipobj.remove();
//         toolTipobj = null;
//     }
// }