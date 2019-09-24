/*
ReverseArray:接受一个数组作为参数，返回一个新数组，并逆转新数组中的元素次序。
ReverseArrayInPlace:与ReverseArray功能相同，但直接将数组作为参数进行修改，逆转数组中的元素次序。
注意：不能使用标准reverse方法
 */
function reverseArray(array) {
    let newArray = [];
    for (let i=array.length-1; i>=0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    for (let i=0; i<array.length/2; i++){
        let tem = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = tem;
    }
    return array;
}

console.log(reverseArray(["A","B","C"]));
console.log(reverseArrayInPlace([1,2,3,4]));
