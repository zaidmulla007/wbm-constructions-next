---
description: Implement Contact Form Email Submission using Nodemailer
---

This workflow sets up the backend and frontend to send emails from the contact form.

1.  **Install Dependencies**
    Run the following command to install the necessary packages:
    ```bash
    npm install nodemailer
    npm install --save-dev @types/nodemailer
    ```

2.  **Create API Route**
    Create the file `app/api/contact/route.ts` with the following content:
    ```typescript
    import { NextResponse } from 'next/server';
    import nodemailer from 'nodemailer';

    export async function POST(req: Request) {
      try {
        const { name, email, phone, subject, message } = await req.json();

        // 1. Validate Input
        if (!name || !email || !message) {
          return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Sending to yourself
          replyTo: email,
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
      } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        );
      }
    }
    ```

3.  **Update Contact Component**
    Update `app/components/Contact.tsx` to handle the form submission:
    - Add loading state: `const [isSubmitting, setIsSubmitting] = useState(false);`
    - Update `handleSubmit` function to fetch `/api/contact`.
    - Handle success and error states (alert or toast).
