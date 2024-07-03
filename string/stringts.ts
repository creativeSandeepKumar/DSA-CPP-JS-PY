const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


function toLowerCase(): void {
  let ch: string = 'Q';
  let lowerchar: string;

  if(ch >= 'a' && ch <= 'z'){
    lowerchar = ch
  } else {
    let temp = String.fromCharCode(ch.charCodeAt(0) - 'A'.charCodeAt(0) + 'a'.charCodeAt(0));
    lowerchar = temp;
  }

  console.log("Characte is ", lowerchar)
}


function toLowerCase1(ch: string): string {

  let lowerchar: string;

  if(ch >= 'a' && ch <= 'z'){
    lowerchar = ch
  } else {
    let temp = String.fromCharCode(ch.charCodeAt(0) - 'A'.charCodeAt(0) + 'a'.charCodeAt(0));
    lowerchar = temp;
  }

  return lowerchar;
}

function checkPalindrome(): void{
    let ch: string = "Ram";
    let s:number = 0;
    let e:number = ch.length - 1;
    let checkbool:boolean = true;

    while(s <= e){
      if(toLowerCase1(ch[s]) != toLowerCase1(ch[e])){
        checkbool = false;
        break;
      } else {
        s++;
        e--;
      }
    }

   console.log("Palindrome or Not: ", checkbool);

}

function reverseChar(): void {
  let str: string = "INDIA";
  let ch: string[] = str.split('');
  let s: number = 0;
  let e: number = ch.length - 1;

  while (s < e) {
      let temp: string = ch[s];
      ch[s] = ch[e];
      ch[e] = temp;
      s++;
      e--;
  }

  console.log("Reversed char is: ", ch.join(""));
}

function getLength(): void{
    let name: string = "Hii-Ram";
    let count:number = 0;

    for(let i:number = 0; name[i] !== undefined; i++){
      count++;
    }

    console.log("Length of string is ", count);
}

function getMaxOccurance(){
  let name: string = "HiiHowAreYouToday";
  let arr: number[] = new Array(26).fill(0); 

  for(let i:number = 0; i < name.length; i++){
    let ch:string = name[i].toLowerCase()
    let number:number = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    if(number >= 0 && number < 26){
      arr[number]++;
    }
  }

  let maxi:number = -1, ans:number = 0;
  for(let i:number = 0; i < 26; i++){
    if(maxi < arr[i]){
      ans = i;
      maxi = arr[i];
    }
  }

  console.log("Maximum occurance is: ", String.fromCharCode('a'.charCodeAt(0) + ans));
}


function main(): void {
    console.log("\nSelect the items which you want to print from below list: \n");
    console.log();
    console.log("\n1. Find Sum of Array\n");
    console.log("\n2. Check Palindrome\n");
    console.log("\n3. Reverse Char\n");
    console.log("\n4. Get Length\n");
    console.log("\n5. Get Max occurance\n");
  
    rl.question("", (num_of_item) => {
    let selectedItem: number = parseInt(num_of_item);
      console.log();
  
      switch (selectedItem) {
        case 1:
          toLowerCase();
          rl.close();
          break;
        case 2:
          checkPalindrome();
          rl.close();
          break;
        case 3:
          reverseChar();
          rl.close();
          break;
        case 4:
          getLength();
          rl.close();
          break;
        case 5:
          getMaxOccurance();
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