const express = require('express');
const router = express.Router();
let nodemailer = require('nodemailer');

function sendEmail(req, res) {
  const address = 'wbuckley15@hotmail.com';
  const message = req.body;
  let transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
      user: 'wbuckley15@hotmail.com',
      pass: '*******'
    }
  });

  let mailOptions = {
    from: address,
    to: address,
    replyTo: message.email,
    subject: message.subject,
    text: message.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
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
  sendEmail(req, res);
});

module.exports = router;
