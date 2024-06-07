const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pattern1() {
    // Function to print square pattern
    console.log("\nYou are going to see a square pattern:-");

    rl.question("\nEnter side of square: ", (side) => {
        side = parseInt(side);
        console.log();

        for (let i = 1; i <= side; i++) {
            let row = "";
            for (let j = 1; j <= side; j++) {
                row += "*";
            }
            console.log(row);
        }
        console.log();
        rl.close();
    });
}


function pattern2() {
    // Function to print square pattern
    console.log("\nYou are going to see a number square pattern:-");

    rl.question("\nEnter side of square: ", (side) => {
        side = parseInt(side);
        console.log();

        for (let i = 1; i <= side; i++) {
            let row = "";
            for (let j = 1; j <= side; j++) {
                row += i;
            }
            console.log(row);
        }
        console.log();
        rl.close();
    });
}


function pattern3() {
    // Function to print square pattern
    console.log("\nYou are going to see another number square pattern:-");

    rl.question("\nEnter side of square: ", (side) => {
        side = parseInt(side);
        console.log();

      for(let i = 1; i <= side; i++) {
        let row = "";
        for(let j = 1; j <= side; j++) {
            row += j;
        }
        console.log(row);
      }
        console.log();
        rl.close();
    });
}


function pattern4() {
    // Function to print square pattern
    console.log("\nYou are going to inverted number square pattern:-");

    rl.question("\nEnter side of square: ", (side) => {
        side = parseInt(side);
        console.log();

      for(let i = 1; i <= side; i++) {
        let row = "";
        for(let j = 1; j <= side; j++) {
            row += (side - j + 1);
        }
        console.log(row);
      }
        console.log();
        rl.close();
    });
}


function pattern5() {
    // Function to print square pattern
    console.log("\nYou are going to counting square pattern:-");

    rl.question("\nEnter side of square: ", (side) => {
        side = parseInt(side);
        console.log();

    let counter = 1;
      for(let i = 1; i <= side; i++) {
        let row = " ";
        for(let j = 1; j <= side; j++) {
            row += counter+" ";
            counter++;
        }
        console.log(row);
      }
        console.log();
        rl.close();
    });
}


function pattern6() {
    // Function to print square pattern
    console.log("\nYou are going to see right angle triangle pattern:-");

    rl.question("\nEnter height of triangle: ", (height) => {
        rl.question("Enter the symbol with which you want to create the triangle: ", (ch) => {
        height = parseInt(height);
        console.log();

      for(let i = 1; i <= height; i++) {
        let row = " ";
        for(let j = 1; j <= i; j++) {
            row += ch +" ";
        }
        console.log(row);
      }
        console.log();
        rl.close();
    });
    });
}


function pattern7() {
    // Function to print square pattern
    console.log("\nYou are going to see counting right angle triangle pattern:-");

    rl.question("\nEnter height of triangle: ", (height) => {
        rl.question("Enter the symbol with which you want to create the triangle: ", (ch) => {
        height = parseInt(height);
        console.log();

      for(let i = 1; i <= height; i++) {
        let row = " ";
        let value = i;
        for(let j = 1; j <= i; j++) {
            row += value +" ";
            value++;
        }
        console.log(row);
      }
        console.log();
        rl.close();
    });
    });
}


function pattern8() {
    // Function to print square pattern
    console.log("\nYou are going to see inverted right angle triangle pattern:-");

    rl.question("\nEnter height of triangle: ", (height) => {
        rl.question("Enter the symbol with which you want to create the triangle: ", (ch) => {
        height = parseInt(height);
        console.log();

      for(let i = 1; i <= height; i++) {
        let row = " ";
        for(let j = 1; j <= i; j++) {
            row += i - j + 1 +" ";
        }
        console.log(row);
      }
        console.log();
        rl.close();
    });
    });
}


function pattern9() {
    // Function to print square pattern
    console.log("\nYou are going to see alphabetical square pattern:-");

    rl.question("\nEnter side of square: ", (side) => {
       
        side = parseInt(side);
        let char = 'A'.charCodeAt(0);
        console.log();

      for(let i = 1; i <= side; i++) {
        let row = " ";
        for(let j = 1; j <= side; j++) {
            row += String.fromCharCode(char) + " ";
        }
        console.log(row);
        char++;
      }
        console.log();
        rl.close();

    });
}


function pattern10() {
    // Function to print square pattern
    console.log("\nYou are going to see alphabetical triangle pattern:-");

    rl.question("\nEnter height of triangle: ", (height) => {
       
        height = parseInt(height);
        let char = 'A'.charCodeAt(0);
        console.log();

      for(let i = 1; i <= height; i++) {
        let row = " ";
        for(let j = 1; j <= i; j++) {
            row += String.fromCharCode(char) + " ";
        }
        console.log(row);
        char++;
      }
        console.log();
        rl.close();

    });
}


function main() {
    console.log("\nSelect which pattern do you want to print from below list:\n");
    console.log("1. Square pattern.\n");
    console.log("2. Number Square pattern.\n");
    console.log("3. Another Number Square pattern.\n");
    console.log("4. Inverted Number Square pattern.\n");
    console.log("5. Counting Square pattern.\n");
    console.log("6. 90 degre right angle triangle pattern.\n");
    console.log("7. 90 degre counting right angle triangle pattern.\n");
    console.log("8. 90 degre inverted right angle triangle pattern.\n");
    console.log("9. Alphabeticla square pattern.\n");
    console.log("10. Alphabeticla Triangle pattern.\n");

    rl.question("", (no_of_pattern) => {
        no_of_pattern = parseInt(no_of_pattern);
        console.log();

        switch (no_of_pattern) {
            case 1:
                pattern1();
                break;
            case 2:
                pattern2();
                break;
            case 3:
                pattern3();
                break;
            case 4:
                pattern4();
                break;
            case 5:
                pattern5();
                break;
            case 6:
                pattern6();
                break;
            case 7:
                pattern7();
                break;
            case 8:
                pattern8();
                break;
            case 9:
                pattern9();
                break;
            case 10:
                pattern10();
                break;
            default:
                console.log("\nInvalid Number, Please select a number from above given list :)\n");
                rl.close();
                break;
        }
    });
}

main();
