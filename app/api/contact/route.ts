import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, project, message } = await req.json();

    if (!name || !email || !project || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content setup
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `New Contact Form Submission: ${project}`,
      text: `
Name: ${name}
Email: ${email}
Project Type: ${project}
Message:
${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Submission</title>
        </head>
        <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px; color: #1c1917;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
            
            <!-- Header -->
            <div style="background-color: #1c1917; color: #ffffff; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px;">New Portfolio Inquiry</h1>
              <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.8; text-transform: uppercase;">Project: ${project}</p>
            </div>

            <!-- Content -->
            <div style="padding: 30px;">
              <p style="font-size: 16px; line-height: 1.5; margin-top: 0;">You have received a new message from your website's contact form.</p>
              
              <div style="background-color: #fafaf9; border: 1px solid #e7e5e4; border-radius: 6px; padding: 20px; margin: 25px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #e7e5e4; width: 100px;"><strong style="color: #78716c; font-size: 14px; text-transform: uppercase;">Name</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #e7e5e4; font-weight: 500;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #e7e5e4;"><strong style="color: #78716c; font-size: 14px; text-transform: uppercase;">Email</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #e7e5e4;">
                      <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none; font-weight: 500;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;"><strong style="color: #78716c; font-size: 14px; text-transform: uppercase;">Project</strong></td>
                    <td style="padding: 8px 0; font-weight: 500;">
                      <span style="background-color: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 999px; font-size: 13px;">${project}</span>
                    </td>
                  </tr>
                </table>
              </div>

              <h2 style="font-size: 14px; text-transform: uppercase; color: #78716c; letter-spacing: 1px; margin: 30px 0 10px 0;">Message Content</h2>
              
              <div style="background-color: #f5f5f4; border-left: 4px solid #1c1917; padding: 20px; border-radius: 0 6px 6px 0;">
                <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #292524; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #fafaf9; padding: 20px; text-align: center; border-top: 1px solid #e7e5e4;">
              <p style="margin: 0; font-size: 13px; color: #a8a29e;">Sent automatically from your Portfolio Website.</p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
