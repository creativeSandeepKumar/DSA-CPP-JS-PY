
def item1():
    print("This is console")

def invalid_item():
    print("Invalid value")

def main():
    print("\nSelect which item do you want to print from below list:)\n")
    print("\n1. Bitwise opeations\n")

    num_of_numbers = int(input())
    print()


    items = {
        1: item1,
    }

    items.get(num_of_numbers, invalid_item)()

if __name__ == "__main__": 
    main()
