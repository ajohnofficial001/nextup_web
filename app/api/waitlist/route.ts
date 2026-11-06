import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WaitlistConfirmationEmail from '../../../emails/WaitlistConfirmation';

export async function POST(request: Request) {
  try {
    const { name, email, school, classYear, major } = await request.json();

    // Validate input
    if (!name || !email || !school || !classYear) {
      return NextResponse.json(
        { error: 'Name, email, school, and class year are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Class year validation
    const validClassYears = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
    if (!validClassYears.includes(classYear)) {
      return NextResponse.json(
        { error: 'Invalid class year' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Local/dev fallback when Resend is not configured
    if (!apiKey) {
      console.info('[waitlist] RESEND_API_KEY missing — accepting signup without sending email', {
        name,
        email,
        school,
        classYear,
        major: major || null,
      });
      return NextResponse.json(
        {
          success: true,
          message: 'Successfully joined the waitlist!',
          mock: true,
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);

    // Send confirmation email to the user
    const { data: userData, error: userError } = await resend.emails.send({
      from: 'NextUp <waitlist@app-nextup.com>',
      to: [email],
      subject: 'Welcome to the NextUp Waitlist! 🚀',
      react: WaitlistConfirmationEmail({ name, school, classYear, major }),
    });

    if (userError) {
      console.error('Error sending user email:', userError);
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      );
    }

    // Send notification to your team
    const { error: teamError } = await resend.emails.send({
      from: 'NextUp Waitlist <waitlist@app-nextup.com>',
      to: [process.env.TEAM_EMAIL || 'jadeyemo004@gmail.com'],
      subject: `New Waitlist Signup: ${name} (${classYear})`,
      html: `
        <h2>New Waitlist Signup!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Class Year:</strong> ${classYear}</p>
        <p><strong>Major:</strong> ${major || 'Not specified'}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    if (teamError) {
      console.error('Error sending team notification:', teamError);
      // Don't fail the request if team notification fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
        data: userData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
