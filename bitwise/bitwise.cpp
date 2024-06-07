#include <iostream>
using namespace std;

void item1();
void item2();
void item3();
void item4();
void item5();
void item6();
void item7();


int main() {

    int no_of_item;
    cout << endl;
    cout << "Select which items do you want to print from below list" << endl;
    cout << endl;
    cout << "1. Bitwise Operations" << endl;
    cout << endl;
    cout << "2. Continue statement" << endl;
    cout << endl;
    cout << "3. Fibnachchi series" << endl;
    cout << endl;
    cout << "4. Prime Number" << endl;
    cout << endl;
    cout << "5. Sum of N numbers" << endl;
    cout << endl;
    cout << "6. Check Number of Bits" << endl;
    cout << endl;
    cout << "7. Subtract Product and Sum" << endl;
    cout << endl;
    cin >> no_of_item;
    cout << endl;

    switch (no_of_item)
    {
    case 1:
        item1();
        break;
    case 2:
        item2();
        break;
    case 3:
        item3();
        break;
    case 4:
        item4();
        break;
    case 5:
        item5();
        break;
    
    case 6:
        item6();
        break;
    case 7:
        item7();
        break;
    
    default:
        cout << "\nInvalid Number, Please select a number from above given list : )" << endl;
        cout << endl;
        break;
    }


	return 0;
}

void item1() {
    int a = 4;
    int b = 6;

    cout << " a&b " << (a&b) << endl;
    cout << " a|b " << (a|b) << endl;
    cout << " ~a " << ~a << endl;
    cout << " a^b " << (a^b) << endl;

    cout << (17>>1) << endl;
    cout << (17>>2) << endl;
    cout << (19<<1) << endl;
    cout << (21<<1) << endl;

    int i = 7;

    cout << (++i) <<endl;
    cout << (i++) <<endl;
    cout << (i--) <<endl;
    cout << (--i) <<endl;

}

void item2() {
    for(int i = 0; i < 5; i++) {
        cout<< " HI " << endl;
        cout<< " Hey " << endl;
        continue;

        cout << "Reply toh karde" << endl;
    }
}

void item3() {
    int n = 10;

    int a = 0;
    int b = 1;
    cout << a << " " << b << " ";
    for(int i = 1; i <= n; i++ ) {
        int nextNumber = a + b;
        cout << nextNumber << " ";

        a = b;
        b = nextNumber;
    }
}

void item4() {
    int n;

    cout << " Enter the value of n" <<endl;
    cin >> n;

    bool isPrime = 1;

    for(int i =2; i < n; i++) {
        if(n%i == 0) {
            isPrime = 0;
            break;
        }
    }

    if(isPrime == 0) {
        cout << " Not a Prime Number" << endl;
    } else {
        cout << " Is a Prime Number" << endl;

    }
}

void item5(){
    int n;
    cout << " Enter the value of n" << endl;
    cin >> n;

    int sum = 0;

    for(int i = 1; i <= n; i++) {
        sum += i;
    }

    cout << sum << endl;
}


void item6(){
    int n;
    cout << " Enter the value of n" << endl;
    cin >> n;

    int count = 0;
    while(n != 0) {
        if(n&1) {
            count++;
        }
        n = n >> 1;
    }
    cout << count << endl;
}


void item7(){
    int n;
    cout << " Enter the value of n" << endl;
    cin >> n;
    int prod = 1;
    int sum = 0;

    while(n != 0) {
        int digit = n%10;
        prod = prod * digit;
        sum = sum + digit;
        n = n/10;
    }
    int answer = prod - sum;
    cout << answer << endl;
}

