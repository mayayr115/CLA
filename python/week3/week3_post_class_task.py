"""
Problem: Write a program to check if a given string is a palindrome. A palindrome reads the same backward as forward (e.g., "madam" or "racecar").

Given a string s, print True if it is a palindrome, or False otherwise.

Examples:
"abba" -> True
"racecar" --> True
"dad" -> True
"helloworld" -> False
"marcy" -> False

Note: Ignore edge cases with capital letters, punctuation characters, etc. for the purpose of this exercise.

Hints
    1. A string is an iterable object. For example if x = "hello", then x[0] equals "h", x[1] equals "e", x[2] equals "l", etc..
    2. You can get the length of a string by using the builtin function len() (ex: len(x))
    3. See if you can solve with a two-pointer approach.
"""

print("Input a string: ")
val = str(input())
print() # New Line
reverse = val[::-1]
idx = 0
while idx < len(val):
    if (val[idx] == reverse[idx]):
        print('True')
    else:
        print('False')
    break
