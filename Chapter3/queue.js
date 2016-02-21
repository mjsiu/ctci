var Node = function (value) {
  this.value = value;
  this.next = null;
};

var Queue = function () {
  this.first = null;
  this.count = 0;
};

Queue.prototype.unshift = function (value) {
  var newNode = new Node(value),
      current = this.first;

      if (!current) {
        this.first = newNode;
        this.count += 1;
      } else {
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
        this.count += 1;
      }
};

Queue.prototype.shift = function () {
    var first = this.first,
        next = first.next;

        this.first = next;
        this.count -= 1;
        return this.first;
};

Queue.prototype.peek = function () {
  return this.first.value;
};

Queue.prototype.isEmpty = function () {
  return this.count === 0;
};

// var Queue = new Queue();
//
// Queue.unshift("a");
// Queue.unshift("b");
// Queue.unshift("c");
// Queue.shift();
// console.log(Queue.first);
// console.log(Queue.peek());
// console.log(Queue.isEmpty());
// Queue.shift();
// Queue.shift();
// console.log(Queue.isEmpty());
