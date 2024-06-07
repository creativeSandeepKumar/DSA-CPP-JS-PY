def pattern1():
    # Function to print square pattern
    print("\nYou are going to see a square pattern:-")
    
    side = int(input("\nEnter side of square: "))
    print()
    
    for i in range(1, side + 1):
        for j in range(1, side + 1):
            print("*", end="")
        print()
    print()


def pattern2():
    print("\nYou are going to see a number square pattern:-")
    
    side = int(input("\nEnter side of square: "))
    print()
    
    for i in range(1, side + 1):
        for j in range(1, side + 1):
            print(i, end="")
        print()
    print()


def pattern3():
    print("\nYou are going to see another number square pattern:-")
    
    side = int(input("\nEnter side of square: "))
    print()
    
    for i in range(1, side + 1):
        for j in range(1, side + 1):
            print(j, end="")
        print()
    print()


def pattern4():
    print("\nYou are going to see inverted number square pattern:-")
    
    side = int(input("\nEnter side of square: "))
    print()
    
    for i in range(1, side + 1):
        for j in range(1, side + 1):
            print(side - j + 1, end="")
        print()
    print()


def pattern5():
    print("\nYou are going to see counting number square pattern:-")
    
    side = int(input("\nEnter side of square: "))
    print()
    counter = 1
    for i in range(1, side + 1):
        for j in range(1, side + 1):
            print(counter, end=" ")
            counter += 1
        print()
    print()


def pattern6():
    print("\nYou are going to see right angle triangle pattern:-")
    
    height = int(input("\nEnter height of traingle: "))
    ch = str(input("\nEnter the symbol with which you want to create the triangle: "))
    print()
    for i in range(1, height + 1):
        for j in range(1, i + 1):
            print(ch, end=" ")
        print()
    print()


def pattern7():
    print("\nYou are going to see  countingright angle triangle pattern:-")
    
    height = int(input("\nEnter height of traingle: "))
    ch = str(input("\nEnter the symbol with which you want to create the triangle: "))
    print()
    for i in range(1, height + 1):
        value = i
        for j in range(1, i + 1):
            print(value, end=" ")
            value+=1
        print()
    print()


def pattern8():
    print("\nYou are going to see inverted right angle triangle pattern:-")
    
    height = int(input("\nEnter height of traingle: "))
    ch = str(input("\nEnter the symbol with which you want to create the triangle: "))
    print()
    for i in range(1, height + 1):
        for j in range(1, i + 1):
            print( i - j + 1, end=" ")
        print()
    print()


def pattern9():
    print("\nYou are going to see alphabetical square pattern:-")
    
    side = int(input("\nEnter side of square: "))
    # ch = str(input("\nEnter the symbol with which you want to create the triangle: "))
    charcode = ord('A')
    print()
    for i in range(1, side + 1):
        for j in range(1, side + 1):
            print(chr(charcode), end=" ")
        print()
        charcode+=1
    print()


def pattern10():
    print("\nYou are going to see alphabetical triangle pattern:-")
    
    height = int(input("\nEnter height of triangle: "))
    # ch = str(input("\nEnter the symbol with which you want to create the triangle: "))
    charcode = ord('A')
    print()
    for i in range(1, height + 1):
        for j in range(1, i + 1):
            print(chr(charcode), end=" ")
        print()
        charcode+=1
    print()

def invalid_pattern():
    # Function to handle invalid pattern selection
    print("\nInvalid Number, Please select a number from the above given list :)\n")

def main():
    print("\nSelect which pattern do you want to print from below list:\n")
    print("1. Square pattern.\n")
    print("2. Number Square pattern.\n")
    print("3. Another Number Square pattern.\n")
    print("4. Inverted Number Square pattern.\n")
    print("5. Counting Number Square pattern.\n")
    print("6. Right angle triangle pattern.\n")
    print("7. Counting Right angle triangle pattern.\n")
    print("8. Counting Inverted Right angle triangle pattern.\n")
    print("9. Alphabeticla square pattern.\n")
    print("10. Alphabeticla Triangle pattern.\n")
    
    no_of_pattern = int(input())
    print()
    
    # Dictionary to mimic switch-case behavior
    patterns = {
        1: pattern1,
        2: pattern2,
        3: pattern3,
        4: pattern4,
        5: pattern5,
        6: pattern6,
        7: pattern7,
        8: pattern8,
        9: pattern9,
        10: pattern10,
    }
    
    # Get the function from the dictionary and call it
    # If no valid key is found, call the invalid_pattern function
    patterns.get(no_of_pattern, invalid_pattern)()

if __name__ == "__main__":
    main()
