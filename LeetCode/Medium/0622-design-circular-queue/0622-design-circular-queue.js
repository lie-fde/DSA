/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.queue = new Array(k)
    this.capacity = k
    this.currentLength = 0
    this.front = -1
    this.rear = -1
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false
    }
    this.rear = (this.rear + 1) % this.capacity
    this.queue[this.rear] = value
    this.currentLength += 1
    if (this.front == -1) {
        this.front = this.rear
    }

    return true

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false
    }
    let item = this.queue[this.front]
    this.queue[this.front] = null
    this.front = (this.front + 1) % this.capacity
    this.currentLength -= 1
    if (this.currentLength === 0) {
        this.rear = -1
        this.front = -1
    }
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    return this.isEmpty() ? -1 : this.queue[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    return this.isEmpty() ? -1 : this.queue[this.rear]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.currentLength === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.currentLength === this.capacity
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */