#include <iostream>
#include <math.h>
#include <climits>
#include <algorithm> 
using namespace std;


void item1();
void item2();
void item3();
void item4();

int main()
{
    int num_of_item;
    cout << endl;
    cout << "Select the items which you want to execute from below list: " << endl;
    cout << endl;
    cout << "1. Array Intro" << endl;
    cout << endl;
    cout << "2. Linear Search" << endl;
    cout << endl;
    cout << "3. Max Min Search" << endl;
    cout << endl;
    cout << "4. Reverse Array" << endl;
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
    case 3:
        item3();
        break;
    case 4:
        item4();
        break;

    default:
        cout << "\nInvalid Number, Please select a number from above given list : )" << endl;
        cout << endl;
        exit(0);
        break;
    }

    return 0;
}



void item1(){
    int number[15];

    cout << "Value at 14 index " << number[14] << endl;

    int second[3] = {5, 7, 11};

    int third[15] = {2, 7};
    cout << "Value at 2 index " << second[2] << endl;

    int n = 15;

    int thirdSize = sizeof(third)/sizeof(int);

    cout << "Size of Third " << thirdSize << endl;
    int fourth[10] = {1};

    n = 10;
    int fifth[10] = {1};

    n = 10;

    int fifthSize = sizeof(fifth)/sizeof(int);
    cout << "Size of fifth " << fifthSize << endl;

    char ch[5] = {'a', 'b', 'c', 'r','p'};
    cout << ch[3] << endl;

    cout << " Printing the array " << endl;

    for(int i = 0; i < 5; i++){
        cout << ch[i] << " ";
    }

    double firstDouble[5];
    float firstFloat[6];
    bool firstBool[9];

    cout << endl << " Everything is fine " << endl << endl;

}

void item2(){
    int arr[10] = {5, 7, -2, 10, 22, -2, 0, 5, 22, 1};

    cout << "Enter the element to search for " << endl;

    int key;

    cin >> key;

    bool found = 0;

    for(int i = 0; i < 10; i++){
        if(arr[i] == key){
            found = 1;
            break;
        }
    }

    if(found){
        cout << " Key is present " << endl;
    } else {
        cout << " Key is absent " << endl;
    }
    
}

int getMin(int num[], int n){
    int mini = INT_MAX;

    for(int i = 0; i < n; i++){
        mini = min(mini, num[i]);
    }

    return mini;
}


int getMax(int num[], int n){
    int maxi = INT_MIN;

    for(int i = 0; i < n; i++){
        maxi = max(maxi, num[i]);
    }

    return maxi;
}

void item3(){
    int size;
    cin >> size;

    int num[100];

    for(int i = 0; i < size; i++){
        cin >> num[i];
    }

    cout << " Maximun value is " << getMax(num, size) << endl;
    cout << " Minimum value is " << getMin(num, size) << endl;

}


void reverse(int arr[], int n){
    int start = 0;
    int end = n - 1;

    while(start <= end){
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}

void printArray(int arr[], int n){
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}

void item4(){
    int arr[6] = {1, 4, 0, 5, -2, 15};
    int brr[5] = {2, 6, 3, 9, 4};

    reverse(arr, 6);
    reverse(brr, 5);

    printArray(arr, 6);
    printArray(arr, 5);
}