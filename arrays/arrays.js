const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function item1() {
  rl.question("Enter the key", (key) => {
    key = parseInt(key);
    console.log();

    let arr = [1, 3, 5, -22, 22, 45, 67, 23, 10, -90];

    let found = false;

    for (let i = 0; i < key; i++) {
      if (arr[i] == key) {
        found = true;
        break;
      }
    }

    if (found) {
      console.log("Key is present");
    } else {
      console.log("Key is absent");
    }
  });
}

function getMin(num){
    let mini = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < num.length; i++ ){
        mini = Math.min(mini, num[i]);
    }

    return mini;
}


function getMax(num){
    let maxi = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < num.length; i++ ){
        maxi = Math.max(maxi, num[i]);
    }

    return maxi;
}

function item2(){
    rl.question("Enter the size of arr\n", (size) => {
        size = parseInt(size);
        let num = [];
        let count = 0;

    function askForNumer(){
        if(count < size) {
            rl.question(`Enter the ${count + 1}: \n`, (number) => {
             num.push(parseInt(number));
             count++;
             askForNumer();
            })
        } else {
            console.log("Maximum value is: ", getMax(num));
            console.log("Minimum value is: ", getMin(num));
            rl.close();
        }
    }
    askForNumer();
        
    })
}

function reverse(arr){
    let start = 0;
    let end = arr.length - 1;

   while(start <= end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;

   }
}

function printArr(arr){
    console.log(arr.join(" "));
}

function item3(){
    let arr = [1, 4, 7, 3, 5, 9, 2];
    let brr = [7, 3, 4, 2, 0]

    reverse(arr)
    reverse(brr)

    printArr(arr)
    printArr(brr)


}


function main() {
  console.log("\nSelect the items which you want to print from below list: \n");
  console.log();
  console.log("\n1. Linear search\n");
  console.log("\n2. MIN MAX\n");
  console.log("\n3. Reverse Array\n");

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
      case 3:
        item3();
        break;

      default:
        console.log(
          "\nInvalid Number, Please select a number from above given list :)\n"
        );
        rl.close();
        break;
    }
  });
  
  return 0;
}

main();
