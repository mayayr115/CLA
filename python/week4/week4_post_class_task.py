"""
NUMBER GUESSING GAME

Write a function that lets a user guess a number between 1 & 100. 
If their guess is too low, tell the user (i.e. print to the console) it's too low.
If their guess is too high, tell the user it's too high.
If their guess is correct, tell them it's correct and exit the function.

Use the function "random.randint(1, 100)" to generate a number between 1 and 100. 

Hint: Use "int(input())" to get an input from the user as an integer

"""

# This is an import for the Python Library "random". We will discuss more about imports later
import random 

# This is how you generate a random number between 1 & 100. Use this in your function
# print(random.randint(1, 100))



# Write your function here....
def function():
    print('Input a number: ')
    num = int(input())
    rand = random.randint(1, 100)
    while True:
        if (num < rand):
            return print('Your number is too low. The number was ' + str(rand) + '.')
        elif (num > rand):
            return print('Your number is too high. The number was ' + str(rand) + '.')
        else:
            return print('Correct!')

function()
print()