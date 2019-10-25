function average(array) {
    function plus(a, b) {
        return a+b;
    }
    return array.reduce(plus)/array.length;
}

function groupBy(array,groupOf){
    let groups = {};
    array.forEach(function (element) {
        let groupName = groupOf(element);
        if (groupName in groups)
            groups[groupName].push(element);
        else
            groups[groupName] = [element];
    });
    return groups;
}

let byCentury = groupBy(ANCESTRY_FILE,function (person) {
    return Math.ceil(person.died/100)
});
for (let century in byCentury){
    let ages = byCentury[century].map(function (person) {
        return person.died - person.born;
    });
    console.log(century + ":" +average(ages));
}
