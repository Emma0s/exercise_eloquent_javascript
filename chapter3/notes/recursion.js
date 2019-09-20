function findSolution(target){
    function find(start,history){
        //即生成的加法乘法序列可以计算出目标数字时，直接返回结果
        if (start === target)
            return history;
        //此序列错误，停止执行
        else if (start > target)
            return null;
        //以当前数字为基础，尝试两条可能的路径，开始递归
        else
            return find(start +5,"(" + history + " +5)") ||
                   find(start *3,"(" + history + " *3)");
    }
    return find(1,"1");
}
console.log(findSolution(24));
