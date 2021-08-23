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
//     alert('високосный год')
// }
// else {
//     alert('невисокосный год')
// }

// let a = +prompt('Введите пятизначное число');
// let num1 = parseInt(a / 10000);//8
// let num2 = parseInt((a % 10000) / 1000);//9
// let num3 = parseInt((a % 1000) / 100)//4
// let num4 = parseInt((a % 100) / 10)//5
// let num5 = a % 10;
// let b = (num1 === num5 || num1 === num5 && num2 === num4) ? 'Палинром' : 'не Палиндром';
// alert(b)

// let a = +prompt('Введите доллары');
// let b = prompt('вылюта:EUR, UAN, AZN');
// switch (b) {
//     case 'EUR':
//         alert(`евро:${a * 0.85}`)
//         break;
//     case 'AZN':
//         alert(`тэнгэ:${a * 1.7}`)
//         break;
//     case 'UAN':
//         alert(`юани:${a * 26.82}`)
//         break;
// }

// let a = +prompt('Введите сумму');
// switch (true) {
//     case a >= 200 || a <= 300:
//         alert(`${(a - (a * 0.3)}`);
//         break;

//     case a >= 300 || a <= 500:
//         alert(`${(a - (a * 0.5)}`);
//         break;
//     case a >= 500:
//         alert(`${(a - (a * 0.7)}`);
//         break;
// }


// let p = +prompt('периметр квадрата');
// let a = +prompt('длина окружности');
// let rad = a / 2;
// let result = p / rad
// let c = (result != 0) ? `Радиус окружности равен: ${result}. Круг вместился` : 'Неа';
// alert(c);

//#9
let q1 = +prompt('Сколько будет 2-2? Ответы: 0, 2, 4.');
// let q2 = +prompt('Сколько будет 6-4? Ответы: 0, 2, 4');
// let q3 = +prompt('Сколько будет 8-4? Ответы: 0, 2, 4');
// count = 0
// if (q1 === 0) {
//     count += 2
// }
// if (q2 === 2) {
//     count += 2
// }
// if (q3 === 4) {
//     count += 2
// }
// alert(`Вы набрали ${count} баллов`);

// #10
// let day = +prompt('день');
// let mon = +prompt('месяц');
// let year = +prompt('год');
// let resDay = day + 1;
// let resMon = mon + 1;
// let resYear = year + 1;
// if (mon === 1 || mon === 3 || mon === 5 || mon === 7 || mon === 8 || mon === 10) {
//     if (day === 31) {
//         alert(`${day / day}.${resMon}.${year}`)
//     }
//     else if (day < 31) {
//         alert(`${resDay}.${mon}.${year}`)
//     }
// }
// if (mon === 12 && day === 31) {
//     alert(`${day / day}.${mon / mon}.${resYear}`)
// }
// if (mon === 4 || mon === 6 || mon === 9 || mon === 11) {
//     if (day === 30) {
//         alert(`${day / day}.${resMon}.${year}`)
//     }
//     else if (day < 30) {
//         alert(`${resDay}.${mon}.${year}`)
//     }
// }
// if (mon === 2) {
//     if (day === 29) {
//         if (year % 400 === 0 || year % 4 === 0 && year % 100 != 0) {
//             alert(`${day / day}.${resMon}.${year}`)
//         }
//     } else {
//         alert(`В високосный: ${resDay}.${mon}.${year}`)
//     }
// }
// if (mon === 2) {
//     if (day === 28) {
//         alert(`Не в високосный: ${day / day}.${resMon}.${year}`)
//     }
// }

