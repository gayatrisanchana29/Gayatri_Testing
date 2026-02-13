function sum(a, b) {
    return a + b;
}

let result;
for (let i = 0; i <= 10000; i++) {
    result = sum(i, i + 1);
}

console.log("After calling 10000 times, the result is:" + result);

