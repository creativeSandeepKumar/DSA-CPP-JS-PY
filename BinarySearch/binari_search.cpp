#include <iostream>
#include <vector>
#include <utility>
#include <math.h>
using namespace std;

void item1();
void item2();
void firstAndLastPosition();
void peakInMountainArr();

int main() {
    int num_of_item;
    cout << endl;
    cout << "Select which Items do you want to execute from below list" << endl;
    cout << endl;
    cout << "1. Binary Serach" << endl;
    cout << endl;
    cout << "2. The Peak Element" << endl;
    cout << endl;
    cout << "3. firstAndLastPosition" << endl;
    cout << endl;
    cout << "4. peakInMountainArr" << endl;
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
        firstAndLastPosition();
        break;
    case 4:
        peakInMountainArr();
        break;
    
    default:
    cout << "\nInvalid number, Please select a valid number from above list: )" <<endl;
    cout << endl;
        break;
    }

    return 0;
}

int binarySearch(int arr[], int size, int key){
    int start = 0;
    int end = size - 1;

    int mid = start + (end-start)/2;

    while(start <= end){
        if(arr[mid] == key){
            return mid;
        }

        if(key > arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }

        mid = start + (end-start)/2;
    }

    return -1;

 }

void item1(){
   int even[6] = {2, 4, 6, 8, 12, 18};
   int odd[5] = {2, 4, 6, 8, 12};

   int evenIndex = binarySearch(even, 6, 6);

   cout << " Index of 6 is " << evenIndex << endl;

   int oddIndex = binarySearch(odd, 5, 12);

   cout << "Index of 14 is " << oddIndex << endl;

    
}

void item2(){
    int arr[6] = {2, 4, 6, 8, 12, 34};
    int n = 6;
    int s = 0, e = n-1;
    int mid = s + (e - s)/2;

    while(s < e){
        if(arr[mid] < arr[mid+ 1]){
            s = mid + 1;
        } else {
            e = mid;
        }
        mid = s + (e-s)/2;
    }

    cout << "The peak number is: " << s << endl;
    
}

int firstOccurence(const vector<int>& arr, int key){
    int s = 0, e = arr.size()- 1;
    int mid = s + (e - s)/2;
    int ans = -1;

    while(s <= e){
        if(arr[mid] == key){
            ans = mid;
            e = mid - 1;
        } else if(key > arr[mid]){
            s = mid + 1;
        } else if(key < arr[mid]){
            e = mid -1;
        }
        mid = s + (e - s)/2;
    }

    cout << "check first here" << ans << endl;
    return ans;


}

int lastOccurence(const vector<int>& arr, int key){
    int s = 0, e = arr.size() - 1;
    int mid = s + (e - s)/2;
    int ans = -1;

    while(s <= e){
        if(arr[mid] == key){
            ans = mid;
            s = mid + 1;
        } else if(key > arr[mid]){
            s = mid + 1;
        } else if(key < arr[mid]){
            e = mid -1;
        }
        mid = s + (e - s)/2;
    }
    return ans;


}

void firstAndLastPosition(){
    cout << "This is working or not " << endl;
    vector<int> arr = {2, 4, 10, 10, 10, 18, 20};
    int key = 10;

    int fisrt = firstOccurence(arr, key);
    int last = lastOccurence(arr, key);

    cout << "First occurance is on index: " << fisrt << " And Last occurance is on position:  " << last << endl;

}

int find_pivot(const vector<int>& v){
    int s = 0, e = v.size() - 1;
    int mid = (s+e)/2;
    while(s < e){
        if(v[mid] < v[mid+1]){
            s = mid + 1;
        } else {
            e = mid;
        }
        mid = (s + e)/2;
    }

    return s;
}

void peakInMountainArr(){
    vector<int> arr = {0, 2, 8, 5, 4, 3, 1};
    int pivot = find_pivot(arr);
    cout << "Peak element in this arr is at" << pivot << endl;
}