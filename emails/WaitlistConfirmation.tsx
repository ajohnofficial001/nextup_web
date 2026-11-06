import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components';

interface WaitlistConfirmationEmailProps {
  name: string;
  school: string;
  classYear: string;
  major?: string;
}

export default function WaitlistConfirmationEmail({
  name,
  school,
  classYear,
  major,
}: WaitlistConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the NextUp waitlist!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome to NextUp! 🚀</Heading>
          <Text style={text}>Hi {name},</Text>
          <Text style={text}>
            Thanks for joining the NextUp waitlist from <strong>{school}</strong>! As a <strong>{classYear}</strong>
            {major && ` studying ${major}`}, you're taking the right step toward landing your dream internships, 
            scholarships, and research opportunities.
          </Text>
          <Text style={text}>
            We're building an AI-powered career roadmap designed specifically
            for underclassmen—and any student ready to get ahead early. Here's
            what you can expect:
          </Text>
          <ul style={list}>
            <li style={listItem}>
              📱 Early access to our iOS and Android apps
            </li>
            <li style={listItem}>
              🎯 Personalized semester-by-semester roadmaps
            </li>
            <li style={listItem}>
              💼 Curated internships and scholarships
            </li>
            <li style={listItem}>⏰ Smart deadline tracking</li>
            <li style={listItem}>
              🤖 24/7 AI career agent for resume help and advice
            </li>
          </ul>
          <Text style={text}>
            We'll reach out soon with updates on our launch. In the meantime,
            feel free to reply to this email with any questions!
          </Text>
          <Text style={text}>
            Best,
            <br />
            The NextUp Team
          </Text>
          <Text style={footer}>
            © 2025 NextUp. All rights reserved.
            <br />
            <Link href="https://app-nextup.com" style={link}>
              Visit our website
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 40px',
};

const text = {
  color: '#484848',
  fontSize: '16px',
  lineHeight: '26px',
  padding: '0 40px',
  margin: '16px 0',
};

const list = {
  color: '#484848',
  fontSize: '16px',
  lineHeight: '26px',
  padding: '0 40px',
  margin: '16px 0',
};

const listItem = {
  marginBottom: '12px',
};

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  lineHeight: '24px',
  textAlign: 'center' as const,
  padding: '0 40px',
  marginTop: '32px',
};

const link = {
  color: '#3b82f6',
  textDecoration: 'underline',
};
