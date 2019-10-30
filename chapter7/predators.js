function Tiger() {
    this.energy = 100;
    this.direction = "w";
    // Used to track the amount of prey seen per turn in the last six turns
    this.preySeen = [];
}
Tiger.prototype.act = function (view) {
    // Average number of prey seen per turn
    let seenPerTurn = this.preySeen.reduce(function (a, b) {
        return a + b;
    },0)/this.preySeen.length;
    let prey = view.findAll("0");
    this.preySeen.push(prey.length);
    // Drop the first element from the array when it is longer than 6
    if (this.preySeen.length > 6)
        this.preySeen.shift();
    // Only eat if the predator saw more than ¼ prey animal per turn
    if (prey.length && seenPerTurn > 0.25)
        return {type: "eat",direction: randomElement(prey)};

    let space = view.find(" ");
    if (this.energy > 400 && space)
        return {type: "reproduce",direction: space};
    if (view.look(this.direction) !== " " && space)
        this.direction = space;
    return {type: "move",direction: this.direction};
};
animateWorld(new LifelikeWorld(
    ["####################################################",
        "#                 ####         ****              ###",
        "#   *  @  ##                 ########       OO    ##",
        "#   *    ##        O O                 ****       *#",
        "#       ##*                        ##########     *#",
        "#      ##***  *         ****                     **#",
        "#* **  #  *  ***      #########                  **#",
        "#* **  #      *               #   *              **#",
        "#     ##              #   O   #  ***          ######",
        "#*            @       #       #   *        O  #    #",
        "#*                    #  ######                 ** #",
        "###          ****          ***                  ** #",
        "#       O                        @         O       #",
        "#   *     ##  ##  ##  ##               ###      *  #",
        "#   **         #              *       #####  O     #",
        "##  **  O   O  #  #    ***  ***        ###      ** #",
        "###               #   *****                    ****#",
        "####################################################"],
    {"#": Wall,
        "@": Tiger,
        "O": SmartPlantEater, // from previous exercise
        "*": Plant}
));
