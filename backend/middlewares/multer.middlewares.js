import multer from "multer"
import path from "path"

const __dirname = path.resolve();

const storage = multer.diskStorage({
    destination: path.join(__dirname, './public/temp'),
    // destination: function (req, file, cb) {
    //   cb(null, "./public/temp")
    // },
    filename: function (req, file, cb) {
       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + "-" + uniqueSuffix)
    }
  })
  
 export  const upload = multer({ storage: storage })
//  export const upload = multer({ dest: "public/temp" })