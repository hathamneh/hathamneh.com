import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const sendEmail = async (to: string, subject: string, html: string) => {
  if (!process.env.MAILERSEND_API_KEY || !process.env.SMTP_FROM || !process.env.SMTP_CONTACT_EMAIL) {
    throw new Error('MAILERSEND_API_KEY, SMTP_FROM, or SMTP_CONTACT_EMAIL is not defined');
  }

  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY,
  });

  const sentFrom = new Sender(process.env.SMTP_FROM, "Haitham Website");

  const recipients = [
    new Recipient(process.env.SMTP_CONTACT_EMAIL, "Haitham Alathamneh")
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(subject)
    .setHtml(html)
    .setText(html);

  await mailerSend.email.send(emailParams);
};
