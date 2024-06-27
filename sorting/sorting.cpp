#include <iostream>
#include <vector>
#include <math.h>
#include <climits>
#include <algorithm> 
using namespace std;


void selectionSort();
void bubbleSort();
void insertionSort();

int main()
{
    int num_of_item;
    cout << endl;
    cout << "Select the items which you want to execute from below list: " << endl;
    cout << endl;
    cout << "1. Selection Sort" << endl;
    cout << endl;
    cout << "2. bubble Sort" << endl;
    cout << endl;
    cout << "3. Insertion Sort" << endl;
    cout << endl;
    cin >> num_of_item;
    cout << endl;

    switch (num_of_item)
    {
    case 1:
        selectionSort();
        break;
    case 2:
        bubbleSort();
        break;
    case 3:
        insertionSort();
        break;

    default:
        cout << "\nInvalid Number, Please select a number from above given list : )" << endl;
        cout << endl;
        exit(0);
        break;
    }

    return 0;
}

void selectionSort(){
    vector<int> arr = {10, 9, 23, 15, 35};
    for(int i = 0; i < arr.size() - 1; i++){
       int minIndex = i;

       for(int j = i + 1; j < arr.size(); j++){
        if(arr[j] < arr[minIndex]){
            minIndex = j;
        }
       }    
       swap(arr[minIndex], arr[i]); 
    } 
    cout << "The soted arr is ";
    for(int i = 0; i < arr.size(); i++){
        cout  << arr[i] << " ";
    }
    cout << endl;
    
}

void bubbleSort(){
    vector<int> arr = {23, 16, 89, 40, 56, 27};

    for(int  i = 1; i < arr.size(); i++){
        bool swapped = false;

        for(int j = 0; j < arr.size() - 1; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr[j], arr[j+ 1]);
                swapped = true;
        }
        }

        if(swapped == false){
            break;;
        }
        
    }
    cout << "Here is sorted arr arr ";
    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}

void insertionSort(){
    vector<int> arr = {23, 16, 89, 40, 56, 27};
    for(int i = 1; i < arr.size(); i++){
        int temp = arr[i];
        int j = i - 1;
        for(; j >= 0; j--){
            if(arr[j] > temp){
              arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        arr[j+1] = temp;
    }
  cout << "Here is sorted arr arr ";
    for(int i = 0; i < arr.size(); i++){
        cout << arr[i] << " ";
    }
    cout << endl;

}



