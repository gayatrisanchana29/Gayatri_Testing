let x = "global";
if (true) {

    // console.log(x);// local variable TDZ
    let x = "local";
    console.log(x);
}
console.log(x);
