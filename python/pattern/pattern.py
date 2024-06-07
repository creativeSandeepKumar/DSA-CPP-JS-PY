
# pattern 
# ****
# ****
# ****
n = int(input("Enter a number: "))

i = 1

# while i <= n:
#     j = 1
#     while j <= n:
#         print("*", end="")
#         j = j + 1

#     print()
#     i = i + 1

# pattern 
# 111
# 222
# 333
while i <= n:
    j = 1
    while j <= n:
        print(i, end="")
        j = j + 1
    
    print()
    i = i + 1