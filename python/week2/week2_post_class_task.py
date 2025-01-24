'''
Write a Python program that asks the user for a single number and categorizes it based on specific conditions:

If the number is divisible by 3, print "Divisible by 3".
If the number is divisible by 5, print "Divisible by 5".
If the number is divisible by both 3 and 5, print "Divisible by both 3 and 5".
Otherwise, print "Not divisible by 3 or 5".

'''

print("Input a number: ")
a = int(input()) 
if (a % 3 == 0 and a % 5 == 0):
    print("Divisible by both 3 and 5")
elif (a % 3 == 0):
    print("Divisible by 3")
elif (a % 5 == 0):
    print("Divisible by 5")
else:
    print("Not divisible by 3 or 5")
