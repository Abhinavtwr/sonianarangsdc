const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// === 1. Configure Nodemailer Transport ===
// Example using Gmail — or replace with your SMTP credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your app password
  },
});

app.get('/', (req, res) => {
  res.send('Backend is working!');
});


// === 2. Registration form ===
app.post('/register', (req, res) => {
  const { name, email, phone, course } = req.body;
  console.log('Registration form:', req.body);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL, // your email (where you’ll get notifications)
    subject: 'New Registration Form Submission',
    html: `
      <h3>New Registration Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Course:</strong> ${course}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Error sending registration email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    } else {
      res.json({ message: 'Registration received and emailed!' });
    }
  });
});

// === 3. Contact form ===
app.post('/contact', (req, res) => {
  const { name, email, message, phone} = req.body;
  console.log('Contact form:', req.body);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: 'New Contact Form Message',
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>phone:</strong> ${phone}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Error sending contact email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    } else {
      res.json({ message: 'Message received and emailed!' });
    }
  });
});

// === 4. Newsletter signup ===
app.post('/index', (req, res) => {
  const { email } = req.body;
  console.log('Newsletter signup:', req.body);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: 'New Newsletter Subscription',
    html: `
      <h3>New Newsletter Signup</h3>
      <p><strong>Email:</strong> ${email}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Error sending newsletter email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    } else {
      res.json({ message: 'Subscribed and emailed successfully!' });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
