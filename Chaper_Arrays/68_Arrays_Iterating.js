
// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for (let a of tests) {
    console.log(a) // value
}
console.log("----");

// forEach (no return value)
tests.forEach((a, index) => {

    console.log(`${index}: ${a}`);
});

console.log("----");
// entries() — index + value

for (let [i, a] of tests.entries()) {
    console.log(i, a);
}

console.log("----");


console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];


for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}