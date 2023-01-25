//console.log(countries)
//alert('Open the console and check if the countries has been loaded')

/*
4. Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######

    */

for (let index = 0; index < 10; index++) {
    let str = '';
    for (let i = 0; i < index; i++) {
        str += `# ` ;
    }
    console.log(str);
}

/*
Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${i} = ${i*i}`);
}

/*
Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/

console.log('i','     ','i²','     ','i³');
for (let i = 0; i <= 10; i++) {
    console.log(i,'     ',`${i**2}`,'     ',`${i**3}`);
}

/*
Use for loop to iterate from 0 to 100 and print only even numbers

Use for loop to iterate from 0 to 100 and print only odd numbers

Use for loop to iterate from 0 to 100 and print only prime numbers

Use for loop to iterate from 0 to 100 and print the sum of all numbers.
*/

let pares = [];
let primos = [];
let impares = [];
let soma = 0;
for (let i = 0; i <= 100; i++) {
    soma += i;
    if (i%2 === 0) {
        pares.push(i);
    }else {
        impares.push(i)
    }
    let contador = 0;
    for (let aux = 1; aux <= i; aux++) {
        if (i%aux==0) {
            contador++
        }
    }
    if (contador == 2) {
        primos.push(i)
    }
}

console.log(`Os números pares são ${pares}`);
console.log(`Os números ímpares são ${impares}`);
console.log(`Os números primos são ${primos}`);
console.log(`A soma dos números é ${soma}`);

