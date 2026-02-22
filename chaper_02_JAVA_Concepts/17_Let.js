let x = 10;
console.log(x);
if (true) {
    console.log(x);//TDZ scope
    let x = 20;
}