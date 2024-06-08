def item1():
    arr = [1, 3, -34, -22, 11, 6, 8, 0, 23, 56]

    key = int(input("Enter the key:"))
    found = False

    for i in range(10):
        if(arr[i] == key):
            found = True
            break
    
    if found:
        print("Key is present")
    else:
        print("Key is absent")


def get_min(num):
    mini = float('inf')

    for i in range(len(num)):
        mini = min(mini, num[i])
    
    return mini


def get_max(num):
    maxi = float('-inf')

    for i in range(len(num)):
        maxi = max(maxi, num[i])
    
    return maxi


def item2():
    size = int(input("Enter the size of the array: "))
    num = []

    for i in range(size):
        num.append(int(input(f"Enter number {i + 1}: ")))

    print("MAXIMUM VALUE IS", get_max(num))
    print("MINIMUM VALUE IS", get_min(num))

def reverse(arr):
    start = 0
    end = len(arr) - 1

    while start <= end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1
    
def printArr(arr):
    print(" ".join(map(str, arr)))


def item3():
    arr = [1, 2, 5, 6, 3, 7]
    brr = [7, 4, 5, 9, 0]

    reverse(arr)
    reverse(brr)

    print(arr)
    print(brr)



def invalid_item():
     print("\nInvalid Number, Please select a number from the above given list :)\n")

def main():
    print("\nSelect the items from below given list which you want to print\n")
    print("1. Linear Search")
    print("2. Find Min Max")
    print("3. Find Reverse")

    num_of_item = int(input("Enter the number: "))
    print()

    items = {
        1: item1,
        2: item2,
        3: item3,
    }

    items.get(num_of_item, invalid_item)()

if __name__ == "__main__":
    main()