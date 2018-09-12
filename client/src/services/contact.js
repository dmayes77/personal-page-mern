import * as baseService from './base';

function sendContactEmail(name, email, subject, message) {
    return baseService.post('/api/contact', {
        name,
        email,
        subject,
        message
    });
}

export { sendContactEmail }