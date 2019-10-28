/*
1.设计一个接口，用于抽象集合的元素迭代过程。对象提供该接口，将自身展现成一种序列形式，代码中可以使用这类对象迭代序列，查看组成序列的每一个元素，并能发现序列的结束位置。
2.指定了接口后，编写一个logFive函数，该函数接受一个序列对象，并调用console.log返回其中前五个元素，如果序列中元素数量少于5个，则输出所有元素。
3.接着实现一个对象类型ArraySeq，并提供一个你设计的接口来迭代存储在内部的数组。然后实现另一个对象类型RangeSeq,提供一个迭代一定范围内（from-to)整数的接口
 */

// * next(), which returns a boolean indicating whether there are more
//   elements in the sequence, and moves it forward to the next
//   element when there are.
//
// * current(), which returns the current element, and should only be
//   called after next() has returned true at least once.

function logFive(sequence) {
    for (let i=0;i<5;i++){
        if (!sequence.next())
            break;
        console.log(sequence.current());
    }
}

function ArraySeq(array) {
    this.pos = -1;
    this.current = array;
}
ArraySeq.prototype.next = function () {
    if (this.pos >= this.array.length-1)
        return false;
    this.pos++;
    return true;
};
ArraySeq.prototype.current = function () {
    return this.array[this.pos];
};

function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
}
RangeSeq.prototype.next = function () {
    if (this.pos >= this.to)
        return false;
    this.pos++;
    return true;
};
RangeSeq.prototype.current = function () {
    return this.pos;
};
logFive(new ArraySeq([1,2]));
logFive(new RangeSeq(100,1000));
