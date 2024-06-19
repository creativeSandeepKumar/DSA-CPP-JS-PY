#include <iostream>
#include <vector>
#include <utility>
#include <math.h>
#include <algorithm>
using namespace std;

void item1();
void item2();
void firstAndLastPosition();
void peakInMountainArr();
void checkPivot();
void findPosition();
void squareRoot();
void aggressiveCows();
void allocateBook();

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
    cout << "5. Check Pivot Element" << endl;
    cout << endl;
    cout << "6. Search In Roated Array" << endl;
    cout << endl;
    cout << "7. Get Square root" << endl;
    cout << endl;
    cout << "8. Aggressive Cows" << endl;
    cout << endl;
    cout << "9. Allocate Book" << endl;
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
    case 5:
        checkPivot();
        break;
    case 6:
        findPosition();
        break;
    case 7:
        squareRoot();
        break;
    case 8:
        aggressiveCows();
    case 9:
        allocateBook();
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

int getPivot(int arr[], int n){
    int s = 0;
    int e = n - 1;
    int mid = s + (e - s)/2;

    while( s < e){
        if(arr[mid] >= arr[0]){
            s = mid + 1;
        } else {
            e = mid;
        }
         mid = s + (e - s)/2;
    }
    return s;
}

void checkPivot(){
    int arr[5] = {1, 3, 8, 10, 17};
    cout << "Pivot is " << getPivot(arr, 5) << endl;
}

int rotatedBinarySearch(int arr[], int s,int e, int key ){
int start = s;
    int end = e;

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

void findPosition(){
    int arr[6] = {2, 4, 6, 8, 10, 12};
    int pivot = getPivot(arr, 6);
    int k = 6;
    int ans;
    if(k >= arr[pivot] && k <= arr[6-1]){
        ans =  rotatedBinarySearch(arr, pivot, 5, k);
    } else {
        ans = rotatedBinarySearch(arr, 0, pivot - 1, k);
    }
    cout << "Check binary search " << ans << endl;
}

long long int sqrtInteger(int n){
    int s = 0;
    int e = n;

    long long int mid = s + (e - s)/2;
    long long int ans = -1;

    while(s <= e){
        long long int square = mid * mid;

        if(square == n) {
            return mid;
        }

        if(square < n){
            ans = mid;
            s = mid + 1;
        } else {
            e = mid - 1;
        }

        mid = s + (e - s)/2;
    }

    return ans;
}

double morePrecision(int n, int precision, int tempSol){
    double factor = 1;
    double ans = tempSol;

    for(int  i = 0; i < precision; i++){
        factor = factor/10;

        for(double j = ans; j * j < n; j = j + factor){
            ans = j;
        }
    }

    return ans;
}

void squareRoot(){
    int n;
    cout << " Enter the number " << endl;
    cin >> n;

    int tempSol = sqrtInteger(n);
    cout << " Answer is " << morePrecision(n, 3, tempSol) << endl;

}

bool isPossible(vector<int> &stalls, int k, int mid, int n){
    int cowCount = 1;
    int lastPos = stalls[0];

    for(int i = 0; i< n; i++){
        if(stalls[i] - lastPos >= mid){
            cowCount++;
            if(cowCount == k){
                return true;
            }
            lastPos = stalls[i];
        }
    }

    return false;
}


void aggressiveCows(){
    vector<int> stalls = {1, 2, 3, 4, 8, 9};

    int k = 3;
    sort(stalls.begin(), stalls.end());
    int s = 0;
    int n = stalls.size();
    int e = stalls[n - 1];
    int ans = -1;
    int mid = s + (e - s)/2;

    while(s <= e){
        if(isPossible(stalls, k, mid, n)){
            ans = mid;
            s = mid + 1;
        } else {
            e = mid + 1;
        }
        mid = s + (e - s)/2;
    }

    cout << " The largest minimum distance is: " << ans << endl;
}

bool is_possible(vector<int> arr, int n, int m, int mid){
    int studentCount = 1;
    int pageSum = 0;

    for(int i = 0; i < n; i++){
        if(pageSum + arr[i] <= mid){
            pageSum += arr[i];
        } else {
            studentCount++;
            if(studentCount > m || arr[i] > mid){
                return false;
            }
            pageSum = arr[i];
        }
        if(studentCount > m){
            return false;
        }
    }

    return true;
}


void allocateBook(){
    vector<int> arr = {12, 34, 67, 90};
    int s = 0;
    int sum = 0;
    int m = 2;
    int n = arr.size();

    for(int i = 0; i < n; i++){
        sum += arr[i];
    }

    int e = sum;
    int ans = -1;
    int mid = s + (e - s)/2;

    while(s <= e){
        if(is_possible(arr, n, m, mid)){
            ans = mid;
            e = mid - 1;
        } else {
            s = mid + 1;
        }
        mid = s + (e - s)/2;
    }

    cout << "The minimum number of pages that can allocated is " << ans << endl;
}