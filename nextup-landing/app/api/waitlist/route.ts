import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WaitlistConfirmationEmail from '../../../emails/WaitlistConfirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send confirmation email to the user
    const { data: userData, error: userError } = await resend.emails.send({
      from: 'NextUp <waitlist@app-nextup.com>', // Change this to your verified domain
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
    const { data: teamData, error: teamError } = await resend.emails.send({
      from: 'NextUp Waitlist <waitlist@app-nextup.com>', // Change this to your verified domain
      to: [process.env.TEAM_EMAIL || 'jadeyemo004@gmail.com'], // Set this in your .env.local
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
        data: userData 
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
