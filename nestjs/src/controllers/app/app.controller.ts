import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app/app.service';
const nodemailer = require('nodemailer');
import Email from '../../models/email/email';
require('dotenv').config();

/**
 * The root controller is the only one in the portfolio.
 * It controls the API for getting projects and sending emails.
 * It also has a Hello World endpoint for testing purposes.
 */
@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) { }

  /**
   * Hello World is returned with a GET on the root endpoint
   * @returns 'hello world': string
   */
  @Get()
  getHello(): string {
    console.log("Getting...");
    return this.appService.getHello();
  }

  /**
   * The /projects endpoint queries the database and returns a json list of
   * projects in a single json string.
   * 
   * @returns Promise<JSON string> (list of projects)
   */
  @Get('/projects')
  async getProjects(): Promise<string> {
    console.log("Getting Projects...");

    // wait for the projects to be fetched as an array of objects, then await a promise and return the json string result
    return new Promise((resolve, reject) => {
      this.appService.getProjects()
        .then((res) => {
          console.log(res);
          resolve(JSON.stringify(res));
        })
        .catch((err) => reject(err));
    })
  }


  /**
   * Post an email in the form of json, send to jason.r.bondarchuk@gmail.com
   * @param body expects an email object parsed from json => {name, email, subject, body}
   * @returns string: SUCCESS! or ERROR!
   */
  @Post()
  postContact(@Body() body) {

    // parse email from javascript object
    let email = new Email();
    email.name = body.name;
    email.emailAddress = body.email;
    email.subject = body.subject;
    email.body = body.body;

    // create link to GMail SMTP servers
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

    // configure the email that will show up in the inbox
    const mailOptions = {
      from: email.emailAddress,
      to: process.env.EMAIL_USER,
      subject: email.subject,
      text: email.body,
    }


    // send the email. If an error happens, return the error. By default return success.
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
        return 'ERROR!'
      } else {
        console.log('Email sent:', info.response);
      }
    });

    return 'SUCCESS!';
  }

}
