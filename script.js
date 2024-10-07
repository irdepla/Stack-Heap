// Example 1

// const a = +prompt("Son kiriting:")

// function square(a) {
//    return a**2;
// }
// console.log(square(a));


// Example 2


// let a = +prompt("Son kiriting:")
// let b = +prompt("Son kiriting:")

// let sum = (a,b) => a + b;
// console.log(sum(a,b));


// Example 3

// function salom(ism = prompt("Ismingizni kiriting:") || "Do'stim") {
//     console.log(`Salom, ${ism}!`);
// }

// salom();


// Example 4

// function backwards(son) {
//     if (son < 1) return; 
//     console.log(son);    
//     backwards(son - 1);     
// }

// let foydalanuvchiSon = parseInt(prompt("Sonni kiriting:"));
// backwards(foydalanuvchiSon);



// Example  5


// let a = +prompt("Son kiriting:")
// let b = +prompt("Son kiriting:")


// function yigindi(a, b) {
//     return a + b;
// }

// function hisobla(a, b, callback) {
//     const natija = callback(a, b); 
//     console.log(`Yig'indi: ${natija}`); 
// }

// hisobla(a, b, yigindi); 


// Example 6


// function kubniHisoblovchi() {
//     return function(son) {
//         return son ** 3; 
//     };
// }

// const hisoblaKub = kubniHisoblovchi();

// const foydalanuvchiSon = parseFloat(prompt("Sonni kiriting:")); 

// const natija = hisoblaKub(foydalanuvchiSon); 
// console.log(`Natija: ${natija}`); 



// Example 7

// function kitobniChopEt(kitob) {
//     console.log(`Nomi: ${kitob.nomi}`);
//     console.log(`Muallifi: ${kitob.muallifi}`);
//     console.log(`Yili: ${kitob.yili}`);
// }

// const nomi = prompt("Kitobning nomini kiriting:");
// const muallifi = prompt("Muallifning ismini kiriting:");
// const yili = prompt("Yilni kiriting:");

// const kitob = {
//     nomi: nomi,
//     muallifi: muallifi,
//     yili: parseInt(yili) 
// };


// kitobniChopEt(kitob);


// Example 8

// function odamniYarat() {
//     const ism = prompt("Ismingizni kiriting:");
//     const familiya = prompt("Familiyangizni kiriting:");
//     const yoshi = prompt("Yosingizni kiriting:");
//     const kasbi = prompt("Kasbingizni kiriting:");

//     const odam = {
//         ism: ism,
//         familiya: familiya,
//         yoshi: parseInt(yoshi), 
//         kasbi: kasbi
//     };

//     return odam; 
// }

// const yangiOdam = odamniYarat();

// console.log(yangiOdam);


// Example 9

// function faktorialHisobla(son) {
//     let faktorial = 1; 

//     for (let i = 1; i <= son; i++) {
//         faktorial *= i; 
//     }

//     return faktorial; 
// }

// const foydalanuvchiSon = parseInt(prompt("Sonni kiriting:"));

// const natija = faktorialHisobla(foydalanuvchiSon);
// console.log(`Faktorial(${foydalanuvchiSon}) = ${natija}`);



// Example 10


// function check(son) {
//     if (son % 2 === 0) {
//         console.log(`${son} juft son.`);
//     } else {
//         console.log(`${son} toq son.`);
//     }
// }

// const foydalanuvchiSon = parseInt(prompt("Sonni kiriting:"));

// check(foydalanuvchiSon);


// Example 11 

// function findDivisors() {
//     const number = parseInt(prompt("Iltimos, bir son kiriting:"));

//     console.log(`${number} ning bo'luvchilari:`);
    
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             console.log(i);
//         }
//     }
// }

// findDivisors();


// Example 12

// function isPrime() {
//     const number = parseInt(prompt("Son kiriting:"));


//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             console.log("Tub emas.");
//             return;
//         }
//     }
    
//     console.log("Tub son.");
// }

// isPrime();


