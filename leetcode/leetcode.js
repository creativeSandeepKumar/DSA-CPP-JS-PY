const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

function item1(){
    console.log("this is busted");
}


function main(){
    console.log("\nSelect which item do you want to print from below list:\n");
    console.log("1. Bitwise operations");

    rl.question("", (num_of_items) => { 
        num_of_items = parseInt(num_of_items);
        console.log();

        switch (num_of_items) {
            case 1:
                item1();
                break;
        
            default:
                console.log("\nInvalid Number, Please select a number from above given list :)\n");
                rl.close();
                break;
        }
    } )
}

main();