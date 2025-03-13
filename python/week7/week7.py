# Week 7: (Lab Day) Data Structures in Python

"""
For this session we'll build upon what we've done for the last few sessions and work on
Leetcode-style questions on your own. We'll go through the solutions toghether at the end.

"""

"""
PROBLEM 1: Move Zeros
https://leetcode.com/problems/move-zeroes/description/ 
"""

def moveZeros(nums):
    popped = []
    # Iterate backwards to avoid index shifting issues
    # Skeleton: range(start, stop, step)
    for i in range(len(nums) - 1, -1, -1):
        if nums[i] == 0:
            nums.pop(i)  # Remove zero
            popped.append(0)  # Store it separately
    # Append all removed zeros at the end
    # .extend() adds specified list items to another list
    nums.extend(popped)
    return nums

print(moveZeros([0,1,0,3,12])) # Answer: [1,3,12,0,0]
print(moveZeros([0,1,4,0,9,0,12,7])) # Answer: [1,4,7,9,12,0,0,0]
