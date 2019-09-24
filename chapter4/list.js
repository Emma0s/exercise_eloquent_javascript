/*
arrayToList:当给定参数[1，2，3]时，建立一个嵌套对象集合
listToArray:将列表转换为数组
prepend:接受一个元素和一个列表，后创建一个新列表，将元素添加到输入列表的开头
nth:接受一个列表和一个数，并返回列表中指定位置的元素，若元素不存在返回undefined
 */

function arrayToList(array) {
    let list = null;
    for (let i=array.length-1; i>=0; i--){
        list = {value:array[i], rest:list};
    }
    return list;
}

function listToArray(list){
    let array = [];
    while (list.rest != null){
        array.push(list.value);
        list = list.rest;
    }
    array.push(list.value);
    return array.reverse();
}

function prepend(num, list){
    return {value:num, rest:list};
}

function nth(list, num){
    if (list == null)
        return undefined;
    else if (num === 0)
        return list.value;
    else
        return nth(list.rest,num-1);
}

console.log(arrayToList([1,2,3]));
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));
console.log(prepend(4,{ value: 1, rest: { value: 2, rest: null }}));
console.log(nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } },1));