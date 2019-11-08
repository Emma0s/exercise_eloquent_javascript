/*
编写一个表达式，只匹配JS风格的数字。
支持数字前可选的正号与负号、十进制小数点、指数计数法（5e-3或1E10，指数前也需要支持可选的符号）。
注意小数点前或小数点后的数字也是不必要的，但数字不能只有小数点。如.5和5.都是合法的JS数字，但单个点不是。
 */

let number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;

["1","-1","+15","1.55",".5","5.","1.3e2","1E-4","1e+12"].forEach(function (s) {
    if (!number.test(s))
        console.log("Failed to match '" + s + "'");
});

["1a","+-1","1.2.3","1+1","1e4.5",".5.","1f5","."].forEach(function (s) {
    if (number.test(s))
        console.log("Incorrectly accepted '" + s + "'");
});
