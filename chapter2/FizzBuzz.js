// 使用console.log打印出从1到100的所有数字;
// 当数能被3整除时，不打印数字，打印"Fizz";
// 当数能被5整除时，不打印数字，而打印"Buzz";
// 当数能被3与5同时整除时，打印"FizzBuzz"
for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";
    console.log(output || n);
}
