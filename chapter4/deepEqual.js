/*
deepEqual:接受两个参数，若两个对象是同一个值或两个对象中有相同属性，且使用deepEqual比较属性值均返回true时，返回true.
 */
function deepEqual(obj1, obj2) {
    if(obj1 === obj2)
        return true;
    if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object")
        return false;
    let deepObj1 = 0, deepObj2 = 0;
    for (let deep in obj1){
        deepObj1 ++;
    }
    for (let deep in obj2){
        deepObj2 ++;
        if (!(deep in obj1) || !deepEqual(obj1[deep],obj2[deep]))
            return false;
    }
    return deepObj1 == deepObj2;
}

let obj = {here: {is: "an"},object:2};
console.log(deepEqual(obj,obj));
console.log(deepEqual(obj,{here:1,object: 2}));
console.log(deepEqual(obj,{here:{is:"an"},object:2}));