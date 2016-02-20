var Node = function (value) {
  this.next = null;
  this.value = value;
}

var LinkedList = function () {
  this.head = null;
}

LinkedList.prototype.add = function (nodeValue) {
  var node = new Node(nodeValue),
      currentNode = this.head;

  if (!currentNode) {
    this.head = node;
    return;
  }

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;
}

LinkedList.prototype.remove = function(val){
    var current = this.head;

    if(current.value == val){
       this.head = current.next;
    }
    else{
      var previous = current;

      while(current.next){
        if(current.value == val){
          previous.next = current.next;
          break;
        }
        previous = current;
        current = current.next;
      }
      if(current.value == val){
        previous.next == null;
      }
    }
  }

//
// var LinkedList = new LinkedList();
//
// LinkedList.add("a");
// LinkedList.add("b");
// LinkedList.add("c");
// LinkedList.add("d");
//
// console.log(LinkedList.head);
// console.log("---");
// LinkedList.remove("a");
// console.log(LinkedList);
// console.log("---");
// LinkedList.remove("b");
// console.log(LinkedList);
