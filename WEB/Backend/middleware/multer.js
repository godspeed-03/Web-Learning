const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/Public/ProfileImg')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = 'ProfileImg';
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

  export default upload