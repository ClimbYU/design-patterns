class Distribute {
    constructor() {
        this.list = []
    }

    emit(flag) {

    }

    register(...arg) {
        let args = Array.from(arg)
        this.list = this.list.concat(args)
    }

    emit(key) {
        this.list.forEach((item) => {
            item.execute(key)
        })
    }
}

class Subscription {
    constructor(fn) {
        this.fn = fn
    }

    execute(key) {
        return this.fn(key)
    }
}
const fn4 = function () {
    let args = Array.from(arguments)
    console.log(args)
}
const fn5 = function () {
    let args = Array.from(arguments)
    console.log(args)
}
const sub1 = new Subscription(fn4)
const sub2 = new Subscription(fn5)

const distribute = new Distribute()
distribute.register(sub1, sub2)
distribute.emit('广播')