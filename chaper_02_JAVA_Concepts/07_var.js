
var a = 10;
console.log(a);
var a1;
var a = 20; // allowed
console.log(a);
a = 30;     // allowed
console.log(a);
console.log(a1); // undefined

// // Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}


// // Calling of the function 
printHello();


// // var also allows re-declaration:
var b = 10;
var b = 20; // No error, re-declaration is allowed
console.log(b + b);