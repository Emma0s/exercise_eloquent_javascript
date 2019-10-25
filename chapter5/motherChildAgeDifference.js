/*
使用提供的数据集，计算母亲与孩子之间的平均年龄差
 */
function average(array) {
    return array.reduce(function (a, b) {
        return a+b;
    })/array.length;
}

let byName = {};
ANCESTRY_FILE.forEach(function (person) {
    byName[person.name] = person;
});

let ageDifference = ANCESTRY_FILE.filter(function (person) {
    return byName[person.mother] != null;
}).map(function (person) {
    return person.born -byName[person.mother].born;
});

console.log(average(ageDifference));
