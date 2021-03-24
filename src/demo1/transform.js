
/* 
  简单的替换变量值：
  1. 查找find(j.VariableDeclarator)
  2. 直接基于value更改
*/

export default function transformer(file, api) {
  const j = api.jscodeshift;
  return j(file.source)
    .find(j.VariableDeclarator)
    .forEach(path => {
      console.log(path, 'path', path.value.init.value)
      if(path.value.id.name === 'a') { path.value.init.value = 2 }
    })
    .toSource()
}