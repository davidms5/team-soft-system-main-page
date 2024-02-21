import { EmailTemplate } from '../../components/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const correoPersonal = process.env.CORREO_PERSONAL;

export default async (req, res) => {

    if(req.method !== "POST") return res.status(405).json({ error: 'Method Not Allowed' });

    const {Name, email, message} = req.body;

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [correoPersonal],
    subject: 'Mensaje de posible cliente',
    react: EmailTemplate({ Name, message, email }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  return res.status(200).json(data);
};
