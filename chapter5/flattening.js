/*
结合使用reduce和concat方法，将输入的二维数组中的元素提取出来，并存放到一个一维数组中
 */
let arrays = [[1,2,3],[4,5],[6]];
console.log(arrays.reduce(function (arr1, arr2) {
    return arr1.concat(arr2);
}));
