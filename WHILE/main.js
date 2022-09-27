// 1-ci sual
// WHILE

// const myArr = ['cup', 'plate', 'spoon', 'knife', 'fork']
// let counter = 0
// while (counter<myArr.length) {
// console.log(myArr[counter]);
// counter++;

// }

// -------------


// 2-ci sual

// const myArr = ['xiyar', 'pomidor', 'Sogan', 'yerkoku', 'sarimsaq', 'semeni']

// let counter = 0;

// while (counter < myArr.length) {
//     const el = myArr[counter]
//     if (el[0].toLowerCase() === "s") {
//         console.log(el);
//     }
//     counter++

// }
// -------------------------

// 3-cu sual

// let counter=1
// let result=0
// while (counter<101) {
// result+=counter
//     counter++
// }
// console.log(result);


// ------------

// 4-cu sual

// let counter = 0

// const myArr = ['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']

// while (counter < myArr.length) {

//     const el = myArr[counter]
//     counter++
//     if (el.length !== 5) {
//         continue;
//     }
//     console.log(el[el.length - 1]);
// }
// ---------------------

// 5-ci sual

// let counter = 100000

// while (counter > 0) {
//     if (counter % 9999 === 0) {
//         console.log(counter);
//         break;
//     }
//     counter--

// }

// 6-ci sual

const sentence = 'Men her gun Javascript oyrenirem'
const saitler = "aıoueəiöü"

let result = ""
let counter = 0

while (counter < sentence.length) {
    const char = sentence[counter]

    if (!saitler.includes(char)) {
        result += char

    
    }
counter++
}

console.log(result);