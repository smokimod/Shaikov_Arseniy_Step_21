let toDoInput = document.querySelector('.todo_input');
let toDoButton = document.querySelector('.todo_button');
let toDolist = document.querySelector('.todo_list');
let cheked = document.querySelector('.remove_btn');

toDoButton.addEventListener('click', showList);
toDolist.addEventListener("click", deleteItem);
document.addEventListener('keydown', changeItem);
cheked.addEventListener('click', deleteCheck);
cheked.addEventListener('click', deleteCheckTwo);
document.addEventListener('click', progress);
document.addEventListener('click', spanAdd);

let arr = [];
let arrInput = [];
let checkboxArray = [];

function showList() {
    //checking empty input.value
    if (document.querySelector(".todo_input").value.length == 0) {
        return null;
    }
    //Creating main divs with elements inside
    const newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo');
    //добавление в массив
    arr.push(newTodoDiv);
    for (let a = 0; a < arr.length; a++) {
        arr[a].id = 'arr' + [a];
    }
    localStorage.setItem("arr", JSON.stringify(arr));
    //li
    const liItem = document.createElement('li');
    liItem.textContent = toDoInput.value;
    liItem.classList.add('todo_item');
    newTodoDiv.appendChild(liItem);
    if (toDoInput.value === "") {
        return null
    }
    //li && localStorage
    arrInput.push(liItem.textContent);
    //checkbox
    const completeCheck = document.createElement('input');
    completeCheck.type = 'checkbox';
    completeCheck.classList.add('check_box');
    newTodoDiv.prepend(completeCheck);
    checkboxArray.push(completeCheck);
    for (let a = 0; a < checkboxArray.length; a++) {
        checkboxArray[a].id = 'checkboxArray' + [a];
    }
    console.log(checkboxArray);
    ////////////////////////////////////////////////////
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
    storage();
}
function storage() {
    localStorage.setItem("arrInput", JSON.stringify(arrInput));
}
//DELETE ITEM (also localStorage) && CHECK && EDIT
function deleteItem(e) {
    const item = e.target;
    if (item.classList[0] === "delete_btn") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === item.parentElement.id) {
                arr[i].remove();
                arr.splice(i, 1);
                arrInput.splice(i, 1);
                checkboxArray.splice(i, 1);
                localStorage.setItem('arrInput', JSON.stringify(arrInput));
            }
        }
    }
    if (item.classList[0] === "check_box") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem");
    }
    if (item.classList[0] === 'edit_btn') {
        const sabline = item.previousSibling;
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
            const chengeLi = document.createElement('li');
            chengeLi.textContent = lit[i].value;
            lit[i].replaceWith(chengeLi);
        }
    }
}
//Delete cheked 
function deleteCheck() {
    const arrCheck = document.querySelectorAll('.check_box');
    for (let i = 0; i < arrCheck.length; i++) {
        if (arrCheck[i].checked) {
            arrCheck[i].parentElement.remove();
        }
    }
}
function deleteCheckTwo() {
    const w = checkboxArray.filter(word => word.checked);
    for (let j = 0; j < w.length; j++) {
        w.splice(j);
        console.log(checkboxArray)
    }
}
function progress() {
    let checked = 0;
    let selectBox = document.querySelectorAll("input[type='checkbox']");
    selectBoxItem = selectBox.length;
    let myBar = document.querySelector("#myBar");
    let checks = document.querySelector('.todo_list');
    let boxes = checks.querySelectorAll("input[type='checkbox']:checked");
    checked = boxes.length;
    myBar.style.width = ((checked / selectBoxItem) * 100) + "%";
}
let boxLoop = document.querySelectorAll("input[type='checkbox']");
boxLoop.forEach(function (box) {
    box.addEventListener("change", function () {
        progress();
    });
});
// PROGRESS BAR SPAN ADD
function spanAdd() {
    let spanOne = document.querySelector('.spanOne');
    let oneItem = document.querySelectorAll("input[type='checkbox']:checked");
    oneChange = oneItem.length;
    spanOne.textContent = (`${oneChange}`);
    let spanTwo = document.querySelector('.spanTwo');
    let twoItem = document.querySelectorAll("input[type='checkbox']");
    twoChange = twoItem.length;
    spanTwo.textContent = (`${twoChange}`);
}



