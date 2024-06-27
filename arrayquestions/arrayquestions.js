const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverse(arr){
    let s = 0;
    let e = arr.length - 1;

    while(s <= e){
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--;
    }

    return arr;
}

function reverseArray(){
    let arr = [];
    arr.push(11);
    arr.push(7);
    arr.push(4);
    arr.push(1);
    arr.push(12);

    console.log("First check", arr)
    let ans = reverse(arr);
    console.log("This is reverse", ans);
}

function mergeSortedArr(){
    let arr1 = [1, 3, 5, 7, 9];
    let arr2 = [2, 4, 6];
    let arr = [];

    let i = 0;
    let j = 0;
    let k = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr[k++] = arr1[i++];
        } else {
            arr[k++] = arr2[j++];
        }
    }

    while(i < arr1.length){
        arr[k++] = arr1[i++];
    }

    while(j < arr2.length){
        arr[k++] = arr2[j++];
    }

    console.log("here is merged ARRAY", arr.join(" "));

}

function main() {
    console.log("\nSelect the items which you want to print from below list: \n");
    console.log();
    console.log("\n1. Reverse Array\n");
    console.log("\n2. Merged Sorted Array\n");
  
    rl.question("", (num_of_item) => {
      num_of_item = parseInt(num_of_item);
      console.log();
  
      switch (num_of_item) {
        case 1:
          reverseArray();
          rl.close();
          break;
        case 2:
          mergeSortedArr();
          rl.close();
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
  