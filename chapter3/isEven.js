//编写一个递归函数isEven,该函数接受一个参数number，并返回一个布尔值。
function isEven(number){
    if (number > 0){
        if (number===0)
            return true;
        else if (number===1)
            return false;
        else
            return isEven(number-2);
    }
    else
        return isEven(-number);

}
console.log(isEven(-5));
console.log(isEven(75));