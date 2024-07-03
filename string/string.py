
def toLowerCase():
    ch = 'Q'
    
    if ch >= 'a' and ch <= 'z':
        lowerchar = ch
    else:
        lowerchar = chr(ord(ch) - ord('A') + ord('a'))
    
    print("Character is", lowerchar)

def toLowerCase1(ch):
    
    if ch >= 'a' and ch <= 'z':
        lowerchar = ch
    else:
        lowerchar = chr(ord(ch) - ord('A') + ord('a'))
    
    return lowerchar
def checkPalindrome():
    char = "Awadh"
    s = 0
    e = len(char) - 1
    boolcheck = True
    while(s <= e):
        if(toLowerCase1(char[s]) != toLowerCase1(char[e])):
            boolcheck = False
            break
        else:
            s+=1
            e-=1
    print("Palindrome or not: ", boolcheck)


def getLength():
    name = "Hii-Ram"
    count = 0

    for char in name:
        count += 1

    print("Length of string is ", count)


def invalid_item():
     print("\nInvalid Number, Please select a number from the above given list :)\n")

def get_max_occurance():
    name = "HiiHowAreYouToday"
    arr = [0] * 26

    for ch in name:
        ch = ch.lower()
        number = ord(ch) - ord('a')
        if 0 <= number < 26:
            arr[number] += 1
    
    maxi = -1
    ans = 0

    for i in range(26):
        if maxi < arr[i]:
            ans = i
            maxi = arr[i]
    
    print("Maximum occurance is: ", chr(ord('a') + ans))


def main():
    print("\nSelect the items from below given list which you want to print\n")
    print("1. To Lower case")
    print("2. Check palindrome")
    print("3. Get Length")
    print("4. Get Max Occurance")

    num_of_item = int(input("Enter the number: "))
    print()

    items = {
        1: toLowerCase,
        2: checkPalindrome,
        3: getLength,
        4: get_max_occurance,
    }

    items.get(num_of_item, invalid_item)()

if __name__ == "__main__":
    main()