let year = 2022

if (year % 400 === 0) {

    console.log("Leap year1=",year)

}
else if (year % 100 === 0) {

    console.log("NonLeap year1=",year)
}
else if (year % 4 === 0) {

    console.log("Leap year2=",year)
}
else {
    console.log("NonLeap year2=",year)
}