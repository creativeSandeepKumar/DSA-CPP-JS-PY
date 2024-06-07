
def item1():
    a = 4
    b = 6

    print(" a&b ", a&b)
    print(" a|b ", a|b)
    print(" ~a ", ~a)
    print(" a^b ", a^b)

    print(17>>1)
    print(17>>2)
    print(19<<1)
    print(21<<2)

    i = 7

    i += 1
    print(i)

    print(i)
    i += 1

    print(i)
    i -= 1

    i -= 1
    print(i)



def item2():
    for i in range(1, 5+1):
        print(" HI ")
        print(" Hello ")
        continue
        print(" Reply to kerde")


def item3():
    n = 10

    a = 0
    b = 1
    print(a)
    print(b)
    for i in range(1, 10+1):
        nextNumber = a + b
        print(nextNumber)
        a = b
        b = nextNumber


def item4():
    print("Enter the value of n")
    n = int(input())

    isPrime = True

    for i in range(2, n):
        if(n%i == 0):
            isPrime = False
            break
    
    if (isPrime == 0):
        print("Not a prime number")
    else:
        print("Is a Prime Number")


def item5():
    print("Enter the value of n")
    n = int(input())

    sum = 0

    for i in range(1, n+1):
       sum  += i
    
    print(sum)


def item6():
    print("Enter the value of n")
    n = int(input())

    count = 0

    while (n != 0):
        if(n&1):
            count += 1
        n = n >> 1

    
    print(count)


def item7():
    print("Enter the value of n")
    n = int(input())

    prod = 1
    sum = 0

    while (n != 0):
       digit = n%10
       prod = prod * digit
       sum = sum + digit
       n = n/10

    answer = prod - sum
    print(answer)

def invalid_item():
    print("\nInvalid Number, Please select a number from the above given list")


def main():
    print("\nSelect which item do you want to print from below list:)\n")
    print("\n1. Bitwise opeations\n")
    print("\n2. Continue statement\n")
    print("\n3. Fibnacchi series\n")
    print("\n4. Check prime or not\n")
    print("\n5. Sum of N Numbers\n")
    print("\n6. Check Number of One Bits\n")
    print("\n7. Product sum and subtract\n")

    no_of_items = int(input())
    print()

    items= {
        1: item1,
        2: item2,
        3: item3,
        4: item4,
        5: item5,
        6: item6,
        7: item7,
    }

    items.get(no_of_items, invalid_item)()

if __name__ == "__main__":
    main()