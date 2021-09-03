// let car = {
//     productor: 'vova',
//     model: 'jigul',
//     year: 2000,
//     speed: 120,
// }

// z1.1
// function discription(a) {

//     return (`${a.productor}, ${a.model},  ${a.year},  ${a.speed}`)
// }
// document.write(discription(car))

// z1.2
// function test(a) {
//     let s = 1000;
//     let ostHour = Math.floor((s / a.speed) / 4);
//     let time = ((s / a.speed) + ostHour);
//     console.log(time);
// }
// test(car)

// z.2.1

// let drob1 = {
//     chis1: 12,
//     znam1: 9,
//     chis2: 8,
//     znam2: 4,
// }

// z.2.1
// function task(a) {
//     for (i = a.znam2; i != 0; i--) {
//         if (a.znam2 % i === 0) {
//             if (a.znam1 % i === 0) {
//                 nod = i;
//                 break;
//             }
//         }
//     }
//     nok = a.znam1 * a.znam2 / nod
//     if (a.znam1 === a.znam2) {
//         return document.write(`${a.chis1 + a.chis2}/${a.znam1}`)
//     }
//     else {
//         return document.write(`${a.chis1 + a.chis2}/${nok}`)
//     }
// }
// task(drob1)

// z.2.2
// function task(a) {
//     for (i = a.znam2; i != 0; i--) {
//         if (a.znam2 % i === 0) {
//             if (a.znam1 % i === 0) {
//                 nod = i;
//                 break;
//             }
//         }
//     }
//     nok = a.znam1 * a.znam2 / nod
//     if (a.znam1 === a.znam2) {
//         return document.write(`${a.chis1 - a.chis2}/${a.znam1}`)
//     }
//     else {
//         return document.write(`${a.chis1 - a.chis2}/${nok}`)
//     }
// }
// task(drob1)


// z.2.3
// function task(a) {
//     am = a.chis1 * a.chis2
//     um = a.znam1 * a.znam2
//     document.write(`${am}/${um}`)
// }
// task(drob1)
// z.2.4
// function task(a, b) {
//     am = a.chis1 * b.znam2
//     um = a.znam1 * b.chis2
//     document.write(`${am}/${um}`)

// }

// z.2.5
// function test(sokr) {
//     let a
//     let b
//     for (let i = 2; i <= sokr.chis1; i++) {
//         if (sokr.chis1 % i === 0 && sokr.znam1 % i === 0) {
//             a = sokr.chis1 / i, b = sokr.znam1 / i
//             alert(`${a}/${b}`)
//         };
//     };
// }
// test(drob1);

// z.3.1
// let time = {
//     hour: 12,
//     minute: 46,
//     sec: 53,
// }
// let result
// let addTime = 2
// function discription(a) {
//     result = a.sec + addTime
//     if (result >= 60 && a.minute === 59 && a.hour === 23) {
//         return (`<<${'00'}: ${'00'}: ${result % 60}>>`)
//     }
//     else if (result >= 60 && a.minute === 59 && a.hour < 23) {
//         return (`<<${(a.hour + 1)}: ${'00'}:  ${result % 60}>>`)
//     }
//     else if (result >= 60 && a.minute < 59) {
//         return (`<<${(a.hour)}: ${a.minute + 1}:  ${result % 60}>>`)
//     }
//     else {
//         return (`<<${(a.hour)}: ${a.minute}:  ${result}>>`)
//     }

// }
// alert(discription(time))

// z.3.2
// let result
// let addTime = 40
// function discription(a) {
//     result = a.minute + addTime
//     if (result >= 60) {
//         return (`<<${(a.hour + 1)}: ${result % 60}: ${a.sec}>>`)
//     }
//     else {
//         return (`<<${parseInt(a.hour)}: ${result}:  ${a.sec}>>`)
//     }
// }
// alert(discription(time))

// z.3.3
// let result
// let addTime = 3
// function discription(a) {
//     if (a.hour + addTime >= 24) {
//         return (`<<${(result = a.hour + addTime) % 24}: ${a.minute}: ${a.sec}>>`)
//     }
//     else {
//         return (`<<${parseInt(a.hour + addTime)}: ${a.minute}:  ${a.sec}>>`)
//     }
// }
// alert(discription(time))

