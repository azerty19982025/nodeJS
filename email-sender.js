const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre.email@gmail.com',
    pass: 'votre_mot_de_passe_application'
  }
});

let mailOptions = {
  from: 'votre.email@gmail.com',
  to: 'destinataire@example.com',
  subject: 'Test Node.js',
  text: 'Ceci est un e-mail envoyé avec Node.js'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Erreur :', error);
  } else {
    console.log('Email envoyé : ' + info.response);
  }
});
