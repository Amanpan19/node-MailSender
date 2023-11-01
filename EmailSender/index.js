const { error } = require('console');
const emailSender = require('nodemailer');
var transporter = emailSender.createTransport({
    service : 'gmail',
    auth: {
        user: '', // your mail
        pass: '' //  your application password of gmail.. // go to app password of your google account and generate one.
    }
});

var mailOptions = {
    from:'', //your mail
    to:'', // mails to which you want to send mails
    subject:'Mail through Node.js',
    text:`Hello there,\n\nThis email is being sent using Node.js! 🚀\n\nI hope you're doing well. This is a demonstration of how to send emails via Node.js using the Nodemailer library.\n\nBest regards`
};

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent successfully..Yay');
    }
})
