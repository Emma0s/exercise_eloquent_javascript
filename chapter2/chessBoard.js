// 编写程序，创建字符串，表示8*8的网格，并使用换行符分隔行。网格中的每个位置可以是空格或字符“#”，这些字符组成一张棋盘。
// 修改程序，使程序可以处理任意尺寸的棋盘。
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);
