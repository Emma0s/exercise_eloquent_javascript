function findDate(string){
    let dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
    let match = dateTime.exec(string);
    return new Date(Number(match[3]),Number(match[2]),Number(match[1]));
}
console.log(findDate("30-1-2003"));

let name = "dea+h1[]rd";
let text = "This dea+h1[]rd guy is super annoying.";
let escaped = name.replace(/[^\w\s]/g,"\\$&");
let regexp = new RegExp("\\b(" + escaped + ")\\b","gi");
console.log(text.replace(regexp, "_$1_"));

let name1 = "harry";
let text1 = "Harry is a suspicious character.";
let regexp1 = new RegExp("\\b(" + name1 + ")\\b","gi");
console.log(text1.replace(regexp1,"_$1_"));
