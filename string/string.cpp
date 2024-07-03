#include <iostream>
#include <math.h>
#include <climits>
#include <algorithm> 
#include <vector> 
#include <string> 
#include <cctype> 
using namespace std;


void toLowerCase();
void checkPalindrome();
void reverseChar();
void getLength();
void getMaxOccCharacter();

int main()
{
    int num_of_item;
    cout << endl;
    cout << "Select the items which you want to execute from below list: " << endl;
    cout << endl;
    cout << "1. Convert to lowercase" << endl;
    cout << endl;
    cout << endl;
    cout << "2. Check Palindrome" << endl;
    cout << endl;
    cout << endl;
    cout << "3. Reverse Char" << endl;
    cout << endl;
    cout << endl;
    cout << "4. Get Length of char" << endl;
    cout << endl;
    cout << endl;
    cout << "5. Get getMaxOccCharacter" << endl;
    cout << endl;
    cin >> num_of_item;
    cout << endl;

    switch (num_of_item)
    {
    case 1:
        toLowerCase();
        break;
    case 2:
        checkPalindrome();
        break;
    case 3:
        reverseChar();
        break;
    case 4:
        getLength();
        break;
    case 5:
        getMaxOccCharacter();
        break;

    default:
        cout << "\nInvalid Number, Please select a number from above given list : )" << endl;
        cout << endl;
        exit(0);
        break;
    }

    return 0;
}

void toLowerCase(){
    char ch = 'Q';
    char lowercase;

    if(ch >= 'a' && ch <= 'z'){
        lowercase = ch;
    } else {
        char temp = ch - 'A' + 'a';
        lowercase = temp;
    }
    cout <<"CHARACTER is " <<  lowercase << endl;
}

char toLowerCase1(char ch){
    if(ch >= 'a' && ch <= 'z'){
        return ch;
    } else {
        char temp = ch - 'A' + 'a';
        return temp;
    }
}

void checkPalindrome(){
    char a[] = "Ram";
    int s = 0;
    int e = sizeof(a) - 1;
    bool checkbool = true;

    while(s <= e){
        if(toLowerCase1(a[s]) != toLowerCase1(a[e])){
            checkbool = false;
            break;
        } else{
             s++;
             e--;
        }
    }

    cout << "Palindrome or Not: " << checkbool <<endl;
}

void reverseChar(){
     char ch[] = "INDIA";
     int s = 0;
     int e = sizeof(ch) - 1;

     while(s < e){
        swap(ch[s++], ch[e--]);
     }
    
    cout << "Reversed String is: ";
     for (int i=0 ;i<sizeof(ch);i++){
        cout << ch[i] << endl;
     }
}


void getLength(){
    int count = 0;
    char name[] = "Hii-Ram";
    for(int i = 0; name[i] != '\0'; i++){
        count++;
    }
    cout << "Length of Char " << count<< endl;

}

void getMaxOccCharacter(){
    string name = "HiiHowAreYouLoveyou";
    int arr[26] = {0};

    // Counting frequency of each character
    for(int i = 0; i < name.length(); i++){
        char ch = tolower(name[i]); // Convert to lowercase
        int number = ch - 'a'; // Calculate the index
        if(number >= 0 && number < 26) { // Check if it's a valid lowercase letter
            arr[number]++;
        }
    }

    // Find the character with maximum occurrence
    int maxi = -1, ans = 0;
    for(int i = 0; i < 26; i++){
        if(maxi < arr[i]){
            ans = i;
            maxi = arr[i];
        }
    }

    cout << "Maximum occurrence is: " << (char)('a' + ans) << endl;
}