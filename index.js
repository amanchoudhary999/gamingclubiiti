const express=require('express');
const app=express();
const path=require('path')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const {readFile}=require('fs').promises;
// Serve static files with correct MIME types
app.use(express.static('public', {
  setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css');
      }
  }
}));


app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const readHtmlFiles = async () => {
  about = await readFile(path.join(process.cwd(), 'public', 'about_page', 'about.html'), 'utf-8');
  games_parti = await readFile(path.join(process.cwd(), 'public', 'games_parti', 'game.html'), 'utf-8');
  tournaments = await readFile(path.join(process.cwd(), 'public', 'tournaments', 'tournaments.html'), 'utf-8');
}
readHtmlFiles();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/tournaments',(req,res)=>{
        res.send(tournaments);
})
app.get('/games_parti',(req,res)=>{
        res.send(games_parti)
})
app.get('/about_page',(req,res)=>{
    res.send(about);
})
app.post('/query', (req,res)=>{
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,  // User's email
    to: process.env.RECIPIENT_EMAIL,  
    subject: `Query from ${name} `,  
    html: message +  `<br>.The sender's email id is ${email}`,  
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(`<h1>Error sending message</h1>`);
    }
    res.redirect('./');
  });
});

app.listen(3000)
