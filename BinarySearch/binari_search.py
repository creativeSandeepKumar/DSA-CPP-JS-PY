

def binarySearch(arr, key):
    start = 0
    end = len(arr) - 1

    mid = start + (end-start)//2

    while start <= end:
        if(arr[mid] == key):
            return mid
        
        if(key > arr[mid]):
            start = mid + 1
        else:
            end = mid - 1
        
        mid = start + (end - start)//2
    
    return -1

def item1():
    even = [2, 4, 6, 8, 20, 34]
    odd = [20, 30 , 40, 50, 60]

    evenIndex = binarySearch(even, 20)
    print(" Index of 20 is ", evenIndex)
    oddIndex = binarySearch(odd, 40)
    print(" Index of 40 is ", oddIndex)


def item2():
    arr = [2, 4, 6, 8, 20, 34]
    s = 0
    e = len(arr) - 1
    mid = s + (e - s)//2

    while s < e:
        if(arr[mid] < arr[mid+ 1]):
            s = mid + 1
        else:
            e = mid
        
        mid = s + (e - s)//2

    print("Peak number is ", s)

    
def firstOccurecne(arr, key):
    start = 0
    end = len(arr) - 1
    answer = -1
    mid = start + (end - start)//2

    while start <= end:
        if(arr[mid] == key):
            answer = mid
            end = mid - 1
        elif(key > arr[mid]):
            start = mid + 1
        elif(key < arr[mid]):
            end = mid - 1
        mid = start + (end - start)//2
    
    return answer

def lastOccurecne(arr, key):
    start = 0
    end = len(arr) - 1
    answer = -1
    mid = start + (end - start)//2

    while start <= end:
        if(arr[mid] == key):
            answer = mid
            start = mid + 1
        elif(key > arr[mid]):
            start = mid + 1
        elif(key < arr[mid]):
            end = mid - 1
        mid = start + (end - start)//2
    
    return answer

def firstAndLastOccurence():
    arr = [2, 4, 6, 20, 20, 20, 20, 40, 60]
    key = 20

    first = firstOccurecne(arr, key)
    last = lastOccurecne(arr, key)

    print("The first occurence is ", first, " And Last occurence is", last)

def find_pivot(arr):
    start = 0
    end = len(arr) - 1
    mid = (start+end)//2

    while start < end:
        if(arr[mid] < arr[mid+1]):
            start = mid + 1
        else:
            end = mid
        mid = (start+end)//2
    return start

def peakInMountainArr():
    arr = [2, 4, 8, 9, 45, 6, 5,3]
    mountain = find_pivot(arr)

    print("Peak element in this array is at", mountain)


def getPivot(arr):
    start = 0
    end = len(arr) - 1
    mid = start + (end - start)//2

    while start < end:
        if(arr[mid] >= arr[0]):
            start = mid + 1
        else:
            end = mid
        mid = start + (end - start)//2
    
    return start

def checkPivot():
    arr = [10, 20, 30, 40, 50]
    pivot = getPivot(arr)

    print("check pivot element", pivot)

def rotatedBinarySearch(arr, s, key):
    start = s
    end = len(arr) - 1
    mid = start + (end - start)//2

    while(start <= end):
        if(arr[mid] == key):
            return mid
        
        if(key > arr[mid]):
            start = mid + 1
        else:
            end = mid - 1
        mid = start + (end -start)//2

    return -1


def findPosition():
    arr = [2, 5, 8, 10, 7, 4, 2]
    pivot = getPivot(arr)
    ans
    if(6 >= arr[pivot] & 6 <= arr[len(arr) - 1]):
        ans = rotatedBinarySearch(arr, pivot, 6)
    else:
        ans = rotatedBinarySearch(arr, pivot - 1, 6)
    
    print("Check binary search ", ans)


def sqrt_Integer(n):
    s = 0
    e = n
    mid = s + (e - s)//2
    ans = -1

    while s <= e:
        square = mid * mid
        if(square == n):
            return mid
        
        if(square < n):
            ans = mid
            s = mid + 1
        else:
            e = mid - 1
        
        mid = s + (e - s)//2

    return ans

def morePrecsion(n, precision, tempSol):
    factor = 1
    ans = tempSol

    for i in range(precision):
        factor /= 10

        for j in range(0, int((n - ans * ans)//factor)):
            if(ans + factor) * (ans + factor) > n:
                break
            ans += factor
    return ans

def squareRoot():
    num = int(input("Enter the number"))

    tempSol = sqrt_Integer(num)

    print(" Answer is ", morePrecsion(num, 3, tempSol))


def isPossible(stalls, k, mid, n):
    cowCount = 1
    lastPos = stalls[0]

    for i in range(n):
        if(stalls[i] - lastPos >= mid):
            cowCount += 1
            if(cowCount == k):
                return True
            
            lastPos = stalls[i]

    return False


def aggressiveCows():
    stalls = [1, 2, 3,4, 8, 9]
    s = 0
    k = 3
    n = len(stalls)
    e = stalls[n-1];
    ans = -1
    mid = s + (e - s)//2

    while s <= e:
        if(isPossible(stalls, k, mid, n)):
            ans = mid
            s = mid + 1
        else:
            e = mid - 1
        
        mid = s + (e - s)//2
    
    print(" The largest minimum distance is:", ans)

def is_possible(arr, n, m, mid):
    studentCount = 1
    pageSum = 0

    for i in range(n - 1):
        if(pageSum + arr[i] <= mid):
            pageSum += arr[i]
        else:
            studentCount+=1
            if(studentCount > m | arr[i] > mid):
                return False
            pageSum = arr[i]

        if(studentCount > m):
            return False
    return True
        
def allocateBook():
    arr = [12, 34, 67, 90]
    s = 0
    sum = 0
    m = 2
    n = len(arr)

    for i in range(n-1):
        sum += arr[i]
    
    e = sum
    ans = -1
    mid = s + (e - s)//2

    while s <= e:
        if(is_possible(arr, n, m, mid)):
            ans = mid
            e = mid - 1
        else:
            s = mid + 1
        mid = s + (e - s)//2
    
    print(" The minimum number of pages that can allocate is ", ans)
        


def invalid_item():
     print("\nInvalid Number, Please select a valid number from above given list\n")

def main():
    print("\nSelect which item do you want to print from below given list:\n")
    print("\n1. Binary Search\n")
    print("\n2. Peak number .\n")
    print("\n3. First and Last Occurence .\n")
    print("\n4. Peak Mountain in Array .\n")
    print("\n5. Check Pivot in Array .\n")
    print("\n6. Search in Rotated Array .\n")
    print("\n7. Find Square Root .\n")
    print("\n8. Aggressive cows .\n")
    print("\n9. Book Allocation Problem .\n")
    num_of_items = int(input("Enter the number of items: "))
    print()

    items = {
        1: item1,
        2: item2,
        3: firstAndLastOccurence,
        4: peakInMountainArr,
        5: checkPivot,
        6: findPosition,
        7: squareRoot,
        8: aggressiveCows,
        9: allocateBook,
    }
    
    items.get(num_of_items, invalid_item)()


if __name__ == "__main__":
     main()
