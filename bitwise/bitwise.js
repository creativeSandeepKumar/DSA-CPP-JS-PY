const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function item1() {
    let a = 4;
    let b = 6;

    console.log(" a&b ", a&b);
    console.log(" a|b ", a|b);
    console.log(" ~a ", ~a);
    console.log(" a^b ", a^b);

    console.log(17>>1);
    console.log(17>>2);
    console.log(19<<1);
    console.log(21<<2);

    let i = 7;

    console.log(++i);
    console.log(i++);
    console.log(i--);
    console.log(--i);

}

function item2() {
    for(let i = 0; i < 5; i++) {
        console.log(" HI");
        console.log(" Hey");
        continue;
        console.log("Reply to karde");
    }
}

function item3() {
    let n = 10;
    let a = 0;
    let b = 1;
    console.log(a + "" +  b + " ");
    for(let i = 1; i <= n; i++) {
        let nextNumber = a + b;
        console.log(nextNumber + " ");
        a = b;
        b = nextNumber;
    }
}


function item4() {
    let n;
    rl.question("Enter the value of n\n", (number) => {
        number = parseInt(number);
        console.log();

        let isPrime = true;

        for(let i = 2; i < number; i++) {
            if(number%i == 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime == false) {
            console.log(" Not a prime Number");
        } else {
            console.log(" Is s Prime Number ");
        }
        rl.close();
})
}

function item5(){
    rl.question("Enter the value of n\n", (number) => {
        number = parseInt(number);
        console.log();

        let sum = 0;

        for(let i = 1; i <= number; i++){
            sum += i;
        }

        console.log(sum);
        rl.close();
    })
}

function item6() {
    rl.question("Enter the value of n\n", (number) => {
       
        let count = 0;

        while(number&1){
            count++;
        }
        number = number >> 1;

        console.log(count);
        rl.close();
    })
}

function item7() {
    rl.question("Enter the value of n\n", (number) => {
       
        
        let prod = 1;
        let sum = 1;

        while(number != 0){
            let digit = number % 10;
            prod = prod * digit;
            sum = sum + digit;
            number = number/10;

        }
        let answer = prod - sum;

        console.log(answer);
        rl.close();
    })
}


function main() {
    console.log("\nSelect which item do you want to print from below list:\n");
    console.log("1. Bitwise operations");
    console.log("2. Continue statement");
    console.log("3. Fibnacchi series");
    console.log("4. Check prime Number");
    console.log("5. Sum of N Numbers");
    console.log("6. Check Number of One Bits");
    console.log("7. Product sum and subtract");

    rl.question("", (no_of_item) => {
        no_of_item = parseInt(no_of_item);
        console.log();

        switch (no_of_item) {
            case 1:
                item1();
                break;
            case 2:
                item2();
                break;
            case 3:
                item3();
                break;
        
            case 4:
                item4();
                break;
            case 5:
                item5();
                break;
            case 6:
                item6();
                break;
            case 7:
                item7();
                break;
        
            default:
                console.log("\nInvalid Number, Please select a number from above given list :)\n");
                rl.close();
                break;
        }
    })
}

main();