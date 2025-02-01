""" 
Write a Python program takes in a number, and prints the numbers from 1 to that given number, but:

For multiples of 3, print "Fizz" instead of the number.
For multiples of 5, print "Buzz" instead of the number.
For multiples of both 3 and 5, print "FizzBuzz".

Here's an example output if you input the number 15: 

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

"""

print("Input a number: ")
val = int(input())
print() # New Line
for num in range(1, val+1):
    if (num % 3 == 0 and num % 5 == 0):
        print("FizzBuzz")
    elif (num % 3 == 0):
        print("Fizz")
    elif (num % 5 == 0):
        print("Buzz")
    else:
        print(num)