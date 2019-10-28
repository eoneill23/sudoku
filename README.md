# Sudoku challenge

## Overview
Write a program that checks if a Sudoku board is completed correctly. The output should be a boolean.

## Process
1. Iterate over the first three sub-arrays and consolidate each number from each sub into a new 'row' array. Iterate over the new 'row' array to check for duplicates

2. Repeate 8 more times.

3. Now that each 'row' is in a single array, can begin checking for duplicates in columns.

4. Iterate over each for to check for duplicates. If there are duplicates, return false, else return true.

5. Need to check each column for duplicates.