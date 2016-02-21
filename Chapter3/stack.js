var Node = function (value) {
  this.value = value;
  this.previous = null;
};

var Stack = function () {
  this.top = null;
  this.count = 0;
};

Stack.prototype.push = function (value) {
  var newNode = new Node(value),
      current = this.top;

      if (!current) {
        this.top = newNode;
        this.count += 1;
        return this.top;
      } else {
        var temp = current;
        this.top = newNode;
        this.top.previous = temp;
        this.count += 1;
        return this.top;
      }
};

Stack.prototype.pop = function () {
    var top = this.top;åå
        previous = top.previous;

        this.top = previous;
        this.count -= 1;
        return previous;
};

Stack.prototype.peek = function () {
    return this.top.value;
};

Stack.prototype.isEmpty = function () {
    return this.count === 0;
};

// var Stack = new Stack();
//
// Stack.push("a");
// Stack.push("b");
// Stack.push("c");
// Stack.pop();
// console.log(Stack.peek());
// console.log(Stack.isEmpty());

// Stack.pop();
// Stack.pop();
// console.log("---");
// console.log(Stack.isEmpty());
