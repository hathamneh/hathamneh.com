'use server';

import { sendEmail } from "@/lib/email";

export async function submitEmail(prevState: { success?: boolean }, formData: FormData) {
  const name = formData.get('name') as string;
  const company = formData.get('company') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  // Send email logic here
  console.log({ name, company, email, phone, message });

  await sendEmail(
    email,
    `${name} Contacted | hathamneh.com`,
    `
      Name: ${name}<br />
      Company: ${company}<br />
      Email: ${email}<br />
      Phone: ${phone}<br />
      <br />
      Message: <br /><br />
      ${message.replaceAll("\n", "<br />")}
    `
  );

  return { success: true } as { success?: boolean };
}
