import nodemailer from 'nodemailer';

export async function GET() {
  const transporter = nodemailer.createTransport({
    service: 'postfix',
    host: 'localhost',
    secure: false,
    port: 25,
    auth: { user: 'yourlinuxusername@edison.example.com', pass: 'yourlinuxuserpassword' },
    tls: { rejectUnauthorized: false },
  });

  const mailOptions = {
    from: 'yourlinuxusername@edison.example.com',
    to: 'xxxyyyzzz111@gmail.com',
    subject: 'nodemailer test',
    text: 'hope it got there',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
  return new Response(JSON.stringify({ a: 2 }), { status: 200 });
}
