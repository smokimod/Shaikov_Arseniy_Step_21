let num = +prompt('Vvedite chislo');
let num2 = +prompt('Vvedite stepen');
let num3 = 1;
let i = 1;
while (i <= num2) {
    num3 *= num;
    i++;
}
document.write(num3);