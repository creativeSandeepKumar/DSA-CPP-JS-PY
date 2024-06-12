

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


def invalid_item():
     print("\nInvalid Number, Please select a valid number from above given list\n")

def main():
    print("\nSelect which item do you want to print from below given list:\n")
    print("\n1. Binary Search\n")
    print("\n2. Peak number .\n")
    print("\n3. First and Last Occurence .\n")
    print("\n4. Peak Mountain in Array .\n")
    num_of_items = int(input("Enter the number of items: "))
    print()

    items = {
        1: item1,
        2: item2,
        3: firstAndLastOccurence,
        4: peakInMountainArr,
    }
    
    items.get(num_of_items, invalid_item)()


if __name__ == "__main__":
     main()
