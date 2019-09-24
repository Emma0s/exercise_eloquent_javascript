/*
编写一个range函数，接受两个参数：start和end，然后返回包含start到end（包括end)之间的所有数字。
编写一个sum函数，接受一个数字数组，并返回所有数字之和。
修改range函数，接受第三个可选参数，指定构建数组时的步长，若不指定，按步长为1增长。
 */

function range(start, end, step){
    if (step==null)
        step = 1;
    let arr = [];
    if (start < end){
        for (let i= start; i<= end; i=i+step){
            arr.push(i);
        }
    }
    else {
        for (let i= start; i>= end; i=i+step){
            arr.push(i);
        }
    }
    return arr;
}

function sum(array) {
    let result = 0;
    for (let i=0; i<array.length; i++){
        result += array[i];
    }
    return result;
}

console.log(range(5,2,-1));
console.log(sum(range(1,10)));
