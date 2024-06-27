
def reverse(arr):
    s = 0
    e = len(arr)-1
    while s <= e:
        arr[s], arr[e] = arr[e], arr[s]
        s+=1
        e-=1
    return arr

def reverseArr():
    arr = []
    arr.append(11)
    arr.append(7)
    arr.append(4)
    arr.append(12)
    arr.append(10)
    arr.append(34)

    print("check for first", arr)
    ans = reverse(arr)
    print("Here is reversed array", ans)

def mergeSortedArr():
    arr1 = [1, 3, 5, 7, 9]
    arr2 = [2, 4, 6]
    arr = []

    i = 0
    j = 0
    k = 0

    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            arr.append(arr1[i])
            i += 1
        else:
            arr.append(arr2[j])
            j += 1
    
    while i < len(arr1):
        arr.append(arr1[i])
        i += 1
    
    while j < len(arr2):
        arr.append(arr2[j])
        j += 1
    
    print("Here is merged Array ", arr)



def invalid_item():
     print("\nInvalid Number, Please select a number from the above given list :)\n")

def main():
    print("\nSelect the items from below given list which you want to print\n")
    print("\n1. Reverse Array\n")
    print("\n2. Merged sorted Array\n")

    num_of_item = int(input("Enter the number: "))
    print()

    items = {
        1: reverseArr,
        2: mergeSortedArr,
    }

    items.get(num_of_item, invalid_item)()

if __name__ == "__main__":
    main()