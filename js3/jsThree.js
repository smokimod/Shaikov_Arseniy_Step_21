// let a = +prompt('chislo 1');
// let b = +prompt('chislo 2');
// let start = a > b ? b : a;
// let finish = a < b ? b : a;
// res = 0
// while (start <= finish) {
//     res += start
//     start++
//     alert(res);
// }


// let a = +prompt('chislo1');
// let b = +prompt('chislo2');
// let i = a < b ? a : b;
// while (i >= 1) {
//     if (a % i === 0) {
//         if (b % i === 0) {
//             console.log(i);
//             break;
//         }
//     }
//     i--;
// }


// let a = +prompt('chislo1');
// let i = 1;
// while (i <= a) {
//     if (a % i === 0) {
//         document.write(i)
//     }
//     i++;
// }

// let a = +prompt('chislo1');
// let i = 1;
// while ((a /= 10) >= 1) {
//     i++
// }
// document.write(i)


// let pol = 0;
// let otr = 0;
// let nul = 0;
// let cht = 0;
// let ncht = 0;
// let i = 10;
// while (i !== 0) {
//     let number = +prompt('chislo1');
//     number > 0 ? pol++ : pol;
//     number < 0 ? otr++ : otr;
//     number === 0 ? nul++ : nul;
//     number % 2 === 0 ? cht++ : cht;
//     number % 2 !== 0 ? ncht++ : ncht;
//     i--;
// }
// document.write(`Положительных: ${pol} Отрицательных: ${otr} Нулей: ${nul} Чётных: ${cht} Нечётных: ${ncht}`)


// #6
// do {
//     let num1 = +prompt('chsilo1');
//     let znak = prompt('znak');
//     let num2 = +prompt('chislo2');
//     let result
//     switch (znak) {
//         case "+":
//             result = (num1 + num2);
//             break;
//         case "-":
//             result = (num1 - num2);
//             break;
//         case "*":
//             result = (num1 * num2);
//             break;
//         case "/":
//             result = (num1 / num2);
//             break;
//     }
//     alert(result);
//     over = confirm('Повторим?');
// } while (over != false);

// #8
// let num1 = prompt('день недели');
// do {
//     switch (num1) {
//         case 'понедельник':
//             over = confirm('Следующий день вторник: продолжим?')
//         case 'вторник':
//             over = confirm('Следующий день среда: продолжим?')
//         case 'среда':
//             over = confirm('Следующий день четверг: продолжим?')
//         case 'четверг':
//             over = confirm('Следующий день пятница: продолжим?')
//         case 'пятница':
//             over = confirm('Следующий день суббота: продолжим?')
//         case 'суббота':
//             over = confirm('Следующий день воскресенье: продолжим?')
//         case 'воскресениье':
//             over = confirm('Следующий понедельник: продолжим?')
//     }

// // #9
// let count = 1;
// let num = 2;
// let i = 1;
// res = 0
// while (count <= 8) {
//     while (i <= 10) {
//         document.write((num + ' * ' + i + ' = ' + (i * num) + '<br>'));
//         i++;
//     }
//     document.write('<br>')
//     count++
//     num++
//     i = 1
// }

// #10
// let start = 0;
// let finish = 100;
// let over;
// alert('Загадай число от 1 до 100');
// while (over !== 0) {
//     let result = (Math.round(start + finish) / 2);
//     const ans = prompt(`Ваше число <,> или === ${result}`);
//     if (ans == '<') {
//         finish = result;
//     }
//     else if (ans == '>') {
//         start = result;
//     }
//     else if (ans == "===") {
//         alert('Угадал');
//         break;
//     }
// }
