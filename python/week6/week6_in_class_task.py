"""
TASK 1 - REMOVE DUPLICATES

Given a list of numbers, remove duplicates while maintaining the order of the values. Return the updated list.

Example 1:

Input: nums = [1, 2, 2, 3, 4, 4, 5]  
Output: [1, 2, 3, 4, 5]


Example 2:

Input: nums = [25, 25, 30, 35, 40]
Output: [25, 30, 35, 40]

"""

def task1(nums):
    newList = list(set(nums))
    newList.sort()
    return newList

print(task1([1, 2, 2, 3, 4, 4, 5]))
print(task1([25, 25, 30, 35, 40]))


"""
TASK 2

Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

"""

def task2(nums, target):
    # For loop now loops through nums array by index
    for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]

print(task2([2,7,11,15], 9))
print(task2([3,2,4], 6))