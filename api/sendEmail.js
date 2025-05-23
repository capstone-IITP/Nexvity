// /api/sendEmail.js (Node.js function)
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, projectType, budget, message } = req.body;

  try {
    const result = await resend.emails.send({
      from: 'Nexvity <team.official@nexvity.com>',
      to: 'team.official@nexvity.com',
      subject: 'New Inquiry from Nexvity',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background: #f9f9f9;">
          <h2 style="color: #0d6efd;">New Inquiry 🚀</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong><br>${message}</p>
      
          <hr style="margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">This message was sent via Nexvity’s contact form.</p>
        </div>
      `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
} 