import { Router } from 'express';
import { sendEmail } from '../utils/mail';
import { config } from '../config';

let router = Router();

router.post('/', (req, res, next) => {
	let messageBody = `Name: ${req.body.name}
										Email: ${req.body.email}
										Subject: ${req.body.subject}
										Message: ${req.body.message}`;
	sendEmail(
		config.EMAIL,
		'no-reply@davidmayes.io',
		'New Contact Form Submission',
		messageBody
	)
		.then(response => {
			res.sendStatus(201);
		})
		.catch(err => {
			next(err);
		});
});

export default router;
