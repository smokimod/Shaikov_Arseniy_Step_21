let toDoInput = document.querySelector('.todo_input');
let toDoButton = document.querySelector('.todo_button');
let toDolist = document.querySelector('.todo_list');
let cheked = document.querySelector('.remove_btn')

toDoButton.addEventListener('click', showList);
toDolist.addEventListener("click", deleteItem);
document.addEventListener('keydown', changeItem);
cheked.addEventListener('click', deleteCheck);
document.addEventListener('click', progress);
document.addEventListener('click', spanAdd);

let arr = [];
function showList(event) {
    const newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo');
    //li
    const liItem = document.createElement('li');
    liItem.textContent = toDoInput.value;
    // liItem.classList.add('todo_item');
    newTodoDiv.appendChild(liItem);
    if (toDoInput.value === "") {
        return null
    }
    const completeCheck = document.createElement('input');
    completeCheck.type = 'checkbox';
    //заметка* className не подходит т.к. он не возвразает массив классов
    completeCheck.classList.add('check_box')
    newTodoDiv.prepend(completeCheck);

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add('edit_btn');
    newTodoDiv.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn');
    newTodoDiv.appendChild(deleteButton);
    toDolist.appendChild(newTodoDiv);
    toDoInput.value = "";
    arr.push(newTodoDiv);
    for (let a = 0; a < arr.length; a++) {
        arr[a].id = 'arr' + [a];
    }
}
//DELETE ITEM && CHECK && EDIT
function deleteItem(e) {
    const item = e.target;
    if (item.classList[0] === "delete_btn") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === item.parentElement.id) {
                arr[i].remove();
                console.log(arr[i].id)
            }
        }
    }
    if (item.classList[0] === "check_box") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
    if (item.classList[0] === 'edit_btn') {
        const sabline = item.previousSibling
        const res = document.createElement('input');
        res.value = sabline.textContent;
        res.className = 'input_text';
        sabline.replaceWith(res);
    }
}
//ACCEPTING CHANGES
function changeItem(evt) {
    const lit = document.querySelectorAll('.input_text');
    if (evt.ctrlKey) {
        for (let i = 0; i <= lit.length; i++) {
            const a = document.createElement('li');
            a.textContent = lit[i].value;
            lit[i].replaceWith(a);
        }
    }
}
//Delete cheked 
function deleteCheck() {
    const arrCheck = document.querySelectorAll('.check_box');

    for (let i = 0; i < arrCheck.length; i++) {
        const hiddeCheck = arrCheck[i];
        if (hiddeCheck.checked) {
            hiddeCheck.parentNode.remove()
        }
    }
}
// let array = [1, 2, 3];

// localStorage.setItem(array, JSON.stringify(array));
// array = JSON.parse(localStorage.getItem("array"));

// console.log(typeof array); // объект
// console.log(array); // [1, 2, 3]
function progress() {
    let checked = 0;
    let selectBox = document.querySelectorAll("input[type='checkbox']");
    selectBoxItem = selectBox.length;
    let myBar = document.querySelector("#myBar");
    let checks = document.querySelector('.todo_list');
    let boxes = checks.querySelectorAll("input[type='checkbox']:checked");
    checked = boxes.length
    myBar.style.width = ((checked / selectBoxItem) * 100) + "%";
}
let boxLoop = document.querySelectorAll("input[type='checkbox']");
boxLoop.forEach(function (box) {
    box.addEventListener("change", function () {
        progress()
    });
});
// PROGRESS BAR SPAN ADD
function spanAdd() {
    let spanOne = document.querySelector('.spanOne');
    let oneItem = document.querySelectorAll("input[type='checkbox']:checked");
    oneChange = oneItem.length;
    spanOne.textContent = (`${oneChange}`)
    let spanTwo = document.querySelector('.spanTwo');
    let twoItem = document.querySelectorAll("input[type='checkbox']");
    twoChange = twoItem.length;
    spanTwo.textContent = (`${twoChange}`);
}