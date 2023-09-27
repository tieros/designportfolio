import nodemailer from 'nodemailer';

export default async function handler(request, response) {
    try {
        // Extract form data from the request
        const { useremail, subject, message } = request.body;

        // Configure Nodemailer to send an email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'elifthedesigndev@gmail.com',
                pass: 'rmyj ixla lqnd etjp',
            },
        });

        const mailOptions = {
            from: useremail,
            to: 'elifthedesigndev@gmail.com',
            subject: subject,
            text: message,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Respond with a success message
        response.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Error sending email' });
    }
}
