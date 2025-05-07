
// problem1 Feet to inches
function feetToInches(feet){
    return feet*12;
}
let feet=5;
let inches=(feetToInches(feet))
console.log(`${inches} inches in ${feet} feet`);

// problem2 Math Question

function checkMathProblem(a,b){
    answer=prompt("How much is 247 + 129?")
    if (answer ==( a + b)){
        console.log("Congradulations, Your are correct.");
    }else if (answer != (a+b)){
        console.log(answer);
    }
}
checkMathProblem(247,129);

// problem 3 max of two values
function maximumOfTwoValues(a,b){
    return Math.max(a,b)
}
let a=5;
let b=2;
let maxnum=maximumOfTwoValues(a,b);
console.log(maxnum + " is the max number");
// problem 4 distance

function time_Seconds(time){
    let fallingDistance=Math.pow(time, 2);
    distanceMeters=1/2 * 9.8 *fallingDistance ;
    console.log(distanceMeters +" meters");
    return distanceMeters;
}
time_Seconds(10);

// problem5 test average and grade
function calAverage(n1,n2,n3,n4,n5) {
    let nums = [n1, n2, n3, n4, n5];
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    let average = sum / nums.length;
    let gradeAverage=(average);
    console.log("Grade is "+ average);
        return average;
}
calAverage(100,60,84,73,88);

determineGrade(81);
function determineGrade(grade) {
    for (i = 0; i <= 1; i++)
    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 80) {
        console.log("B");
    } else if (grade >= 70) {
        console.log("C");
    } else if (grade >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}
    
     // problem 6 odd even 
    function EvenOdd(number){
        if (number % 2 ==0){
            console.log("number is even")
        }else {
            console.log("number is odd");
        }
        }
   EvenOdd(20) 
   
