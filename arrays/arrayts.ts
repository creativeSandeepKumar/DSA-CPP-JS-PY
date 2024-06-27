const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function reverseArr(arr: number[]): number[]{
  let s = 0;
  let e = arr.length - 1;

  while(s < e){
    [arr[s], arr[e]] = [arr[e], arr[s]];
    s++;
    e--;
  }
  return arr;
}


function findSumArr():void {
  let a: number[] = [9, 9, 9];
  let b: number[] = [1];

  let i: number = a.length-1;
  let j: number = b.length - 1;

  let ans: number[] = [];
  let carry: number = 0;

  while( i>= 0 && j >= 0){
    let val1: number = a[i];
    let val2: number = b[j];
    let sum: number = val1 + val2 + carry;

    carry = Math.floor(sum/10);
    sum = sum % 10;
    ans.push(sum);
    i--;
    j--;
  }


  while(i >= 0){
    let sum: number = a[i] + carry;
    carry = Math.floor(sum/10);
    sum = sum % 10;
    ans.push(sum);
    i--;
  }


  while(j >= 0){
    let sum: number = b[j] + carry;
    carry = Math.floor(sum/10);
    sum = sum % 10;
    ans.push(sum);
    j--;
  }


  while(carry !== 0){
    let sum: number = carry;
    carry = Math.floor(sum/10);
    sum = sum % 10;
    ans.push(sum);
    j--;
  }

  console.log('Before reverse', ans);
  let result: number[] = reverseArr(ans);
  console.log("Sum of array is: ", result.join( ));


}

function rotateArr():void{
    let nums: number[] = [1, 2, 3, 4, 5, 6, 7];
    let k: number = 3;
    let n: number = nums.length;

    let temp:number[] = [];

    for(let i: number = 0; i < n; i++){
      temp[(i + k) % n] = nums[i];
    }

    for(let i: number = 0; i< n; i++){
      nums[i] = temp[i];
    }

    console.log("Rotated Array", nums.join(" "));

}


function main(): void {
    console.log("\nSelect the items which you want to print from below list: \n");
    console.log();
    console.log("\n1. Find Sum of Array\n");
    console.log("\n2. Rotate Array\n");
  
    rl.question("", (num_of_item) => {
    let selectedItem: number = parseInt(num_of_item);
      console.log();
  
      switch (selectedItem) {
        case 1:
          findSumArr();
          rl.close();
          break;
        case 2:
          rotateArr();
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

  }
  
  main();