const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function item1() {
    rl.question("\nEnter the Binary Number\n", (binary) => {
        binary = parseInt(binary);
        let i = 0;
        let ans = 0;
        while(binary !== 0) {
            let digit = binary % 10;
            if(digit === 1) {
                ans += Math.pow(2, i);
            }

            binary = Math.floor(binary/10);
            i++;
        }
        console.log(ans);
        rl.close();
    })
}


function item2() {
    rl.question("\nEnter the Decimal Number\n", (decimal) => {
        decimal = parseInt(decimal);
        let i = 0;
        let ans = 0;
        while(decimal !== 0) {
           let bit = decimal & 1;

           ans = (bit * Math.pow(10, i)) + ans;

           decimal = decimal >> 1;
           i++;
        }
        console.log(ans);
        rl.close();
    })
}

function main(){
    console.log("\nSelect which item do you print from below list\n");
    console.log("\n1. Binary to decimal\n");
    console.log("\n2. Decimal to Bimary\n");

    rl.question("", (num_of_item) => {
        num_of_item = parseInt(num_of_item);
        console.log();
        switch (num_of_item) {
            case 1:
                item1();
                break;
            case 2:
                item2();
                break;
        
            default:
                console.log("\nInvalid Number, Please select a number from above given list: )\n");
                rl.close();
                break;
        }
    })
}

main();