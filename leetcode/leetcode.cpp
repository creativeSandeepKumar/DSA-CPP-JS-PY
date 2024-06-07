#include <iostream>
#include <limits.h>
using namespace std;

void item1();
void item2();
void item3();

int main() {
    int num_of_items;
    cout << endl;
    cout << "Select which items do you want to print from below list" << endl;
    cout << endl;
    cout << "1. Bitwise compliment of base 10 integer" << endl;
    cout << endl;
    cout << "2. Power of two checker" << endl;
    cout << endl;
    cout << "3. Reverse Integer" << endl;
    cout << endl;
    cin >> num_of_items;
    cout << endl;

    switch (num_of_items)
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
    
    default:
        cout << "\nInvalid Number, Please select a number from above given list : )" << endl;
        cout << endl;
        break;
    }

    return 0;
}

void item1(){
    int n;
    cout << "Enter the number" << endl;
    cout << endl;
    cin >> n;
    cout << endl;

    int m = n;
    int mask = 0;

    if(n == 0){
        cout << 1 << endl;
        return;
    }

    while (m!=0)
    {
        mask = (mask << 1) | 1;
        m = m >> 1;
    }
    
    int ans = (~n) & mask;

    cout << ans << endl;

    return;

}

void item2(){
        int n;
        cout << "Enter the number" << endl;
        cout << endl;
        cin >> n;
        cout << endl;
        int ans = 1;

        for(int i = 0; i <= 30; i++){
            if(ans == n){
                cout << true << endl;
                return;
            }

            if(ans < INT_MAX/2){
                ans = ans * 2;
            }
            cout << false << endl;
            return;
        } 
}


void item3(){
        int n;
        cout << "Enter the number" << endl;
        cout << endl;
        cin >> n;
        cout << endl;
        int ans = 0;

       while (n !=0)
       {
        int digit = n % 10;

        if((ans > INT_MAX/10) || (ans < INT_MIN/10)){
            cout << 0 << endl;
            return;    
        }

        ans = (ans * 10) + digit;
        n = n /10;
       }
       cout << ans << endl;
       return;
}