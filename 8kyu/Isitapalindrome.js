// Write a function that checks if a given string (case insensitive) is a palindrome.
let isPalindrome = x => x.toLowerCase().split('').reverse().join('') === x.toLowerCase()