import path from 'path'
import fs from 'fs-extra'
const getUploadFiles = (argv = process.argv, cwd = process.cwd()) => {
  let files = argv.slice(1)
  let result = []
  if (files.length > 0) {
    result = files.map(item => {
      if (path.isAbsolute(item)) {
        return {
          path: item
        }
      } else {
        let tempPath = path.join(cwd, item)
        if (fs.existsSync(tempPath)) {
          return {
            path: tempPath
          }
        } else {
          return null
        }
      }
    }).filter(item => item !== null)
  }
  return result
}

export {
  getUploadFiles
}
