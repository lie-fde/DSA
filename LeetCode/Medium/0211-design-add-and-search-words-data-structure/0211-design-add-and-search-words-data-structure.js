
var WordDictionary = function () {
    this.children = {}
    this.isEnd = false
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this
    for (let ch of word) {
        if (!node.children[ch]) {
            node.children[ch] = new WordDictionary()
        }
        node = node.children[ch]
    }
    node.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
   function dfs(node,index){
    if(index == word.length){
        return node.isEnd
    }
    let ch = word[index]
    if(ch!="."){
        if(!node.children[ch]) return false
        return dfs(node.children[ch],index+1)
    }
    for(let key in node.children){
        if(dfs(node.children[key],index+1)){
            return true
        }
    }
    return false

   }
   return dfs(this,0)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */