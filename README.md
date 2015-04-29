# fakebigdata
Fake Big Data Using Number Series

Changes: We are going to use JavaScript instead of RoR for our development.

Critical URLs: https://github.com/NickQiZhu/d3-cookbook
https://github.com/NickQiZhu/d3-cookbook


Team member: Tom, Cody, James and Aaron
Project1: 

Assignment for Tom and James:
Work on big-integer: 1. Fibonacci number (check: http://en.wikipedia.org/wiki/Fibonacci_number). Assuming that it begins with 1 instead of 0. 2. Factorial (check: http://en.wikipedia.org/wiki/Factorial). Assuming that it begins with 1 instead of 0. 3. Prime number (check:http://en.wikipedia.org/wiki/Prime_number). The first prime number is 2.

As a result, when I call the function Fibonacci(i), it should return the ith Fibonacci number with i >= 1. The same case for Factorial and Prime number. You need to do more test. For example, we mention "big data", it means the integers that are largest than 9007199254740991. Check the following URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER

You should know how to "export" a module in node.js. Then, you should have a demo program to demonstrate the way to require('aaa'), where aaa is the name of the function that you have named. I know a little bit, but not a lot. You learn it and teach me and other students how to do it.

Assigment for Cody and Aaron:

I don't like the horizontally-displayed bars. Please change it to vertically-dislayed bars.
You ONLY display 10 bars with one bar for each digit (0 to 9)

Use different colors for different digits. Tell me why you choose a particular color scheme.

Instead of updating one bar at a time, you need to use random number generators to generate 10 numbers at once. Those numbers are floating numbers from 0.0 to 100.0. We assume that each number represents a percentage.

Add 4 inputs: the first one is for the total time for the animation (in seconds) and the second one for time interval between one animation to another one. The third one is for the starting number (inclusive) for the ith number. The fourth one is for the type of animation. Possible values are: Fibonacci, Factorial and Prime. (case-sensitive). You need to use those inputs to control your program.

Right now, two teams do not have to work closely. We are going to talk about integration later on.

New Intruction (Wednesday, April 29, 2015)

Need to separate main logic into two parts: client side and server side. On the client side, you should be able to call things like getPercentageData('Prime', 200). The first parameter is the name of the number series. The second parameter is the n th number in that series.

You need to use $http call from Angular.js to get the needed value. Check the videos made by Michael, the Physics guy. 
https://www.youtube.com/watch?v=kHV7gOHvNdk
