#include <iostream>
#include <math.h>
#include <climits>
#include <algorithm> 
#include <vector> 
using namespace std;


void item1();
void item2();
void item3();
void item4();
void findArraySum1();
void rotateArr();
void checkSortedRotatedArr();

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
    cout << endl;
    cout << "5. Find Sum of Array" << endl;
    cout << endl;
    cout << endl;
    cout << "6. Rotate Array" << endl;
    cout << endl;
    cout << endl;
    cout << "7. Check sorted Rotated Arrar" << endl;
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
    case 5:
        findArraySum1();
        break;
    case 6:
        rotateArr();
        break;
    case 7:
        checkSortedRotatedArr();
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

vector<int> reverseArr(vector<int> v){
    int s = 0;
    int e = v.size() - 1;

    while( s < e){
        swap(v[s++], v[e--]);
    }

    return v;
}

void findArraySum1(){
    vector<int> a = {9, 9, 9};
    vector<int> b = {1};

    int i = a.size() - 1;
    int j = b.size() - 1;

    vector<int> ans;
    int carry = 0;

    while(i >= 0 && j >= 0){
        int val1 = a[i];
        int val2 = b[j];
        int sum= val1 + val2 + carry;

        carry = sum/10;
        sum = sum % 10;
        ans.push_back(sum);
        i--;
        j--;
    }

    while( i>=0 ){
        int sum = a[i] + carry;
        carry = sum/10;
        sum = sum % 10;
        ans.push_back(sum);
        i--;
    }

    while( j>=0 ){
        int sum = b[j] + carry;
        carry = sum/10;
        sum = sum % 10;
        ans.push_back(sum);
        i--;
    }

    while(carry != 0){
        int sum = carry;
        carry = sum / 10;
        sum = sum % 10;
        ans.push_back(sum);
    }

    vector<int> result = reverseArr(ans);

    cout << "Sum of the array is: ";
    for(int num: result){
        cout << num << " ";
    }
    cout << endl;

}


void printVectorArr(const vector<int>& nums){
    for(int num: nums){
        cout << num << " ";
    }
    cout << endl;
}

void rotateArr(){
    vector <int> nums = {1,2,3, 4, 5, 6, 7};
    int k = 3;
    int n = nums.size();

   cout << "Original Arr: ",
    printVectorArr(nums);

    vector<int> temp (n);

    for(int i = 0; i< n; i++){
        temp[(i + k) % n] = nums[i];
    }


    for(int i = 0; i< n; i++){
        nums[i] = temp[i];
    }
    
    cout << "Rotated Arr: ",
    printVectorArr(nums);

}

void checkSortedRotatedArr(){
    vector<int> nums = {3, 4, 5, 1, 2};

    int cnt = 0;

    for(int i = 1; i < nums.size(); i++){
        if(nums[i ] < nums[i - 1])
            cnt++;
    }

    if(nums[nums.size()-1] > nums[0]){
        cnt++;
    }
    bool checkbool = cnt <= 1;

    if(checkbool){
        cout << "The array is sorted and rotated." << endl;
    } else {
        cout << "The array is not sorted and rotated." << endl;
    }

}