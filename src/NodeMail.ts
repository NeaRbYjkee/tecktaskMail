import * as nodemailer from 'nodemailer'
import {generateUUID} from "./helpers/uuid";

export class NodeMail {
    static mail = {
        from: 'alex@gmail.com',
        to: 'aleksii@google.com',
        subject: generateUUID(),
        text: "Verification link",
        link: "https://www.google.com",
        html: "<p class = 'verify'>Follow the link to verify email</p>" +
            "<a class=\"verifyLink\" href=\"https://www.google.com\" target=\"_blank\">Verification link</a>"
    }

    static host = {
        host: 'localhost',
        port: 1025,
        ignoreTLS: true
    }

    static send() {
        nodemailer.createTransport(this.host).sendMail(this.mail, (error: Error | null, info: nodemailer.SentMessageInfo) => {
                if (error) {
                    console.log('Ошибка отправки письма:', error);
                } else {
                    console.log('Письмо успешно отправлено:', info.response);
                }
            }
        )
    }
}