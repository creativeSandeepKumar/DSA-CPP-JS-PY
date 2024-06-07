// import readline from "readline";
const readline = require("readline");
// let n = parseInt(prompt("Enter a number:"));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function safeWrite(value) {
    process.stdout.write(String(value)); // Convert any value to string and print
}

rl.question("Enter a number:", (answer) => {
    let n = parseInt(answer);

    let i = 1;

     /*
    pattern
    ***
    ***
    ***
    */

    // while(i <= n) {
    //     let j = 1;
    //     while(j <= n) {
    //         process.stdout.write("*");
    //         j = j + 1;
    //     }
    //     console.log();
    //     i = i + 1;
    // }

    /*
    pattern
    111
    222
    333
    */

    while(i <= n) {
        let j = 1;
        while(j <= n) {
            safeWrite(i);
            j = j + 1;
        }
        console.log();
        i = i + 1;
    }
    rl.close();
})


