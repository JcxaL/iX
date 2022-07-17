function checkPerSquare(number) {
    if (Math.pow((Math.sqrt(number)), 2) == number) {
        console.log(number+" is a perfect square");
        return;
    }
    console.log(number+" is not a perfect square");
}

function printFib(count){
    console.log(0);
    console.log(1);
    fib(0, 1, count-2);
}

function fib(num1, num2, count){
    if (count == 0) return; //base case
    
    let num3 = num1 + num2;
    console.log(num3);
    fib(num2, num3, --count);
}

checkPerSquare(5);
checkPerSquare(4);

printFib(10);