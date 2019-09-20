# Functions
分清局部变量与全局变量
```
var x = "outside";
var f1 = function(){
    var x = "inside f1";
};
f1();
console.log(x);
```
==> outside
