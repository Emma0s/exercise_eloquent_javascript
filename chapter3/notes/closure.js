function multiplier(factor){
    return function (number){
        return number * factor;
    };
}
let twice = multiplier(2);
console.log(twice(5));