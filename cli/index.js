const path = require('path')
const fs = require('fs')
const execa = require('execa');
const jscodeshiftBin = require.resolve('.bin/jscodeshift');

module.exports.main = async () => {
  const astFilesDir = path.resolve(process.argv[2]) // 获取文件的绝对路径，这个还挺骚气的
  const [source, transferPath] = fs.readdirSync(astFilesDir) // 获取目录下的文件
  const outdrr = await execa.sync(
    jscodeshiftBin, 
    ['-t', path.join(astFilesDir, transferPath), path.join(astFilesDir, source)]
  )
 
  if (outdrr.failed || outdrr.stderr) {
    console.log(`编译出错： ${JSON.stringify(outdrr, null, 2)}`)
    return
  }
  console.log(`编译✅：`, outdrr.stdout)
}
