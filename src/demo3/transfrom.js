export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  root
      .find(j.ImportDeclaration, { source: { value: "@alifd/next" } })
      .forEach((path) => {
          path.node.source.value = "antd";
      })
  root
    .find(j.JSXElement, {openingElement: { name: { name: 'h2' } }})
    .forEach((path) => {
        path.node.children = [j.jsxText('转译后')]
      })
  root
      .find(j.JSXOpeningElement, { name: { name: 'Button' } })
      .find(j.JSXAttribute)
      .forEach((path) => {
          const attr = path.node.name
          const attrVal = ((path.node.value || {}).expression || {}).value ? 
              path.node.value.expression : 
              path.node.value

          if (attr.name === "type") {
              if (attrVal.value === 'normal') {
                  attrVal.value = 'default'
              }
          }

          if (attr.name === "size") {
              if (attrVal.value === 'medium') {
                attrVal.value = 'middle'
              }
          }

          if (attr.name === "warning") {
              attr.name = 'danger'
          }

          if (attr.name === "text") {
              const attrType = path.parentPath.value.filter(item => item.name.name === 'type')
              attr.name = 'type'
              if (attrType.length) {
                  attrType[0].value.value = 'link'
                  j(path).replaceWith('')
              } else {
                  path.node.value = j.stringLiteral('link')
              }
          }
      });

  return root.toSource();
}