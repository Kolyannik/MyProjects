// let nodemailer = require('nodemailer');
// let smtpTransport = require('nodemailer-smtp-transport');

// mail = (email, password) => {
// let transporter = nodemailer.createTransport(smtpTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   auth: {
//     user: 'vovademidenko5@gmail.com',
//     pass: 'kolya.by'
//   }
// }));

// let mailOptions = {
//   from: 'vovademidenko5@gmail.com',
//   to: `${email}`,
//   subject: 'Mail Check',
//   text: `Its your password: ${password}`
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// })
// }
// module.exports = new mail