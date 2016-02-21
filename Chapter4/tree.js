var Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var BinarySearchTree = function () {
  this.root = null;
};

BinarySearchTree.prototype.insert = function (value) {
  var newNode = new Node(value);
      current = this.root;

      if (!current) {
        this.root = newNode;
        return;
      } else {
        while (current) {
          if (value < current.value) {
            if (!current.left) {
              current.left = newNode;
              break;
            } else {
              current = current.left;
            }
          } else {
            if (!current.right) {
              current.right = newNode;
              break;
            } else {
              current = current.right;
            }
          }
        }
      }
};

BinarySearchTree.prototype.include = function (value) {
  var found = false,
      current = this.root;

      while (!found && current) {
        if (value < current.value) {
          current = current.left
        } else if (current.value < value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      return found;
};

BinarySearchTree.prototype.traverse = function () {
  
};

var bst = new BinarySearchTree();
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(1);
bst.insert(5);
