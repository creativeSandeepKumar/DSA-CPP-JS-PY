const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function item1(){
    rl.question("Enter the value of a: \n", (a) => {
        rl.question("Enter the value of b:\n", (b) => {
            rl.question("Enter the value of c:\n", (op) => {
                a = parseInt(a);
                b = parseInt(b);
                switch (op) {
                    case '+':
                        console.log(a+b)
                        break;
                    case '-':
                        console.log(a - b)
                        break;
                    case '*':
                        console.log(a * b)
                        break;
                    case '/':
                        if (b !== 0) {
                            console.log(a / b);
                        } else {
                            console.log("Division by zero is not allowed.");
                        }
                        break;
                    case '%':
                        console.log(a % b)
                        break;
                
                    default:
                        console.log("Please Enter a valid opeation.")
                        break;
                }
                rl.close();
            })
        })
    })
}

function counting(){
    rl.question("Enter the number till where you want to count: \n", (num) => {
        num = parseInt(num);
        console.log();

        for(let i = 0; i <= num; i++){
            console.log(i);
        }
        rl.close();
    })
}

function isEven(a) {
    return (a & 1) === 0;
}



function EvenOdd(){
    rl.question("Enter the number which you want to check: \n", (num) => {
        num = parseInt(num);
        console.log();

        if(isEven(num)){
            console.log(" Number is Even");
            } else {
            console.log(" Number is Odd");
        }
        rl.close();
    })
}

function factorial(num){
    let fact = 1;

    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }

    return fact;
}

function nCr(){
    rl.question("Enter the number n: \n", (n) => {
        rl.question("Enter the number r: \n", (r) => {
            n = parseInt(n);
            r = parseInt(r);

            let num = factorial(n);
            let denom = factorial(r) * factorial(n - r);
            
            console.log("The value of NCR is : ", num/denom);
        })
    })
}


function Power(){
    rl.question("Enter the base number: \n", (num1) => {
        rl.question("Enter the poer number: \n", (num2) => {
            num1 = parseInt(num1);
            num2 = parseInt(num2);

            let answer = 1;

            for(let i = 1; i <= num2; i++){
                answer = answer * num1;
            }
            console.log("The value of Power is : ", answer);
        })
    })
}


function main(){
    console.log("\nSelect the items which you want to print from below list: \n");
    console.log();
    console.log("\n1. Calculator\n");
    console.log("\n2. Counting\n");
    console.log("\n3. Even or Odd\n");
    console.log("\n4. Check nCr\n");
    console.log("\n5. Check Power\n");

    rl.question("", (num_of_item)=> { 
        num_of_item = parseInt(num_of_item);
        console.log();
        
        switch (num_of_item) {
            case 1:
                item1();
                break;
            case 2:
                counting();
                break;
            case 3:
                EvenOdd();
                break;
            case 4:
                nCr();
                break;
            case 5:
                Power();
                break;
        
            default:
                console.log("\nInvalid Number, Please select a number from above given list :)\n");
                rl.close();
                break;
        }
    })
}

main();