#include <iostream>
using namespace std;

void pattern1();
void pattern2();
void pattern3();
void pattern4();
void pattern5();
void pattern6();
void pattern7();
void pattern8();
void pattern9();
void pattern10();

int main() {
    int no_of_pattern;
    cout << endl;
    cout << "Select which pattern do you want to print from below list:\n";
    cout << endl;
    cout << "1. Square pattern." << endl;
    cout << endl;
    cout << "2. Number Square pattern." << endl;
    cout << endl;
    cout << "3.Another Number Square pattern." << endl;
    cout << endl;
    cout << "4.Inverted Number Square pattern." << endl;
    cout << endl;
    cout << "5.Counting Square pattern." << endl;
    cout << endl;
    cout << "6. 90 degree triangle pattern." << endl;
    cout << endl;
    cout << "7. 90 degree counting triangle pattern." << endl;
    cout << endl;
    cout << "8. 90 degree triangle inverted pattern." << endl;
    cout << endl;
    cout << "9. Alphabetical Square pattern." << endl;
    cout << endl;
    cout << "10. Alphabetical triangle pattern." << endl;
    cout << endl;
    cin >> no_of_pattern;
    cout << endl;

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
            cout << "\nInvalid Number, Please select a number from above given list :)" << endl;
            cout << endl;
            exit(0);
            break;
    }
    return 0;
}

void pattern1() {
    // square pattern
    cout << endl;
    cout << "You are going to see a square pattern:- " << endl;

    int side, i, j;
    cout << endl;
    cout << "Enter side of square:";
    cin >> side;
    cout << endl;

    for (i = 1; i <= side; i++) {
        for (j = 1; j <= side; j++) {
            cout << "*";
        }
        cout << endl;
    }
        cout << endl;

}

void pattern2() {
    cout << endl;
    cout << "You are going to see a number square pattern: -" << endl;

    int side, i, j;
    cout << endl;
    cout << "Enter side of square:";
    cout << endl;
    cin >> side;
    cout << endl;

    // for till side equal
    // nested for j till side
    // print i
    for(i = 1; i <= side; i++) {
        for(j = 1; j <= side; j++) {
            cout << i << " ";
        }
        cout << endl;
    }
    cout << endl;

}


void pattern3() {
    cout << endl;
    cout << "You are going to see another version of number square pattern: -" << endl;

    int side, i, j;
    cout << endl;
    cout << "Enter side of square:";
    cout << endl;
    cin >> side;
    cout << endl;

    for(i = 1; i <= side; i++) {
        for(j = 1; j <= side; j++) {
            cout << j << " ";
        }
    cout << endl;
    }
    cout << endl;
}


void pattern4() {
    cout << endl;
    cout << "You are going to see inverted number square pattern: -" << endl;

    int side, i, j;
    cout << endl;
    cout << "Enter side of square:";
    cout << endl;
    cin >> side;
    cout << endl;
    
    for(i = 1; i <= side; i++) {
        for(j = 1; j <= side; j++) {
            cout << (side - j + 1) << " ";
        }
        cout << endl;
    }
   
    cout << endl;
}


void pattern5() {
    cout << endl;
    cout << "You are going to see counting square pattern: -" << endl;

    int side, i, j, counter = 1;
    cout << endl;
    cout << "Enter side of square:";
    cout << endl;
    cin >> side;
    cout << endl;
    
    for(i = 1; i <= side; i++) {
        for(j = 1; j <= side; j++) {
            cout << counter << " ";
            counter++;
        }
        cout << endl;
    }
   
    cout << endl;
}


void pattern6() {
    cout << endl;
    cout << "You are going to see right angle triangle pattern: -" << endl;

    int height, i, j;
    char ch;
    cout << endl;
    cout << "Enter the height of triangle:";
    cout << endl;
    cin >> height;
    cout << endl;
    cout << "Enter the symbol of which you want to create triangle also:- ";
    cout << endl;
    cin >> ch;
    cout << endl;
    
    for(i = 1; i <= height; i++) {
        for(j = 1; j <= i; j++) {
            cout << ch << " ";
        }
        cout << endl;
    }
   
    cout << endl;
}


void pattern7() {
    cout << endl;
    cout << "You are going to see right angled counting triangle pattern: -" << endl;

    int height, i, j, counting = 1;
    char ch;
    cout << endl;
    cout << "Enter the height of triangle:";
    cout << endl;
    cin >> height;
    cout << endl;
    cout << "Enter the symbol of which you want to create triangle also:- ";
    cout << endl;
    cin >> ch;
    cout << endl;
    
    for(i = 1; i <= height; i++) {
        int value = i;
        for(j = 1; j <= i; j++) {
            cout << value << " ";
            value++;
        }
        cout << endl;
    }
   
    cout << endl;
}


void pattern8() {
    cout << endl;
    cout << "You are going to see right angled inverted triangle pattern: -" << endl;

    int height, i, j, val, k;
    char ch;
    cout << endl;
    cout << "Enter the height of triangle:";
    cout << endl;
    cin >> height;
    cout << endl;
    cout << "Enter the symbol of which you want to create triangle also:- ";
    cout << endl;
    cin >> ch;
    cout << endl;
    
    for(i = 1; i <= height; i++) {
        for(j = 1; j <= i; j++) {
            cout << i - j + 1 << " ";
        }
        cout << endl;
    }
   
    cout << endl;
}


void pattern9() {
    cout << endl;
    cout << "You are going to see alphabetical square pattern: -" << endl;

    int side, i, j;
    char ch = 'A';
    cout << endl;
    cout << "Enter the side of square:";
    cout << endl;
    cin >> side;
    cout << endl;
    
    for(i = 1; i <= side; i++) {
        for(j = 1; j <= side; j++) {
            cout << ch << " ";
        }
        cout << endl;
        ch++;
    }
   
    cout << endl;
}


void pattern10() {
    cout << endl;
    cout << "You are going to see alphabetical right angled pattern: -" << endl;

    int height, i, j;
    char ch = 'A';
    cout << endl;
    cout << "Enter the height of triangle:";
    cout << endl;
    cin >> height;
    cout << endl;
    
    for(i = 1; i <= height; i++) {
        for(j = 1; j <= i; j++) {
            cout << ch << " ";
        }
        cout << endl;
        ch++;
    }
   
    cout << endl;
}