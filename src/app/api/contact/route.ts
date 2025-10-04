import { NextResponse } from 'next/server';
import FormData from 'form-data';
import axios, { AxiosResponse } from 'axios';

interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

const SMAILA_INTERNAL_URL = 'http://smaila:1174/';

export async function POST(req: Request) {
  console.log('--- Start POST /api/contact Request ---');

  try {
    console.log('Attempting to parse request body...');
    const body: unknown = await req.json();

    if (
      typeof body !== 'object' ||
      body === null ||
      !('name' in body) ||
      !('email' in body) ||
      !('message' in body)
    ) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { name, email, message } = body as ContactFormPayload;

  

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, or message' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.SMTP_FROM;
    if (!recipientEmail) {
      console.error('Critical Error: SMTP_FROM environment variable is not set.');
      throw new Error('SMTP_FROM environment variable is not set.');
    }

    const formData = new FormData();
    const emailSubject = `New Contact Form Message from ${name}`;
    const emailBody = `You received a new message from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    formData.append('to', recipientEmail);
    formData.append('subject', emailSubject);
    formData.append('body', emailBody);
    formData.append('is_html', 'false');

    console.log(
      `Attempting to send email via Smaila service (Axios) at: ${SMAILA_INTERNAL_URL}`
    );

    let smailaResponse: AxiosResponse;

    try {
      smailaResponse = await axios.post(SMAILA_INTERNAL_URL, formData, {
        headers: formData.getHeaders(),
      });
    } catch (axiosError) {
        if (axios.isAxiosError(axiosError) && axiosError.response) {
            smailaResponse = axiosError.response;
        } else {
            throw axiosError;
        }
    }

    if (smailaResponse.status >= 200 && smailaResponse.status < 300) {
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } else {
      const errorBody = smailaResponse.data ? JSON.stringify(smailaResponse.data) : smailaResponse.statusText;
      console.error('Smaila service failure:', {
        status: smailaResponse.status,
        statusText: smailaResponse.statusText,
        body: errorBody,
      });
      return NextResponse.json(
        { error: 'Mail service failed.', details: errorBody },
        { status: smailaResponse.status }
      );
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('--- API Route Internal Error (500) ---', errorMessage);

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    console.log('--- End POST /api/contact Request ---');
  }
}