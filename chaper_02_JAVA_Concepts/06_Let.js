let x = 5;
console.log(x);
x = 15;  // ✔ Reassignment

console.log(x);

// let - Block Scoped
let b = 20; // Global Scope
console.log(b);

// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let b = 30; // Local Scope
    console.log(b);
    if (true) {
        let b = 5;
        console.log(b); // 5
    }
    console.log("let ->", b);
}

// Calling of the function
printHello();

let g1 = 50;
let g2 = 70;
console.log(g1 + g2);
