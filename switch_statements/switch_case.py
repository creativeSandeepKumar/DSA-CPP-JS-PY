
def item1():
    a = int(input("Enter the value of a: "))
    b = int(input("Enter the value of b: "))
    op = input("Enter the operator")

    if op == "+":
        print(a+b)
    elif op == "-":
        print(a-b)
    elif op == "*":
        print(a*b)
    elif op == "/":
        print(a/b)
    elif op == "/":
         if b != 0:
            print(a / b)
         else:
            print("Division by zero is not allowed.")
    elif op == "%":
        print(a%b)
    else:
        print("Please Enter a valid Input Operation")


def counting():
    num = int(input("Enter the number till where you want to print:\n"))

    # count = " "
    for i in range(num + 1):
        print(i)
    

def isEven(num):
        return (num & 1) == 0
def EvenOrOdd():
     num = int(input("Enter the number which you want to check even or odd:\n"))

     if(isEven(num)):
         print(" Number is Even")
     else:
         print(" Number is Odd")


def factorial(num):
    fact = 1

    for i in range(num + 1):
        fact += i

    return fact

def nCr():
    n = int(input("Enter the value of n: "))
    r = int(input("Enter the value of r: "))

    num = factorial(n)
    denom = factorial(n) * factorial(n-r)

    print("The value of nCr is: ", num/denom)


def Power():
    num1 = int(input("Enter the base value: "))
    num2 = int(input("Enter the power value: "))

    answer = 1

    for i in range(num2):
        answer *= num1
    print("The value of Power is: ", answer)

    


def invalid_item():
     print("\nInvalid Number, Please select a number from the above given list :)\n")

def main():
    print("\nSelect the items from below given list which you want to print\n")
    print("1. Calculator")
    print("2. Counting")
    print("3. Check Even or Odd")
    print("4. Check nCr")
    print("5. Check Power")

    num_of_item = int(input("Enter the number: "))
    print()

    items = {
        1: item1,
        2: counting,
        3: EvenOrOdd,
        4: nCr,
        5: Power,
    }

    items.get(num_of_item, invalid_item)()

if __name__ == "__main__":
    main()

