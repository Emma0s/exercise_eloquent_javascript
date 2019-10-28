/*
编写一个构造函数Vector,以二维空间表示数组。该函数接受两个数字参数x和y，并将其保存到对象的同名属性中
向Vector原型添加两个方法：plus和minus，它们接受另一个向量作为参数，分别返回两个向量（一个this，另一个参数）的和向量与差向量
向原型添加一个getter属性length用于计算向量长度，即点(x,y)与原点(0,0)之间的距离
 */
function Vector(x,y){
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function (other) {
    return new Vector(this.x + other.x,this.y + other.y);
};
Vector.prototype.minus = function (other) {
    return new Vector(this.x - other.x,this.y - other.y);
};
Object.defineProperty(Vector.prototype,"length",{
    get:function () {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
});

console.log(new Vector(1,2).plus(new Vector(2,3)));
console.log(new Vector(1,2).minus(new Vector(2,3)));
console.log(new Vector(3,4).length);
