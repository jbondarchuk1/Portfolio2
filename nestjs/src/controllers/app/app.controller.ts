import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app/app.service';
const nodemailer = require('nodemailer');
import Email from '../../models/email/email';
require('dotenv').config();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log("Getting...");
    return this.appService.getHello();
  }

  @Get('/projects')
  async getProjects(): Promise<string> {
    console.log("Getting Projects...");

    return new Promise((resolve, reject) => {
      this.appService.getProjects()
        .then((res) => {
          console.log(res);
          resolve(JSON.stringify(res));
        })
        .catch((err) => reject(err));
    })
  }


  @Post()
  postContact(@Body() body) {


    let email = new Email();
    email.name = body.name;
    email.emailAddress = body.email;
    email.subject = body.subject;
    email.body = body.body;

    console.log(process.env.EMAIL_USER)
    console.log(process.env.EMAIL_PASS)

    console.log("the email send was: " + JSON.stringify(body));
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailOptions = {
      from: email.emailAddress,
      to: process.env.EMAIL_USER,
      subject: email.subject,
      text: email.body,
    }


    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    return 'SUCCESS!';
  }

}
