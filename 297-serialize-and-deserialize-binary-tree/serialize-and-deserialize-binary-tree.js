/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
 var serialize = function(root) {
    if (!root) return "#";
    return root.val + "," + serialize(root.left) + "," + serialize(root.right);
};

var deserialize = function(data) {
    let vals = data.split(","), i = 0;
    function build() {
        if (vals[i] === "#") return i++, null;
        let node = new TreeNode(parseInt(vals[i++]));
        node.left = build();
        node.right = build();
        return node;
    }
    return build();
};
