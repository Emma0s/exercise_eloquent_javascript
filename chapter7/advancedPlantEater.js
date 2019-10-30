/*
解决如下几个问题：
1.食草动物极度贪婪，会吃掉目所能及的所有植物，直到全部吃光为止
2.动物是随机移动的，如果恰好附近没有植物，动物就会饿死
3.动物繁殖速度过快，导致事物充裕和饥荒之间的周期循环过快
 */
function SmartPlantEater() {
    this.energy = 30;
    this.direction = "e";
}
SmartPlantEater.prototype.act = function (view) {
    let space = view.find(" ");
    if (this.energy > 90 && space)
        return {type:"reproduction",direction: space};
    let plants = view.findAll("*");
    if (plants.length > 1)
        return {type: "eat",direction: randomElement(plants)};
    if (view.look(this.direction) !== " " && space)
        this.direction = space;
    return {type: "move",direction: this.direction};
};
animateWorld(new LifelikeWorld(
    ["############################",
        "#####                 ######",
        "##   ***                **##",
        "#   *##**         **  O  *##",
        "#    ***     O    ##**    *#",
        "#       O         ##***    #",
        "#                 ##**     #",
        "#   O       #*             #",
        "#*          #**       O    #",
        "#***        ##**    O    **#",
        "##****     ###***       *###",
        "############################"],
    {"#": Wall,
        "O": SmartPlantEater,
        "*": Plant}
));
