// let age = prompt('Введите ваш возраст');
// switch (true) {
//     case age > 0 && age < 12:
//         alert('Вы ребёнок');
//         break;
//     case age > 12 && age < 18:
//         alert('вы подросток');
//         break;
//     case age > 18 && age < 60:
//         alert('Вы взрослый');
//         break;
//     case age > 60 && age < 100:
//         alert('Вы пенсионер');
//         break;
//     default:
//         alert('Вы долгожитель')
// }

// let num = prompt('Введите ваш цифру');
// if (num == 1) {
//     alert('!');
// }
// else if (num == 2) {
//     alert('@');
// }
// else if (num == 3) {
//     alert('#');
// }
// else if (num == 4) {
//     alert('$');
// }
// else if (num == 5) {
//     alert('%');
// }
// else if (num == 6) {
//     alert('^');
// }
// else if (num == 7) {
//     alert('&');
// }
// else if (num == 8) {
//     alert('*');
// }
// else if (num == 9) {
//     alert('9');
// }

// let a = +prompt('Введите трехзначное число:');
// let number1 = parseInt(a / 100);
// let number2 = parseInt(a / 10) % 10;
// let number3 = (a % 10);
// if (number1 === number2 || number2 === number3 || number1 === number3) {
//     alert('Cовпадение цифр');
// } else {
//     alert('Совпадений неn');
// }

// let year = +prompt('Введите год');
// if (year % 400 == 0 || year % 4 == 0 && year % 4 != 100) {
//     alert('весекотый год')
// }
// else {
//     alert('невесокосный год')
// }

// let a = +prompt('Введите пятизначное число');
// let num1 = parseInt(a / 10000);//8
// let num2 = parseInt((a % 10000) / 1000);//9
// let num3 = parseInt((a % 1000) / 100)//4
// let num4 = parseInt((a % 100) / 10)//5
// let num5 = a % 10;
// let b = (num1 === num5 || num1 === num5 && num2 === num4) ? 'Палинром' : 'не Палиндром';
// alert(b)

let a = +prompt('Введите доллары');
let b = prompt('вылюта:EUR, UAN, AZN');

switch (b) {
    case 'EUR':
        alert(евро`${a * 0.85}`)
        break;
    case '':
        alert(тэнгэ`${a * 1.7}`)
        break;
    case '':
        alert(юани`${a * 26.82}`)
        break;
}