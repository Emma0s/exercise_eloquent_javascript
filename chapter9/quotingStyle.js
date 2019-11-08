/*
将对话的单引号替换成双引号，但保留在缩略形式中使用的单引号
 */
let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/(^|\W)'|'(\W|$)/g,'$1"$2'));
