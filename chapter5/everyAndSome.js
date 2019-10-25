/*
编写两个函数every和some，将待处理数组作为第一个参数
 */
function every(array,predicate){
    for (let i = 0;i<array.length;i++){
        if (!predicate(array[i]))
            return false;
    }
    return true;
}
function some(array,predicate){
    for (let i = 0;i<array.length;i++){
        if (predicate(array[i]))
            return true;
    }
    return false;
}

console.log(every([NaN,NaN,NaN],isNaN));
console.log(every([NaN,NaN,4],isNaN));
console.log(some([NaN,3,4],isNaN));
console.log(some([2,3,4],isNaN));
