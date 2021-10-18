//1
// let button = document.querySelector('.button');
// let inputOne = document.querySelector('#input_one')
// let inputTwo = document.querySelector('#input_two')
// let mainBlock = document.querySelector('#main');

// function getShow(event) {
//     let secondBlock = document.createElement('div')

//     mainBlock.prepend(secondBlock)
//     let labe = document.createElement('label');
//     labe.textContent = inputOne.value;
//     labe.style.marginBottom = 15;

//     let com = document.createElement('div');
//     com.textContent = inputTwo.value;

//     secondBlock.appendChild(labe);
//     secondBlock.appendChild(com);
//     secondBlock.className = 'border';
//     inputOne.value = "";
//     inputTwo.value = "";
// }

// button.addEventListener('click', getShow)

//#2
// let but1 = document.querySelector('#button1');
// let but2 = document.querySelector('#button2');
// let main = document.querySelector('#main');
// let main2 = document.querySelector('#main2');

// function getCheked() {
//     let check1 = document.querySelector('#check1');
//     let check2 = document.querySelector('#check2');
//     count = 0;
//     if (check1.checked) {
//         count++
//         console.log(count)
//     }
//     else if (check1.checked == false && check2.checked == false) {
//         alert('Выберите ответ');
//         return;
//     }
//     main.replaceWith(main2);
//     main2.style.display = 'block';
// }
// function getCheked2() {
//     let checkOne = document.querySelector('#checkOne');
//     let checkTwo = document.querySelector('#checkTwo');
//     count = count;
//     if (checkOne.checked) {
//         count++
//         console.log(count)
//     }
//     else if (checkOne.checked == false && checkTwo.checked == false) {
//         alert('Выберите ответ');
//         return;
//     }
//     alert(`вы набали ${count} очка из 2`)
// }
// but1.addEventListener('click', getCheked);
// but2.addEventListener('click', getCheked2);

//#3
// let subBlock = document.querySelector('#subBlock')
// let button = document.querySelector('#button');
// let text = document.querySelector('#textarea');
// function getStyle() {
//     let span = document.querySelector('#span_one');
//     let boxes = span.querySelector("input[type='radio']:checked");
//     let spanTwo = document.querySelector('#span_two');
//     let boxesTwo = spanTwo.querySelector("input[type='radio']:checked");

//     let block = document.createElement('div');
//     let styletext = boxes.id;
//     let alignText = boxesTwo.id
//     block.textContent = text.value;
//     block.style.textDecoration = styletext;
//     block.style.textAlign = alignText
//     subBlock.appendChild(block);
//     block.className = 'block';
//     text.replaceWith(block);
// }
// button.addEventListener('click', getStyle);

// #4
// let main = document.querySelector('#main');
// let selectItem = document.querySelector('#book_name');
// let qua = document.querySelector('#Qua');
// let nameP = document.querySelector('#name');
// let adress = document.querySelector('#adress');
// let date = document.querySelector('#date');
// let comment = document.querySelector('#comment')
// let button = document.querySelector('#button');

// function getSelect(event) {
//     const target = event.target;
//     if (target.className === 'select') {
//         const previous = target.previousElementSibling;
//         selectItem.value = previous.textContent;
//     }
// }
// function getData() {
//     const obj = {
//         bookname: selectItem.value,
//         qty: qua.value,
//         personName: nameP.value,
//         adressP: adress.value,
//         dateP: date.value,
//         commentP: comment.value,
//     }
//     const el = document.createElement('div');
//     el.className = 'el';
//     el.innerHTML = `${obj.personName}, thanks for the order!<p></p>Bokk "${obj.bookname}" ${obj.qty} qty. will be delivered on ${obj.dateP} to ${obj.adressP}.<p></p> Your commnet: ${obj.commentP}`;
//     main.after(el)
// }
// button.addEventListener('click', getData);
// document.addEventListener('click', getSelect);
