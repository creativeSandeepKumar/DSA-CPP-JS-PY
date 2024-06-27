
def selectionSort():
    arr = [23, 12, 34, 14, 56, 45, 5]
    for i in range(len(arr)-1):
        minIndex = i
        for j in range(i + 1, len(arr)):
            if(arr[j] < arr[minIndex]):
                minIndex = j
        arr[minIndex], arr[i] = arr[i], arr[minIndex]
    print(" The sorted array is ", arr)

def bubbleSort():
    arr = [23, 12, 34, 14, 56, 45, 5]
    for i in range(len(arr) - 1):
        swapped = False
        for j in range(0, len(arr) - 1):
            if(arr[j] > arr[j + 1]):
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if swapped == False:
            break
    print(" Here is sorted array ", arr)

def insertionSort():
    arr = [23, 12, 34, 14, 56, 45, 5]

    for i in range(len(arr)):
        temp = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > temp:
            arr[j+1] = arr[j]
            j -= 1
        arr[j + 1] = temp
    print(" Sorted array is here ", arr)

        

def invalid_item():
     print("\nInvalid Number, Please select a number from the above given list :)\n")

def main():
    print("\nSelect the items from below given list which you want to print\n")
    print("\n1. Selection Sort\n")
    print("\n2. Bubble Sort\n")
    print("\n3. Insertion sort\n")

    num_of_item = int(input("Enter the number: "))
    print()

    items = {
        1: selectionSort,
        2: bubbleSort,
        3: insertionSort,
    }

    items.get(num_of_item, invalid_item)()

if __name__ == "__main__":
    main()