

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