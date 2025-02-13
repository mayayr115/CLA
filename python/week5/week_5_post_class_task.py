"""
PROFILE BUILDER

Create a function that builds a person's profile from keyword arguments.

Create a function "build_profile" that accepts any number of keyword arguments representing attributes of a person (e.g., name, age, city, occupation). 
The function should print the profile information in a formatted way.

Example usage:
build_profile(name="Alice", age=30, city="New York")
# Output:
# Name: Alice
# Age: 30
# City: New York


build_profile(name="Bob", occupation="Software Engineer")
# Output:
# Name: Bob
# Occupation: Software Engineer
 
"""

def build_profile(**info):
    for key, value in info.items(): 
        print(key + ":", value)
    return 

print()
build_profile(name="Alice", age=30, city="New York")
print()
build_profile(name="Bob", occupation="Software Engineer")
print()