/*
实现一个单元格类型，将其命名为StretchCell(inner,width,height)，对应本章介绍的表格单元格接口。
该类型将另一个单元格对象（比如UnderlinedCell）存储在内部，并确保产生的单元格长度与高度必须大于等于width与height值。
 */

function TextCell(text) {
    this.text = text.split("\n");
}
function repeat(string,times){
    let result = "";
    for (let i =0;i<times;i++)
        result += string;
    return result;
}
TextCell.prototype.minWidth = function (){
    return this.text.reduce(function (width, line) {
        return Math.max(width,line.length);
    },0)
};
TextCell.prototype.minHeight = function () {
    return this.text.length;
};
TextCell.prototype.draw = function(width,height){
    let result = [];
    for (let i =0;i<height;i++){
        let line = this.text[i] || "";
        result.push(line + repeat(" ",width-line.length));
    }
    return result;
};
function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}
StretchCell.prototype.minWidth = function(){
    return Math.max(this.width,this.inner.minWidth());
};
StretchCell.prototype.minHeight = function(){
    return Math.max(this.height,this.inner.minHeight());
};
StretchCell.prototype.draw = function(width,height){
    return this.inner.draw(width,height);
};
let sc = new StretchCell(new TextCell("abc"),1,2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3,2));
