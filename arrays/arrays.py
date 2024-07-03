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

def reverseArr(arr):
    s = 0
    e = len(arr) - 1

    while s < e:
        arr[s], arr[e] = arr[e], arr[s]
        s += 1
        e -= 1
    
    return arr

def findSumArr():
    a = [9, 9, 9]
    b = [1]

    i = len(a) - 1
    j = len(b) - 1
    ans = []
    carry = 0

    while i >= 0 and j >= 0:
        val1 = a[i]
        val2 = b[j]

        sum = val1 + val2 + carry
        carry = sum // 10
        sum = sum % 10
        ans.append(sum)
        i -= 1
        j -= 1
    
    while i >= 0:
        sum = a[i] + carry
        carry = sum // 10
        sum = sum % 10
        ans.append(sum)
        i -= 1

    while j >= 0:
        sum = b[j] + carry
        carry = sum // 10
        sum = sum % 10
        ans.append(sum)
        j -= 1

    while carry != 0:
        sum = carry
        carry = sum // 10
        sum = sum % 10
        ans.append(sum)
    
    result = reverseArr(ans)
    print("Sum of arr is", result)

def rotateArr():
    nums = [1, 2, 3, 4, 5, 6, 7]
    k = 3
    n = len(nums)
    temp = [0] * n 

    for i in range(n):
        temp[(i + k)%n] = nums[i]

    for i in range(n):
        nums[i] = temp[i]
    
    print("Rotated Arr is", nums)

def checkSortedRotatedArr():
    nums = [4, 5, 6, 7, 1, 2, 3]
    cnt = 0

    for i in range(1, len(nums)):
        if nums[i] < nums[i - 1]:
            cnt += 1
    if nums[len(nums) - 1] > nums[0]:
        cnt +=1
    checkbook = cnt <= 1

    if checkbook:
        print("Array is sorted and rotated")
    else:
        print("Array is not sorted and rotated")


def invalid_item():
     print("\nInvalid Number, Please select a number from the above given list :)\n")

def main():
    print("\nSelect the items from below given list which you want to print\n")
    print("1. Linear Search")
    print("2. Find Min Max")
    print("3. Find Reverse")
    print("4. Find Sum of Array")
    print("5. Rotated Array")
    print("6. Check sorted and Rotated Array")

    num_of_item = int(input("Enter the number: "))
    print()

    items = {
        1: item1,
        2: item2,
        3: item3,
        4: findSumArr,
        5: rotateArr,
        6: checkSortedRotatedArr,
    }

    items.get(num_of_item, invalid_item)()

if __name__ == "__main__":
    main()