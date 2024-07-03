const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function toLowerCase(){
    let ch = 'Q';
    let lowerchar;

    if(ch >= 'a' && ch <= 'z'){
        lowerchar = ch;
    } else {
        let temp = String.fromCharCode(ch.charCodeAt(0) - 'A'.charCodeAt(0) + 'a'.charCodeAt(0));
        lowerchar = temp;
    }

    console.log("Character is ", lowerchar);
}

function toLowerCase1(ch){
    let lowerchar;

    if(ch >= 'a' && ch <= 'z'){
        lowerchar = ch;
    } else {
        let temp = String.fromCharCode(ch.charCodeAt(0) - 'A'.charCodeAt(0) + 'a'.charCodeAt(0));
        lowerchar = temp;
    }

    return lowerchar;
}

function checkPalindrome(){
    let char = "Lalan";
    let s = 0;
    let e = char.length - 1;
    let checkbool = true;

    while(s <= e){
        if(toLowerCase1(char[s]) != toLowerCase1(char[e])){
            checkbool = false;
            break;
        } else{
            s++;
            e--;
        }
    }

    console.log("Palindrome or not: ", checkbool);
}


function getLength(){
    let name = "Hii-Ram";
    let count = 0;

    for(let i = 0; name[i] !== undefined; i++){
      count++;
    }

    console.log("Length of string is ", count);
}

function getMaxOccurance(){
    let name = "HiiHowAreYouToday";
    let arr = new Array(26).fill(0);

    for(let i = 0; i < name.length; i++){
        let ch = name[i].toLowerCase();
        let number = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if(number >= 0 && number < 26){
            arr[number]++;
        }
    }

    let maxi = -1, ans = 0;
    for(let i = 0; i < 26; i++){
        if(maxi < arr[i]){
            ans = i;
            maxi = arr[i];
        }
    }

    console.log("Maximum occurance is: ", String.fromCharCode('a'.charCodeAt(0) + ans));
}

function main() {
    console.log("\nSelect the items which you want to print from below list: \n");
    console.log();
    console.log("\n1. To Lower case\n");
    console.log("\n2. Check Palindrome\n");
    console.log("\n3. Check Length\n");
    console.log("\n4. Check Maximum occurance\n");
    rl.question("", function (num_of_item) {
        var selectedItem = parseInt(num_of_item);
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
                getLength();
                rl.close();
                break;
            case 4:
                getMaxOccurance();
                rl.close();
                break;
    
            default:
                console.log("\nInvalid Number, Please select a number from above given list :)\n");
                rl.close();
                break;
        }
    });
}
main();
