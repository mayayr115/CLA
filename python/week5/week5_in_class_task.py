"""
TASK 1:

Write a max_finder() function that takes in an unknown amount of numbers (using *args) and returns the maximum number.

"""
def max_finder(*nums : int):
    return max(nums)

print(max_finder(1, 5, 3, 6, 10))

"""
TASK 2:

Write a lambda function that returns True if a number is even, otherwise return False

"""
function = lambda num: True if num % 2 == 0 else False
print(function(7))