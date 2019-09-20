//编写一个函数Min,它接受两个参数，并返回其最小值。
function min(number1, number2) {
    return (number1-number2>0)?number2:number1;
}
console.log(min(0,-10));
