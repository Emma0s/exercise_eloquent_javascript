/*
一个带锁的箱子，其中存放了一个数组，但只有在箱子被解锁时，才可以访问数组，不允许直接访问_content属性。
编写一个名为withBoxUnlocked的函数，接受一个函数类型的参数，其作用是解锁箱子，执行该函数，无论是正常返回还是抛出异常，在withBoxUnlocked函数返回前都必须锁上箱子。
 */

let box = {
    locked: true,
    unlock: function () {
        this.locked = false;
    },
    lock: function () {
        this.locked = true;
    },
    _content: [],
    get content(){
        if (this.locked)
            throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let locked = box.locked;
    if (!locked)
        return body();
    box.unlock();
    try {
        return body();
    }finally {
        box.lock();
    }
}

withBoxUnlocked(function () {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
}catch (e) {
    console.log("Error raised:",e);
}

console.log(box.locked);
