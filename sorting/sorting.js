const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function selectionSort(){
    let arr = [20, 14, 56, 35, 46, 23];
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i]
        arr[i] = temp;
    }

    console.log("Sorted array is ", arr.join(" "));

}

function bubbleSort(){
    let arr = [34, 23, 17, 10, 56, 64];
    for(let i = 1; i < arr.length - 1; i++){
        let swapped = false;
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }
        }

        if(swapped == false){
            break;
        }
    }

    console.log("Here is sorted arr ", arr.join(" "));
}

function insetionSort(){
    let arr = [34, 23, 17, 10, 56, 64];
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i];
        let j = i - 1;
        for(; j >= 0; j--){
            if(arr[j] > temp){
                arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        arr[j+1] = temp;
    }
    console.log(" Sorted array is here ", arr.join(" "));
}



function main() {
  console.log("\nSelect the items which you want to print from below list: \n");
  console.log();
  console.log("\n1. Selection Sort\n");
  console.log("\n2. Bubble Sort\n");

  rl.question("", (num_of_item) => {
    num_of_item = parseInt(num_of_item);
    console.log();

    switch (num_of_item) {
      case 1:
        selectionSort();
        break;
      case 2:
        bubbleSort();
        break;
      case 3:
        insetionSort();
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
