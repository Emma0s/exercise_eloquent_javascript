- 创建正则表达式

使用RegExp构造函数；使用/字符将模式包围起来
```
let re1 = new RegExp("abc");

let name1 = "harry";
let text1 = "Harry is a suspicious character.";
let re2 = new RegExp("\\b(" + name1 + ")\\b","gi");
console.log(text1.replace(re2,"_$1_"));

let re3 = /abc/;
```
- 正则匹配

**正则表达式的匹配方法：**  
test方法：测试给定字符串是否匹配模式
```
console.log(/abc/.test("abcde"))    //true  
```
exec方法：当匹配模式后，返回包含所有匹配元组的数组，无法匹配返回null  
```
console.log(/d+/.exec("one two 100"))    //["100"]  
```
其中index属性用于指出匹配的起始位置。
  
**字符串的匹配方法：**  
match方法：与exec类似
```
console.log("one two 100".match(/\d+/))    //["100"]  
```
若正则表达式包含使用圆括号包围的子表达式分组，与这些分组匹配的文本也会出现在数组中。第一个元素是与整个模式匹配的字符串，其后是与第一个分组匹配的部分字符串（表达式中第一次出现左圆括号的那部分），然后是第二个分组。  
```
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));    //["'hello'","hello"]
```
在这种情况下，若分组最后没有匹配任何字符串（例如在元组后加一个问号），结果数组中与该分组对应的元素讲师undefined。类似的，若分组匹配了多个元素，则数组中只包含最后一个匹配项。
```
console.log(/bad(ly)?/.exec("bad"));    //["bad",undefined]
console.log(/(\d)+/.exec("123"));    //["123","3"]
```
search方法：搜索一个匹配项，返回匹配的起始位置  
replace方法：使用匹配字符串替换原字符串中匹配的文本，还可以向replace传递一个函数，根据匹配文本和匹配元组创建匹配字符串  
```
console.log("Hopper, Grace\nMcCarthy, John\nRitchie, Dennis".replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));   //Grace Hopper\nJohn McCarthy\nDennis Ritchie

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
    return str.toUpperCase();   //the CIA and FBI
}));
```
正则表达式可以在结尾的斜杠后添加选项，选项i使得匹配不区分大小写，选项g使得表达式变成全局匹配，此时，replace方法会替换所有匹配项，而非第一项。  

- 日期类型  

使用从0开始的数字表示月份（11表示12月），使用从1开始的数字表示日期。  

- 贪婪模式

(+、*、?、{})：会尽量多的匹配他们可以匹配的字符，然后向前回溯  
(+?、*?、??、{}?)：尽量少地匹配字符，只有当剩下的模式无法匹配时才会多进行匹配
应用时考虑是否可以使用非贪婪符号替代贪婪符号
- lastIndex属性  

正则表达式source属性包含用于创建正则表达式的字符串；lastIndex属性可以在极少数情况下（启用全局g，且使用exec匹配时）控制下一次匹配的起始位置。  
```
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);     //4
console.log(pattern.lastIndex)    //5    匹配成功时，exec调用会自动更新lastIndex属性，指向匹配字符串后的位置，若无法匹配，lastIndex清零
```
同一个全局正则表达式多次调用exec时，自动更新lastIndex属性可能产生问题。正则表达式可能恰好处于前一次调用exec之后剩余字符的起始位置。
```
let digit = /\d/g;
console.log(digit.exec("here it is: 1"));     //["1"]
console.log(digit.exec("and now:1"));     //null
```
全局正则表达式的唯二应用场景：调用replace方法时；需要显示使用lastIndex时

- 正则表达式常见模式

/abc/:字符序列  
/[abc]/:字符集中的任意字符  
/[^abc]/:任何不在字符集中的字符  
/[0-9]/:任何在字符范围内的字符  
/x+/:出现模式x一次或多次  
/x+?/:出现模式x一次或多次，非贪婪模式  
/x*/:出现模式次或多次（可以匹配模式不存在的情况）  
/x?/:出现模式零次或多次，非贪婪模式  
/x{2,4}/:出现次数在2-4之间  
/(abc)/:元组  
/a|b|c/:匹配任意一个模式  
/\d/:数字字符  
/\D/:非数字字符  /\W/  /\S/同理非..  
/\w/:字母和数字字符（单词字符）  
/\s/:任意空白字符  
/./:除换行符外的任意字符  
/\b/:单词边界  
/^/:输入起始位置  
/$/:输入结束位置  
