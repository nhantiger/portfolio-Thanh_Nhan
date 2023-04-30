require('dotenv').config()

const sgMail=require('@sendgird/mail')

const {SG_API_KEY, FROM_MAIL, TO_EMAIL}=process.env

sgMail.setApiKey(SG_API_KEY)