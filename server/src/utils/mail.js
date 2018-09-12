import mailgunLoader from 'mailgun-js';
import { config } from '../config';
const apiKey = config.MAILGUN_API_KEY;
const domain = config.MAILGUN_DOMAIN;
let mailgun = mailgunLoader({ apiKey, domain });

function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content
    };
    
    return mailgun.messages().send(data);
}

export { sendEmail };