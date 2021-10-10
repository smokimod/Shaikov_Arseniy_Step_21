let toDoInput = document.querySelector('.todo_input');
let toDoButton = document.querySelector('.todo_button');
let toDolist = document.querySelector('.todo_list');
let cheked = document.querySelector('.remove_btn')

toDoButton.addEventListener('click', showList);
toDolist.addEventListener("click", deleteItem);
document.addEventListener('keydown', changeItem);
cheked.addEventListener('click', deleteCheck);


function showList(event) {
    event.preventDefault();
    const newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo');
    //li
    const liItem = document.createElement('li');
    liItem.textContent = toDoInput.value;
    liItem.classList.add('todo_item');
    newTodoDiv.appendChild(liItem);
    if (toDoInput.value === "") {
        return null
    }
    const completeCheck = document.createElement('input');
    completeCheck.type = 'checkbox';
    completeCheck.id = 'cl'
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
    toDoInput.value = ""
    console.log(newTodoDiv)
}
//DELETE ITEM && CHECK 
function deleteItem(e) {
    const item = e.target;
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        todo.classList.add('fall');
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
    console.log(arrCheck)
    for (let i = 0; i < arrCheck.length; i++) {
        const hiddeCheck = arrCheck[i];
        if (hiddeCheck.checked) {
            hiddeCheck.parentNode.style.display = 'none'
        }
    }
}
// let array = [1, 2, 3];

// localStorage.setItem(array, JSON.stringify(array));
// array = JSON.parse(localStorage.getItem("array"));

// console.log(typeof array); // объект
// console.log(array); // [1, 2, 3]