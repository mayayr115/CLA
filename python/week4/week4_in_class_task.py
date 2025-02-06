"""
TASK #1A
Write a function that takes in a temperature Fahrenheit and returns it's equivalent in Celsius. 

Formula: °C = (°F - 32) x (5/9)
"""

def task1a(temp):
    return (temp - 32) * (5/9)

print('Task 1A:', task1a(32))


"""
TASK #1B
Write a function that takes in a temperature Celsius and returns it's equivalent in Kelvin. 

Formula: Kelvin = °C + 273.15
"""

def task1b(temp):
    return temp + 273.15

print('Task 1B:', task1b(32))


"""
TASK #1C
Write a function that takes in a temperature Fahrenheit and returns it's equivalent in Kelvin. 
NOTE: You must only use the functions used in the first two tasks.
"""

def task1c(temp):
    return task1b(task1a(temp))

print('Task 1C:', task1c(32))

# ---------------------------------------------------------------------------------------------------

"""
TASK #2
Write a function factorial(n) that returns the factorial of n.

Example: 5! = 5 x 4 x 3 x 2 x 1 = 120

Hint: The factorial of 0 or 1 equals 1. 0! = 1, 1! = 1.

"""

def factorial(n):
    product = 1
    if (n == 0 or n == 1):
        return 1
    for num in range(n):
        product += num * product
    return product

print('Task 2:', factorial(5))
print()