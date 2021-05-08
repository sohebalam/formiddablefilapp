import formidable from "formidable"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req, res) => {
  const form = new formidable.IncomingForm()
  form.uploadDir = "./images"
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    // console.log(err, fields, files)
  })
  res.status(200).json({ message: "success" })
}
