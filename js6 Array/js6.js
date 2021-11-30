//#1
let pokupki = [
  { name: 'Apple', num: 5, status: 'Bought' },
  { name: 'Ball', num: 2, status: 'Unbought' },
  { name: 'Fish', num: 3, status: 'Unbought' },
  { name: 'Pencil', num: 7, status: 'Bought' },
]


//#1.1
// pokupki.sort(function (a, b) {
//     if (a.status < b.status) {
//         return -1;
//     };
//     if (a.status > b.status) {
//         return 1;
//     };
//     else {
//         return 0
//     };
// });
// document.write(pokupki);

//#1.2
// let pokupkiTwo = [
//   { name: 'Apple', num: 2, status: 'Bought' },
//   { name: 'Pencil', num: 7, status: 'Bought' },
//   { name: 'Meat', num: 7, status: 'Bought' },
// ]

// let result = pokupki.concat(pokupkiTwo);

// let res = Object.fromEntries(result.map(item => [item.name,  0]));
// result.forEach(item => { res[item.name] += item.num })
// console.log(res)


//#1.3
// pokupki.forEach((current) => {
//   current.status = 'Bought'
// }, 0);
// console.log(pokupki);


//#2
// const pokupki = [
//   { name: 'Apple', num: 5, price: 3 },
//   { name: 'Ball', num: 2, price: 5 },
//   { name: 'Fish', num: 3, price: 7 },
//   { name: 'Fish', num: 4, price: 7 },
// ]
// // #2.1
// document.write(`Чек:<br/><br/>`);
// pokupki.forEach(a => {

//     document.write((`---- Именование: ${a.name}, Кол-во: ${a.num} шт. : Цена за шт.${a.price} ----<br/> `));
// });

//#2.2
// let sum = pokupki.reduce((sum, pokupka) => {
//   return sum += (pokupka.num * pokupka.price);
// }, 0);
// console.log(sum);

//2.3
// let sum = pokupki.reduce((sum, pokupka) => {
//   return sum = (Math.max(pokupka.num * pokupka.price));
// }, 0);
// console.log(sum);

//2.4
// let middlePrice = pokupki[0].price * pokupki[0].num / pokupki[0].price;
// console.log(middlePrice);

//#3
// let styles = [
//   { name: 'color', value: 'green' },
//   { name: 'font-Size', value: '30px' },
// ]
// let styleString = styles.reduce((string, st) => {
//   string += st.name + ':' + st.value + ';';
//   return string
// }, '')
// console.log(styleString)

// function color(arr) {
//   document.write(`<p style="${styleString}"> У меня есть яблоко. Сколько будет + ещё одно? --- Будет однояблоко, сказал Вова и ушел учить Js. </p>`);
// };
// color(styleString);

//#4
// let rooms = [
//   { name: 'classOne', space: 16, subject: 'Math' },
//   { name: 'classTwo', space: 12, subject: 'Philo' },
//   { name: 'classThree', space: 18, subject: 'Chem' },
//   { name: 'classFour', space: 18, subject: 'Chem' },
// ]
//#4.1
// rooms.forEach(a => {
//   document.write(`${a.name}:   ${a.space}  --- ${a.subject}<br/>`);
// });

//#4.2
// let subj = rooms.filter((a) => {
//   return a.subject === 'Chem';
// }).map((a) => {
//   return a.name;
// })
// document.write(`В Chem: ${subj}`)

//#4.3
// function proper(roo, num, fac) {
//   roo.forEach(res => {
//     if
//       (res.space === num && res.subject === fac) {
//       document.write(`${res.name}  have ${res.space} spaces <br/>`)
//     }
//     else {
//       ('There is not any coincidences')
//     }
//   })
// }
// proper(rooms, 18, 'Chem');

//#4.4
// rooms.sort((a, b) => {
//   return a.space - b.space;
// });
// console.log(rooms);
//#4.5
// rooms.sort(function (a, b) {
//   let subjectA = a.subject.toLowerCase(), subjectB = b.subject.toLowerCase();
//   if (subjectA < subjectB) {
//     return -1;
//   };
//   if (subjectA > subjectB) {
//     return 1;
//   };
//   return 0;

// });
// console.log(rooms);
