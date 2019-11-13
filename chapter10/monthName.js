/*
编写一个模块，将月数转换成具体的月份名称，也可将月份名称转换回约束。不要使用任何模块装载器。
 */
let month = function () {
    let names = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return {
        name: function (number) {
            return names[number];
        },
        number: function (name) {
            return names.indexOf(name);
        }
    };
}();

console.log(month.name(2));
console.log(month.number("November"));