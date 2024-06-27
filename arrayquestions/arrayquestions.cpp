#include <iostream>
#include <vector>
#include <math.h>
#include <climits>
#include <algorithm> 
using namespace std;


void reverseArr();
void mergeSortedArr();

int main()
{
    int num_of_item;
    cout << endl;
    cout << "Select the items which you want to execute from below list: " << endl;
    cout << endl;
    cout << "1. Reverse Array" << endl;
    cout << endl;
    cout << "2. Merge Sorted Array" << endl;
    cout << endl;
    cin >> num_of_item;
    cout << endl;

    switch (num_of_item)
    {
    case 1:
        reverseArr();
        break;
    case 2:
        mergeSortedArr();
        break;

    default:
        cout << "\nInvalid Number, Please select a number from above given list : )" << endl;
        cout << endl;
        exit(0);
        break;
    }

    return 0;
}

vector<int> reverse(vector<int> v){
    int s = 0, e = v.size()-1;
    while(s <= e){
        swap(v[s], v[e]);
            s++;
            e--;
    }

    return v;
}

void print(vector<int> v){
    for(int i = 0; i < v.size(); i++){
        cout << v[i] << " ";
    }
    cout << endl;
}

void reverseArr(){
    vector<int> v ;
    v.push_back(11);
    v.push_back(7);
    v.push_back(3);
    v.push_back(12);
    v.push_back(4);
    
    vector<int> ans = reverse(v);

    cout << "Printing reverse array" << endl;
    print(ans);
}

void mergeSortedArr(){
    int arr1[5] = {1, 3, 5, 7, 9};
    int arr2[3] = {2, 4, 6};

    int arr3[8] = {0};

    int i = 0, j = 0;
    int k = 0;

    while(i<5 && j<3){
        if(arr1[i] < arr2[j]){
            arr3[k++] = arr1[i++];
        } else {
            arr3[k++] = arr2[j++];
        }
    }

    while(i < 5){
        arr3[k++] = arr1[i++];
    }
    while(j < 3){
        arr2[k++] = arr2[j++];
    }

      for(int i=0; i<8; i++) {
        cout<< arr3[i] <<" ";
    }
    cout << endl;

}