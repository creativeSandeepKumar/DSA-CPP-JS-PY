var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function toLowerCase() {
    var ch = 'Q';
    var lowerchar;
    if (ch >= 'a' && ch <= 'z') {
        lowerchar = ch;
    }
    else {
        var temp = String.fromCharCode(ch.charCodeAt(0) - 'A'.charCodeAt(0) + 'a'.charCodeAt(0));
        lowerchar = temp;
    }
    console.log("Characte is ", lowerchar);
}
function toLowerCase1(ch) {
    var lowerchar;
    if (ch >= 'a' && ch <= 'z') {
        lowerchar = ch;
    }
    else {
        var temp = String.fromCharCode(ch.charCodeAt(0) - 'A'.charCodeAt(0) + 'a'.charCodeAt(0));
        lowerchar = temp;
    }
    return lowerchar;
}
function checkPalindrome() {
    var ch = "Ram";
    var s = 0;
    var e = ch.length - 1;
    var checkbool = true;
    while (s <= e) {
        if (toLowerCase1(ch[s]) != toLowerCase1(ch[e])) {
            checkbool = false;
            break;
        }
        else {
            s++;
            e--;
        }
    }
    console.log("Palindrome or Not: ", checkbool);
}
function reverseChar() {
    var str = "INDIA";
    var ch = str.split('');
    var s = 0;
    var e = ch.length - 1;
    while (s < e) {
        var temp = ch[s];
        ch[s] = ch[e];
        ch[e] = temp;
        s++;
        e--;
    }
    console.log("Reversed char is: ", ch.join(""));
}
function getLength() {
    var name = "Hii-Ram";
    var count = 0;
    for (var i = 0; name[i] !== undefined; i++) {
        count++;
    }
    console.log("Length of string is ", count);
}
function getMaxOccurance() {
    var name = "HiiHowAreYouToday";
    var arr = new Array(26).fill(0);
    for (var i = 0; i < name.length; i++) {
        var ch = name[i].toLowerCase();
        var number = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if (number >= 0 && number < 26) {
            arr[number]++;
        }
    }
    var maxi = -1, ans = 0;
    for (var i = 0; i < 26; i++) {
        if (maxi < arr[i]) {
            ans = i;
            maxi = arr[i];
        }
    }
    console.log("Maximum occurance is: ", String.fromCharCode('a'.charCodeAt(0) + ans));
}
function main() {
    console.log("\nSelect the items which you want to print from below list: \n");
    console.log();
    console.log("\n1. Find Sum of Array\n");
    console.log("\n2. Check Palindrome\n");
    console.log("\n3. Reverse Char\n");
    console.log("\n4. Get Length\n");
    console.log("\n5. Get Max occurance\n");
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
                console.log("\nInvalid Number, Please select a number from above given list :)\n");
                rl.close();
                break;
        }
    });
}
main();
