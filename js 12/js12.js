// #1
// let item = document.querySelectorAll('a[href*="http://"]');
// item.forEach(function (e) {
//     e.style.borderBottom = '1px dashed black ';
// });
// №2
// const list = document.querySelector('.tree');
// list.addEventListener('click', (event) => {
//     let child = event.target.childNodes;
//     console.log(child);
//     for (let i = 0; i < child.length; i++) {
//         if (child[i].tagName === 'UL') {
//             if (child[i].style.display != 'none') {
//                 child[i].style.display = 'none'
//             }
//             else {
//                 child[i].style.display = 'block'
//             }
//         }
//     }
// })
// tree.addEventListener('mouseover', (event) => {
//     event.target.style.fontWeight = 'bold'
// })
// tree.addEventListener('mouseout', (event) => {
//     event.target.style.fontWeight = ''
// })

// #3
// let block = document.querySelector('#block');
// let colorBibl = block.querySelectorAll('div');
// start = ''

// for (let i = 0; i < colorBibl.length; i++) {
//     colorBibl[i].id = 'colorBibl' + [i];
// }

// function getColor(event) {
//     if (event.ctrlKey && event.shiftKey == false) {
//         for (let i = 0; i < colorBibl.length; i++) {
//             if (colorBibl[i].id === event.target.id && colorBibl[i].className !== 'orange' && event.ctrlKey) {
//                 colorBibl[i].className = 'orange';
//                 start = i;
//             } else if (colorBibl[i].id === event.target.id && colorBibl[i].className === 'orange' && event.ctrlKey) {
//                 colorBibl[i].classNamer = '';
//             }
//         }
//     }
//     if (!event.ctrlKey && !event.shiftKey) {
//         for (let i = 0; i < colorBibl.length; i++) {
//             if (colorBibl[i].id === event.target.id && colorBibl[i].className !== 'orange') {
//                 colorBibl[i].className = 'orange';
//                 start = i;
//                 console.log(start)
//             } else if (colorBibl[i].className === 'orange') {
//                 colorBibl[i].className = '';
//             }
//         }
//     }
//     if (event.shiftKey) {
//         for (let i = 0; i < colorBibl.length; i++) {
//             if (colorBibl[i].id === event.target.id) {
//                 if (start > i) {
//                     for (let j = i; j < start; j++) {
//                         colorBibl[j].className = 'orange';
//                     }
//                 }
//                 if (start < i) {
//                     for (let j = i; j > start; j--) {
//                         // console.log(j)
//                         colorBibl[j].className = 'orange';
//                     }
//                 }
//             }
//         }
//     }
// }
// block.addEventListener('click', getColor)

//#4
// document.addEventListener("keydown", keyPress);
// function keyPress(event) {
//    if ((event.code === "KeyS" || event.code === "KeyE")) {
//       let block = document.querySelector(".blockStyle");
//       //заметка*через id nodeName=null
//       if (event.code === "KeyE" && block.nodeName === "DIV" && event.ctrlKey) {
//          event.preventDefault();
//          let text = document.createElement("textarea");
//          text.rows = 30;
//          text.cols = 40;
//          text.style.fontFamily = 'sans-serif'
//          text.className = "blockStyle";
//          text.textContent = block.textContent;
//          block.replaceWith(text);
//       }
//       if (event.code === "KeyS" && block.nodeName === "TEXTAREA" && event.ctrlKey) {
//          event.preventDefault();
//          let newBlock = document.createElement("div");
//          newBlock.className = "blockStyle";
//          newBlock.textContent = block.textContent;
//          block.replaceWith(newBlock);
//       }
//    }
// }


//#5
