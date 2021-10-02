// #1
let item = document.querySelectorAll('a[href*="http://"]');
item.forEach(function (e) {
    e.style.borderBottom = '1px dashed black ';
});
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
let block = document.querySelector('#block');

function getColor(event) {
    if (event.ctrlKey) {
        event.target.className = 'orange';
    }
    if (!event.ctrlKey) {
        for (let child of block.childNodes) {
            child.className = ''
        }
        event.target.className = 'orange';
    }
}

block.addEventListener('click', getColor)

//#4
// code: 'ControlLeft'
// 'KeyE'
// 'KeyS'
// let flag = false;
// let block = document.querySelector('#block');
// document.onkeydown = function (event) {
//     if (event.code == 'ControlLeft') flag = true;
//     if (event.code == 'KeyA' && flag) {
//         let text = document.createElement('TEXTAREA');
//         text.cols = "48";
//         text.rows = "13";
//         text.innerHTML = block.innerHTML;
//         block.innerHTML = ''
//         block.appendChild(text)
//         flag = false;

//     }
//     else if (event.code == 'ControlLeft') flag = true;
//     if (event.code == 'KeyZ' && flag) {
//         block = block.innerHTML
//         flag = false;
//     }

// }




//#5
// function sortingtable(event) {
//     let target = event.target;
//     if (target.dataset.type) {
//         let numberColumm = target.cellIndex;//номер столбца на который ткнули
//         let tableContent = Array.from(grid.rows).slice(1);//получение данных таблицы и приведении ее к массиву
//         console.log('tableContent: ', tableContent);
//     if (target.dataset.type == 'string'){//если строки, то сортируем строчно
//         var sortRows = tableContent.sort((rowA, rowB) => rowA.cells[numberColumm].innerHTML >
//         rowB.cells[numberColumm].innerHTML ? 1 : -1)

//     }
//     if (target.dataset.type == 'number'){//если числа, то сортируем как числвые значения
//         var sortRows = tableContent.sort((rowA, rowB) => {
//             return (rowA.cells[numberColumm].innerHTML - rowB.cells[numberColumm].innerHTML) }) 
//     }
//     grid.tBodies[0].append(...sortRows)//вставляем получившийся отсортированнй html

// }
//   }


// grid.addEventListener('click', (event) => sortingtable(event))
