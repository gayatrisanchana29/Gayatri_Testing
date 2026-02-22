console.log(a);
var a = "divya";
console.log(a);


// console.log(a);//TDZ - Temporal Dead Zone
// let a = "divya";
// console.log(a);

// // ---- Phase 1: Memory Creation ----
var a = undefined;
var b = undefined;

// ---- Phase 2: Execution ----
console.log(a); // undefined
var a = "Pramod";
console.log(a); // changed

// // Hoisting does NOT physically move your code.
// // It is a mental model to understand how the JS engine handles declarations during compilation.