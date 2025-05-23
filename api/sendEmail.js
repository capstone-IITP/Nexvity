// /api/sendEmail.js (Node.js function)
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, projectType, budget, message } = req.body;

  try {
    const result = await resend.emails.send({
      from: 'Nexvity <noreply@nexvity.com>',
      to: 'team.official@nexvity.com',
      subject: 'New Inquiry from Nexvity',
      html: `
        <h3>New Client Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
} 