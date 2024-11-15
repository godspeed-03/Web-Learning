import nodemailer from "nodemailer";
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
import pug from 'pug'

const transporter = nodemailer.createTransport( {
  service: "gmail", 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
  tls: {
    rejectUnauthorized: false, 
  },
} );

const handlebarOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: path.resolve('./views/'), // path to your .hbs files
    defaultLayout: false,
  },
  viewPath: path.resolve('./views/'),
  extName: '.hbs',
};

const emailcontext =  {
  username: 'Satyam',
  otp: '000000',
}

// const html = pug.renderFile(`./views/email-temp.pug`, {
//   url: 'url',
// });

// Use Handlebars as the template engine

transporter.use('compile', hbs(handlebarOptions));

// Function to send the email
export const sendEmail = async () => {
  try {
    // Email options
    const mailOptions = {
      from: 'Test Mail <info.eventdtl@gmail.com>',
      to: 'satyam2001anand@gmail.com',
      subject: 'Testing Handlebars Email',
      // html: html,
      template: 'signup', // name of the .hbs file in your views folder (without extension)
      context: emailcontext
    };

    // Send the email
    const response = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Error sending OTP email:', error);
  }
};
