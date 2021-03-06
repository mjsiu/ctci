var Node = function (data) {
  this.next = null;
  this.data = data;
}

var LinkedList = function () {
  this.list = [];
  this.head = null;
}

LinkedList.prototype.add = function (node) {
  if (this.list.length === 0) {
    this.list.push(node);
    this.head = node;
  } else {
    this.list[this.list.length-1].next = node;
    this.list.push(node);
  }
}

LinkedList.prototype.delete = function (node) {
  if (node === this.head) {
    this.list.splice(0,1);
    this.head = this.list[0];
    return this.list;
  }

  for (var i = 1; i < this.list.length; i++) {
    if (this.list[i] === node) {
      if (this.list[i+1] === undefined) {
        this.list[i+1].next = null;
        this.list.splice(i, 1);
        return this.list;
      } else {
        this.list[i-1].next = this.list[i+1];
        this.list.splice(i, 1);
        return this.list;
      }
    }
  }
}

// 2.1

function removeDups (LinkedList) {
  var seenLinks = {};

  for (var i = 0; i < LinkedList.list.length; i++) {
    var link = LinkedList.list[i];
    if (!seenLinks[link]) {
      seenLinks[link] = true;
      LinkedList.delete(link);
    }
  }
  return LinkedList.list;
}

var LinkedList = new LinkedList(),
    aNode = new Node('a'),
    bNode = new Node('b'),
    cNode = new Node('c');
    dNode = new Node('d');

// 2.2
function kthToLast(LinkedList, k) {
  var listLength = 0;

}
