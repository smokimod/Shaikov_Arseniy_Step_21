// // #1
// function getNum(a, b) {
//     if (a < b) {
//         alert(`${-1}`)
//     }
//     else if (a > b) {
//         alert(`${1}`)
//     }
//     else {
//         alert(`${0}`)
//     }
// }
// getNum(2, 4)

// #2
// function factorial(num) {
//     return (num != 1) ? num * factorial(num - 1) : 1;
// }
// alert(factorial(5));

// #3
// function summa(num1, num2, num3) {
//     return num1 + num2 + num3
// }
// document.write(summa('1', '4', '6'))

// #4
// function summa(num1, num2) {

//     if (num1 == undefined) {
//         return num2 ** 2
//     }
//     else {
//         return 'Площадь прямоугольника:' + num2 * num1
//     }
// }
// console.log(summa(8, 5))

// #5
// function perfect(num) {
//     let temp = 0;
//     for (i = 1; i < num; i++) {
//         if (num % i == 0)
//             temp += i;
//     }
//     if (num == temp) {
//         console.log('совершенное число');
//     }
//     else {
//         console.log('Несовершенное число');
//     }
// }
// perfect(28);

// #6
// function perfect(num1, num2) {
//     let res = [];
//     for (let i = num1; i < num2; i++) {
//         sum = 0;
//         for (let n = 1; n <= i / 2; n++) {
//             if (i % n === 0) sum += n;
//         }
//         if (i === sum) res.push(i);
//     }
//     return res;
// }
// console.log(perfect(1, 1000));

//#7
// function time(hour, minute, sec) {
//     if (minute === undefined) {
//         minute = '00';
//     }
//     if (sec === undefined) {
//         sec = '00';
//     }

//     return (`${hour}: ${minute}: ${sec}`)
// }
// alert(time(14, 52));

// function timeShow(hour, min, sec) {
//     if (hour <= 9) {
//         hour = `0` + hour;
//     }
//     if (min === undefined) {
//         min = `00`;
//     } else if (min <= 9) {
//         min = `0` + min;
//     }
//     if (sec === undefined) {
//         sec = `00`;
//     } else if (sec <= 9) {
//         sec = `0` + sec;
//     }
//     console.log(`${hour}:${min}:${sec}`);
// }
// timeShow(11, 2);

// // #8
// function time(hour, minute, sec) {
//     a = hour * 3600;
//     b = minute * 60;
//     result = (`«${hour} часов: ${minute} минут: ${sec} секунд». Это:  «${a + b + sec} секунд»`);
//     return result

// }
// alert(time(13, 25, 56))

//#9
// function time(sec) {
//     let hour = Math.floor(sec / 60 / 60);
//     let minute = Math.floor(sec / 60) - (hour * 60);;
//     let seconds = sec % 60;
//     result = (`«${hour} часов: ${minute} минут: ${seconds} секунд».`);
//     return result
// }
// alert(time(48356))

//#10
// function time(hour, minute, sec, hourTwo, minuteTwo, secTwo) {
//     let a = hour * 3600;
//     let b = minute * 60;
//     let j = hourTwo * 3600;
//     let d = minuteTwo * 60;
//     let result = a + b + sec;
//     let resultTwo = j + d + secTwo;
//     let dif = resultTwo > result ? resultTwo - result : result - resultTwo;
//     //перевод
//     let hourFin = Math.floor(dif / 60 / 60);
//     let minuteFin = Math.floor(dif / 60) - (hourFin * 60);;
//     let secFin = dif % 60;
//     resultFin = (`«Разница во времени : ${hourFin} часов: ${minuteFin} минут: ${secFin} секунд».`);
//     return resultFin


// }

// alert(time(13, 25, 56, 48, 17, 10))

