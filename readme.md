## jscodeshift的使用demo
[jscodeshift](https://github.com/facebook/jscodeshift)的demo不是很多，所以目前不断的积累点如何使用的demo


## Usage
1. 下载git文件
2. npm link 
3. 使用命令行：ast src/demo1， ast src/demo2等等

## 常用命令
### 查找：find, filter, 返回数组
  find 和 filter 主要用于查找和定位我们需要修改的节点。find 方法接受两个参数：type 和 option（可选）。type 即是上文所说的 Type 对象，option 是附加的过滤条件，例如 root.find(j.Identifier, { name: 'get' }) 就表示找到名称为“get”的 Identifier 节点, 返回一个array。当然这只能去做一些简单的过滤，对于复杂的过滤就该 filter 登场了。

### 修改：replaceWith, insertBefore, insertAfter, remove
  + replaceWith: 替换ast节点，如果为空则表示删除；
  + insertBefore: 插在当前节点前面；
  + insertAfter: 插在当前节点前面；
  + remove: 删除节点；
### 遍历：forEach, map, size, at
