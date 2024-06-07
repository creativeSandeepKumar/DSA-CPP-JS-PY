#include <iostream>
#include <math.h>
using namespace std;

void item1();
void item2();

int main() {
    int num_of_item;
    cout << endl;
    cout << "Select which Items do you want to print from below list" << endl;
    cout << endl;
    cout << "1. Binary To Decimal" << endl;
    cout << endl;
    cout << "2. Decimal To Binary" << endl;
    cout << endl;
    cin >> num_of_item;
    cout << endl;

    switch (num_of_item)
    {
    case 1:
        item1();
        break;
    case 2:
        item2();
        break;
    
    default:
    cout << "\nInvalid number, Please select a valid number from above list: )" <<endl;
    cout << endl;
        break;
    }

    return 0;
}

void item1(){
    int n;
    cout << "Enter the Binary Number"<<endl;
    cin >> n;

    int i = 0, ans = 0;
    while (n != 0)
    {
        int digit = n % 10;

        if(digit == 1){
            ans = ans + pow(2, i);
        }

        n = n/10;
        i++;
    }

    cout << ans << endl;
    
}

void item2(){
      int n;
    cout << "Enter the Decimal Number"<<endl;
    cin >> n;

    int i = 0, ans = 0;
    while (n != 0)
    {
        int bit = n & 1;

        ans = (bit * pow(10, i)) + ans;

        n = n >> 1;
        i++;

    }

    cout << " Answer " <<  ans << endl;
    
}