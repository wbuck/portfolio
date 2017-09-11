const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

function sendEmail(req, res) {
  const message = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.USER_EMAIL,
    to: process.env.USER_EMAIL,
    replyTo: message.email,
    subject: message.subject,
    text: message.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        status: 500,
        data: null,
        message: 'An error was encountered while sending the email.'
      });
    } else {
      res.status(200).json({
        status: 200,
        data: [message],
        message: 'Message Sent'
      });
    }
  });
}

router.post('/', (req, res) => {
  try {
    sendEmail(req, res);
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
