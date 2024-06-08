#include <iostream>
using namespace std;

void item1();
void counting();
void EvenOdd();
void NCR();
void Power();
void IsPrime();

int main()
{
    int num_of_item;
    cout << endl;
    cout << "Select the items which you want to print from below list: " << endl;
    cout << endl;
    cout << "1. Calculator" << endl;
    cout << endl;
    cout << "2. Counting" << endl;
    cout << endl;
    cout << "3. Even Or Odd" << endl;
    cout << endl;
    cout << "4. Check nCr" << endl;
    cout << endl;
    cout << "5. Calculate Power" << endl;
    cout << endl;
    cout << "6. Check Prime or Not" << endl;
    cout << endl;
    cin >> num_of_item;
    cout << endl;

    switch (num_of_item)
    {
    case 1:
        item1();
        break;
    case 2:
        counting();
        break;
    case 3:
        EvenOdd();
        break;
    case 4:
        NCR();
        break;
    case 5:
        Power();
        break;
    case 6:
        IsPrime();
        break;

    default:
        cout << "\nInvalid Number, Please select a number from above given list : )" << endl;
        cout << endl;
        exit(0);
        break;
    }

    return 0;
}

void item1()
{
    int a, b;

    cout << " Enter the value of a " << endl;
    cin >> a;

    cout << " Enter the value of b " << endl;
    cin >> b;

    char op;
    cout << " Enter the operation you want to perform " << endl;
    cin >> op;

    switch (op)
    {
    case '+':
        cout << (a + b) << endl;
        break;
    case '-':
        cout << (a - b) << endl;
        break;
    case '*':
        cout << (a * b) << endl;
        break;
    case '/':
        cout << (a / b) << endl;
        break;
    case '%':
        cout << (a % b) << endl;
        break;
    default: cout << "Please enter a valid opeation " << endl;
    }
}

void counting(){
    int n;
    cout << "Enter the number till where you want to count:" << endl;
    cin >> n;
    cout << endl;

    for(int i = 1; i <=n; i++){
        cout << i << " ";
    }
    cout << endl;
}

bool isEven(int a) {
        if(a & 1){
            return 0;
        } else {
             return 1;
        }
};

void EvenOdd(){
    int n;
    cout << "Enter the number to check Even or odd:" << endl;
    cin >> n;
    cout << endl;

    if(isEven(n)){
        cout << " Number is Even" << endl;
    } else {
        cout << " Number is Odd" << endl;
    }
}

int factorial(int n){
    int fact = 1;
    for(int i = 1; i <= n; i++){
        fact = fact * i;
    }

    return fact;
}

void NCR(){
    int n, r;
    cout << "Enter the number n:" << endl;
    cin >> n;
    cout << endl;
    cout << "Enter the number r:" << endl;
    cin >> r;
    cout << endl;

   int num = factorial(n);
   int denom = factorial(r) * factorial(n - r);

   cout << "The value of NCR is : " << (num / denom)  << endl;
}


void Power(){
    int c, d;
    cout << "Enter the base number :" << endl;
    cin >> c;
    cout << endl;
    cout << "Enter the power number :" << endl;
    cin >> d;
    cout << endl;

    int ans = 1;

    for(int i = 1; i <= d; i++){
        ans = ans * c;
    }



   cout << "The anser is : " << ans  << endl;
}


void IsPrime(){
    int n;
    cout << "Enter the number :" << endl;
    cin >> n;
    cout << endl;

    for(int i = 2; i < n; i++){
        if(n % i == 0){
            cout << " Not a prime Number";
            break;
        } else {
            cout << " Is a prime Number";
            break;
        }
    }
}
