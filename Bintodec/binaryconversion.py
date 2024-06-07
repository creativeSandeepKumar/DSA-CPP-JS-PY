

def item1():
    binary = int(input("Enter the binary number: "))
    print()
    i = 0
    ans = 0
    while(binary != 0):
        digit = binary % 10
        if(digit == 1):
            ans += 2 ** i
        binary = binary // 10
        i += 1

    print(ans)


def item2():
    decimal = int(input("Enter the decimal number: "))
    print()
    i = 0
    ans = 0
    while decimal != 0:
      bit = decimal & 1
      ans = (bit * (10 ** i)) + ans
      decimal = decimal >> 1
      i += 1

    print(ans)
def invalid_item():
     print("\nInvalid Number, Please select a valid number from above given list\n")

def main():
    print("\nSelect which item do you want to print from below given list:\n")
    print("\n1. Binary to decimal conversion.\n")
    print("\n2. Decimal to binary conversion.\n")
    num_of_items = int(input("Enter the number of items: "))
    print()

    items = {
        1: item1,
        2: item2,
    }
    
    items.get(num_of_items, invalid_item)()


if __name__ == "__main__":
     main()
