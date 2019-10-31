/*
假设有一个函数primitiveMultiply，在50%的情况下将两个数相乘，在另外50%的情况下会触发MultiplicatorUnitFailure类型的异常。
编写一个函数，调用这个容易出错的函数，不断尝试直到调用成功并返回结果为止。（确保只处理你期望的异常）
 */
function MultiplicatorUnitFailure(){

}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

function primitiveMultiply(a, b) {
    if (Math.random() > 0.5)
        return a*b;
    else
        return new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
    for (;;){
        try {
            return primitiveMultiply(a,b);
        }catch (e) {
            if (e instanceof MultiplicatorUnitFailure)
                console.log("Try again!");
            else
                throw e;
        }
    }
}

console.log(reliableMultiply(8,8));
