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

printFib(10);