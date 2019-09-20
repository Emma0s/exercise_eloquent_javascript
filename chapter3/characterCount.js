/*
编写一个函数countBs,接受一个字符串参数，并返回一个数字，表示该字符串中有多少个大写字母“B”
接着编写一个函数countChar,与countBs作用一样，区别是接受第二个参数，指定需要统计的字符，并使用这个新函数重写函数countBs
 */
function countBs(str) {
    return countChar(str,"B");
}
function countChar(str,s){
    let string = String(str);
    let count = 0;
    for (let i=0;i<string.length;i++){
        if (string.charAt(i)===s)
            count++;
    }
    console.log(count);
}
countBs("irthdayBBB");
countChar("songww","w");
