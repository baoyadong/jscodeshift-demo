

export default function transformer(file, api) {
  const j = api.jscodeshift;
  return j(file.source)
    .find(j.MemberExpression)
    .filter(path => { // 复杂的过滤函数
      const cObject = path.node.object;
      const cProperty = path.node.property;
      if (cObject && cProperty) {
        return cObject.type === 'Identifier' && 
          cObject.name === 'React' &&
          cProperty.type === 'Identifier' &&
          cProperty.name === 'createClass'
      } else {
        return false
      }
    }).forEach(path => { // 然后使用j.identifier('createReactClass')替换
      j(path).replaceWith(j.identifier('createReactClass'))
    })
    .toSource()
}