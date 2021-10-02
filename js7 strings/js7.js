// function isStr(str1, str2) {
//   if (str1.length === str2.length) {
//     return 0;
//   } else if (str1.length > str2.length) {
//     return 1;
//   } else {
//     return -1;
//   }
// }
// console.log(isStr("jaa", "juk"));

// // №2
// function strLength(str) {
//   return str[0].toUpperCase() + str.slice(1); //"C" + "ar"
// }

// console.log(strLength("car"));

// // №3
// let glasniy = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
// function strCount(str) {
//   let count = 0;
//   let newStr = str.toLowerCase(); // машинаедет
//   let arr = newStr.split("");
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < glasniy.length; j++) {
//       arr[i] === glasniy[j] ? count++ : count;
//     }
//   }
//   return count;
// }

// console.log(strCount("машина"));

// // #4
// let glasniy = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'ххх']
// function strCount(str) {
//   let count = 0;
//   let newStr = str.toLowerCase(); // машинаедет
//   for (i = 0; i < glasniy.length; i++) {
//     newStr.includes(glasniy[i]) ? count++ : count
//   }
//   return !!count;
// }

// console.log(strCount('100% бесплатно ghjdthm pfrfxftimc'));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DZ
// #1
// function count(str) {
//   let result = str.toLowerCase();
//   let res = result.match(/[a-z]/g);
//   let res1 = result.match(/\d/g);
//   let res2 = result.match(/\D[^0-9]/g);
//   return (`Букв:${res.length} Цифр:${res1.length} Символы:${res2.length}`);
// }
// console.log(count('adavd4213++ +'));

//#2
// let str = 33;
// if ((isNaN(str)) || (str > 99) || (str < 10)) {
//     console.log('Вы ввели неправильное число');
// }
// else {
//     let item = number(str);
//     console.log('Получилось:' + item + '');
// }
// function number(num) {
//     let arr = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
//     let arr2 = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
//     if (num < 20) {
//         return arr[num - 1]
//     };
//     let res = arr2[(num % 10) - 2];
//     if (num % 10 != 0) {
//         res += '' + arr[num % 10 - 1];
//     }
//     return res;
// }

//#3
// function changeLetter(str) {
//     let strSplit = str.split('');
//     for (i = 0; i < str.length; i++) {
//         if (strSplit[i].toUpperCase() === strSplit[i]) {
//             console.log(strSplit[i] = strSplit[i].toLowerCase());
//         }
//         else if (strSplit[i].toLowerCase() === strSplit[i]) {
//             console.log(strSplit[i] = strSplit[i].toUpperCase());
//         }
//         else if (!isNaN(strSplit[i])) {
//             strSplit[i] = '_';
//         }
//     }
//     let result = strSplit.join('')
//     console.log(result)
// }
// changeLetter('5254geDD');

//#4
// let str = 'is-your-will';
// let result = str.split('-').map(function (letter, index) { return index == 0 ? letter : letter[0].toUpperCase() + letter.slice(1) }).join('');
// console.log(result);

//#5 
// function ccs(str) {
//     let res = str.split(' ');
//     let result = res.map(function (item) { return item[0] }).join('');
//     console.log(result.toUpperCase());
// }
// ccs('cascading style sheets');

//#6
// function getStr(str) {
//     return str.split(" ").join("");
// }
// console.log(getStr("Cascading Pls Me Help"));

//#7
// function calculator(str) {
//     let strSplit = str.split(' ');
//     switch (strSplit[1]) {
//         case '+':
//             return +strSplit[0] + +strSplit[2];
//         case '-':
//             return +strSplit[0] - +strSplit[2];
//         case '/':
//             return +strSplit[0] / +strSplit[2];
//         case '*':
//             return +strSplit[0] * +strSplit[2];
//     }
// }
// console.log(calculator('2 + 2'));


//#8
 // пока что не выходит(


//#9
// function date(str) {
//     let strEmpty = '';
//     strEmpty = str.split('/');
//     console.log(strEmpty);
// }
// date('11/09/2021');