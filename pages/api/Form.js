export default async function (req, res) {
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
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready");
              resolve(success);
          }
      });
  });
    const mailData = {
      from: user,
      to: 'gomezgabriel24@hotmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err, info) {
        if(err){
          console.log(err)
          reject(err);
        }
        else{
          console.log(info)
          resolve(info);
        }   
      });
    });

      res.status(200).end()
  }