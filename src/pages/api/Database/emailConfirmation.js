// pages/api/submitForm.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const formData = req.body;

  try {
    await sendConfirmationEmail(formData);
    return res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

const sendConfirmationEmail = async (formData) => {
  // Use Nodemailer to send an email to the user
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    secure: true,
  });

  const mailOptions = {
    from: "admissions@learnbay.co",
    to: formData.email,
    subject: 'Confirmation Email',
    cc: ["support@learnbay.co"],
    html: `<div>Hi ${formData.name},</div><p>Greetings from  Learnbay,</p> <p>We have attached Invoice along with this mail.</p><div>For any clarifications or doubts feel free to reach out to us on : <p><a href="mailto:contacts@learnbay.co">contacts@learnbay.co</a>
    <a href="tel:+916363558632" target="_blank">+91 6363 558 632</a></p></div><p>Please find the attachments below. </P>
    <div>Form Link:</div>
    </p>
    <p>Once you fill out the form; your learning manager will reach out to you over phone and mail to help you out with further process.</p> <p>We wish you all the very Best 👍</p><div>Thanks and Regards</div><div>Admissions Team</div><div>Note:-Refunds and loan cancellation are not applicable beyond the 15-day payment period,regardless of the payment method used, including loan EMIs, full payments, or credit card EMIs.</div>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.error("Error sending email:", error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve();
      }
    });
  });
};
