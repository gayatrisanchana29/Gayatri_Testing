let a = 25;
let b = 55;
let c = 45;

if (a === b && b === c && c == a) {
    console.log("Equilateral");
}
else if (a === b && a !== c || b === c && b !== a || c === a && c != b) {

    console.log("isosceles");

}
else if (a !== b && b !== c && c !== a) {
    console.log("scalene");
}