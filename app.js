// Question 1: FizzBuzz
// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
// "FizzBuzz".
function FizzBuzz() {
    for (var i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
FizzBuzz();
// console.log("hello");
// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.
function generateFibonacci(num) {
    var sequence = [0, 1];
    var nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    while (nextNumber <= num) {
        sequence.push(nextNumber);
        nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    }
    return sequence;
}
var fibonacciSequence = generateFibonacci(100);
console.log(fibonacciSequence);
// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.
// Examples:
// 8=> returns true
// 6=> returns false
function powerOfTwo(num) {
    if (num <= 0) {
        return false;
    }
    return (num & (num - 1)) === 0;
}
console.log(powerOfTwo(8));
console.log(powerOfTwo(6));
// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.
// Examples:
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"
function capitalizeLetter(input) {
    return input
        .split(" ")
        .map(function (word) {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        else {
            return word;
        }
    })
        .join(" ");
}
console.log(capitalizeLetter("hello  i'm linton and i am learning typescript"));
// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.
// Examples:
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19.
function reverseDigit(num) {
    var numstr = num.toString();
    var revstr = numstr.split("").reverse().join("");
    return parseInt(revstr);
}
console.log(reverseDigit(500));
console.log(reverseDigit(-56));
console.log(reverseDigit(-90));
console.log(reverseDigit(91));
// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2
function vowelCount(vowel) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    for (var _i = 0, vowel_1 = vowel; _i < vowel_1.length; _i++) {
        var char = vowel_1[_i];
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(vowelCount("Hello World"));
