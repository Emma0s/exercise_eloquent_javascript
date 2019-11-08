/*
针对以下几项，编写正则表达式
1.car和cat   2.pop和prop   3.ferret、ferry、ferrari   4.以ious结尾的单词
5.空白字符后面紧跟着句号、冒号、分号    6.多于6个字母的单词     7.不包含e的单词
 */

verify(/ca[rt]/,["my car","bad cats"],["camper","high art"]);
verify(/pr?op/,["pop culture","mad props"],["plop"]);
verify(/ferr(et|y|ari)/,["ferret","ferry","ferrari"],["ferrum","transfer A"]);
verify(/ious\b/,["how delicious","spacious room"],["ruinous","consciousness"]);
verify(/\s[.,:;]/,["bad punctuation ."],["escape the dot"]);
verify(/\w{7,}/,["hottentottententen"],["no","hotten totten tenten"]);
verify(/\b[^\We]+\b/,["red platypus","wobbling nest"],["earth bed","learning ape"]);

function verify(regexp, yes, no) {
    if (regexp.source === "...") return;
    yes.forEach(function (s) {
        if (!regexp.test(s))
            console.log("Failure to match '" + s + "'");
    });
    no.forEach(function (s) {
        if (regexp.test(s))
            console.log("Unexpected match for '" + s + "'");
    });
}
