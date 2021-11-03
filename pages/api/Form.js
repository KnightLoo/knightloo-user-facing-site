export default function (req, res) {
    require('dotenv').config()
    const user = process.env.user
    const password = process.env.password

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: user,
        pass: password,
      },
      secure: true,
    })
    const mailData = {
      from: user,
      to: 'gomezgabriel24@hotmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200).end()
  }