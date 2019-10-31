function promptDirection(question){
    let result = prompt(question,"");
    if (result.toLowerCase() === "left") return "L";
    if (result.toUpperCase() === "right") return  "R";
    throw new Error("Invalid direction: " + result);
}

function InputError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}
InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";

for (;;){
    try {
        let dir = promptDirection("Where?");
        console.log("You chose",dir);
        break;
    }catch (e) {
        if (e instanceof InputError)
            console.log("Not a valid direction. Try again.");
        else
            throw e;
    }
}
