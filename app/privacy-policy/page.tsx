import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NextUp",
  description:
    "NextUp Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 pt-32">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-syne text-4xl md:text-5xl font-bold text-black mb-4">
              Privacy Policy
            </h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-black/60 text-sm font-dm-sans">
              <p>
                <strong>Last Updated:</strong> 26th December, 2025
              </p>
              <p>
                <strong>Effective Date:</strong> 26th December, 2025
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none font-dm-sans text-black/80 leading-relaxed">
            {/* Section 1: Introduction */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                1. Introduction
              </h2>
              <p className="mb-4">
                Welcome to NextUp ("we," "our," or "us"). NextUp is a mobile
                application designed to help college students discover
                opportunities, manage their career development, and receive
                personalized guidance. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our mobile application and related services (collectively,
                the "Service").
              </p>
              <p>
                By using the Service, you agree to the collection and use of
                information in accordance with this Privacy Policy. If you do not
                agree with our policies and practices, please do not use the
                Service.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                2. Information We Collect
              </h2>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                2.1 Information You Provide to Us
              </h3>

              <h4 className="font-syne text-lg font-semibold text-black mt-4 mb-2">
                Account Information
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Email Address</strong>: Required for account creation
                  and communication
                </li>
                <li>
                  <strong>Password</strong>: Stored securely using
                  industry-standard hashing (bcrypt)
                </li>
                <li>
                  <strong>Google Account Information</strong>: If you choose to
                  sign in with Google, we collect your Google ID and basic
                  profile information (name, email) provided by Google
                </li>
              </ul>

              <h4 className="font-syne text-lg font-semibold text-black mt-4 mb-2">
                Profile Information
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Personal Details</strong>: First name, last name
                </li>
                <li>
                  <strong>Academic Information</strong>: School name, major,
                  graduation year, academic year level
                </li>
                <li>
                  <strong>Career Information</strong>: Interests and skills,
                  career goals and experience summary, target roles and
                  industries, preferred job locations
                </li>
              </ul>

              <h4 className="font-syne text-lg font-semibold text-black mt-4 mb-2">
                Resume and CV Data
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Uploaded Files</strong>: Resume/CV documents (PDF,
                  DOCX formats)
                </li>
                <li>
                  <strong>Extracted Information</strong>: We automatically
                  extract and store:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Contact information (name, email, phone, address)</li>
                    <li>
                      Professional links (LinkedIn, GitHub, portfolio URLs)
                    </li>
                    <li>Education history</li>
                    <li>Work experience</li>
                    <li>Projects and achievements</li>
                    <li>Skills (technical and soft skills)</li>
                    <li>Languages</li>
                    <li>Certifications and awards</li>
                    <li>Professional summary</li>
                  </ul>
                </li>
              </ul>

              <h4 className="font-syne text-lg font-semibold text-black mt-4 mb-2">
                User-Generated Content
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Chat Messages</strong>: Conversations with our AI
                  assistant
                </li>
                <li>
                  <strong>Roadmaps</strong>: Personalized career roadmaps and
                  tasks you create or we generate
                </li>
                <li>
                  <strong>Opportunity Tracking</strong>: Opportunities you save,
                  track, or apply to, including application status and checklist
                  items
                </li>
              </ul>

              <h4 className="font-syne text-lg font-semibold text-black mt-4 mb-2">
                Notification Preferences
              </h4>
              <p className="mb-4">
                Your preferences for receiving notifications (deadline reminders,
                roadmap reminders, new opportunities)
              </p>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                2.2 Information Collected Automatically
              </h3>

              <h4 className="font-syne text-lg font-semibold text-black mt-4 mb-2">
                Device Information
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Device Tokens</strong>: Push notification tokens for
                  your mobile device (Expo Push Tokens)
                </li>
                <li>
                  <strong>Platform Information</strong>: Device platform (iOS,
                  Android) and app version
                </li>
                <li>
                  <strong>Device Usage</strong>: Last used timestamp for device
                  management
                </li>
              </ul>

              <h4 className="font-syne text-lg font-semibold text-black mt-4 mb-2">
                Usage Data
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>App Activity</strong>: Features you use, pages you
                  visit, interactions with the Service
                </li>
                <li>
                  <strong>Session Information</strong>: Login times, session
                  duration
                </li>
              </ul>

              <h4 className="font-syne text-lg font-semibold text-black mt-4 mb-2">
                Technical Information
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Log Data</strong>: Server logs, error reports, and
                  diagnostic information
                </li>
                <li>
                  <strong>IP Address</strong>: Collected for security and
                  analytics purposes
                </li>
              </ul>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                2.3 Information from Third-Party Services
              </h3>
              <h4 className="font-syne text-lg font-semibold text-black mt-4 mb-2">
                Google OAuth
              </h4>
              <p className="mb-4">
                If you sign in with Google, we receive your Google account ID
                and basic profile information (name, email) as provided by
                Google's OAuth service
              </p>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect for the following purposes:
              </p>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                3.1 Service Provision
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Account Management</strong>: Create and manage your
                  account, authenticate your identity
                </li>
                <li>
                  <strong>Personalization</strong>: Provide personalized
                  recommendations for opportunities, career roadmaps, and advice
                </li>
                <li>
                  <strong>AI Services</strong>: Process your chat messages and
                  resume data through AI services to provide:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Career advice and guidance</li>
                    <li>Resume suggestions and improvements</li>
                    <li>
                      Opportunity recommendations based on your profile
                    </li>
                    <li>Personalized roadmap generation</li>
                  </ul>
                </li>
              </ul>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                3.2 Communication
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Email Notifications</strong>: Send verification
                  emails, password reset codes, and important service updates
                </li>
                <li>
                  <strong>Push Notifications</strong>: Send notifications about:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Opportunity deadlines</li>
                    <li>Roadmap reminders</li>
                    <li>New opportunities matching your profile</li>
                    <li>System updates and important announcements</li>
                  </ul>
                </li>
              </ul>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                3.3 Service Improvement
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Analytics</strong>: Analyze usage patterns to improve
                  our Service
                </li>
                <li>
                  <strong>Feature Development</strong>: Develop new features and
                  enhance existing ones
                </li>
                <li>
                  <strong>Quality Assurance</strong>: Monitor and improve
                  service quality and user experience
                </li>
              </ul>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                3.4 Legal and Security
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Security</strong>: Protect against fraud, unauthorized
                  access, and security threats
                </li>
                <li>
                  <strong>Legal Compliance</strong>: Comply with applicable
                  laws, regulations, and legal processes
                </li>
                <li>
                  <strong>Enforcement</strong>: Enforce our Terms of Service and
                  other agreements
                </li>
              </ul>
            </section>

            {/* Section 4: Third-Party Services */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                4. Third-Party Services and Data Sharing
              </h2>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                4.1 AI Service Provider (Anthropic)
              </h3>
              <p className="mb-4">
                We use <strong>Anthropic Claude AI</strong> to power our chat
                assistant, resume analysis, and recommendation features. When you
                use these features, your messages, profile data, and resume
                information are sent to Anthropic's API. Anthropic processes
                this data according to their privacy policy and terms of
                service. We do not use your data to train Anthropic's models
                without your explicit consent.
              </p>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                4.2 Authentication Services
              </h3>
              <p className="mb-4">
                <strong>Google OAuth</strong>: If you sign in with Google, your
                authentication is handled by Google according to Google's privacy
                policy.
              </p>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                4.3 Push Notification Services
              </h3>
              <p className="mb-4">
                <strong>Expo Push Notifications</strong>: We use Expo's push
                notification service to send notifications to your device. Device
                tokens are stored securely and used only for sending
                notifications you've opted into.
              </p>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                4.4 Email Services
              </h3>
              <p className="mb-4">
                <strong>Email Delivery</strong>: We use email service providers
                (SMTP) to send verification and notification emails. Your email
                address is shared with these providers solely for email delivery
                purposes.
              </p>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                4.5 Data Storage
              </h3>
              <p className="mb-4">
                <strong>Database</strong>: Your data is stored in a PostgreSQL
                database hosted by our service provider. All data is encrypted in
                transit and at rest.
              </p>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                4.6 No Sale of Personal Data
              </h3>
              <p className="mb-4">
                <strong>We do not sell, rent, or trade your personal
                information</strong> to third parties for marketing purposes. We
                do not share your personal information except as described in
                this Privacy Policy.
              </p>
            </section>

            {/* Section 5: Data Security */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                5. Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Encryption</strong>: Data is encrypted in transit
                  (HTTPS/TLS) and at rest
                </li>
                <li>
                  <strong>Password Security</strong>: Passwords are hashed using
                  bcrypt before storage
                </li>
                <li>
                  <strong>Access Controls</strong>: Access to personal data is
                  restricted to authorized personnel only
                </li>
                <li>
                  <strong>Regular Security Updates</strong>: We regularly update
                  our systems and dependencies to address security
                  vulnerabilities
                </li>
                <li>
                  <strong>Secure Authentication</strong>: We use industry-standard
                  authentication methods (JWT tokens, OAuth)
                </li>
              </ul>
              <p className="mb-4">
                However, no method of transmission over the internet or
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your information, we
                cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 6: Data Retention */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                6. Data Retention
              </h2>
              <p className="mb-4">
                We retain your personal information for as long as necessary to
                provide the Service and fulfill the purposes described in this
                Privacy Policy:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Account Data</strong>: Retained while your account is
                  active and for a reasonable period after account deletion for
                  legal and security purposes
                </li>
                <li>
                  <strong>Resume Data</strong>: Retained until you delete your
                  account or remove your resume
                </li>
                <li>
                  <strong>Chat Messages</strong>: Retained to provide
                  conversation history and improve service quality
                </li>
                <li>
                  <strong>Usage Data</strong>: Retained for analytics and
                  service improvement purposes
                </li>
              </ul>
              <p>
                You may request deletion of your account and associated data at
                any time (see Section 7).
              </p>
            </section>

            {/* Section 7: Your Rights */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="mb-4">
                You have the following rights regarding your personal information:
              </p>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                7.1 Access and Correction
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>View Your Data</strong>: You can access your profile
                  information, resume data, and other account information through
                  the app
                </li>
                <li>
                  <strong>Update Information</strong>: You can update your
                  profile, preferences, and other information at any time through
                  the app settings
                </li>
              </ul>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                7.2 Data Deletion
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Delete Account</strong>: You can request deletion of
                  your account and all associated data by contacting us or using
                  account deletion features in the app
                </li>
                <li>
                  <strong>Delete Specific Data</strong>: You can delete specific
                  data (e.g., resume, chat history) through the app
                </li>
              </ul>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                7.3 Communication Preferences
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Email Preferences</strong>: You can update your email
                  preferences in your account settings
                </li>
                <li>
                  <strong>Push Notifications</strong>: You can control push
                  notifications through your device settings and app preferences
                </li>
                <li>
                  <strong>Opt-Out</strong>: You can opt out of non-essential
                  communications at any time
                </li>
              </ul>

              <h3 className="font-syne text-xl font-semibold text-black mt-6 mb-3">
                7.4 Third-Party Services
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Google Sign-In</strong>: You can disconnect your Google
                  account from NextUp at any time
                </li>
                <li>
                  <strong>Revoke Access</strong>: You can revoke access to
                  third-party services through your account settings
                </li>
              </ul>
            </section>

            {/* Section 8: Children's Privacy */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                8. Children's Privacy
              </h2>
              <p className="mb-4">
                NextUp is designed for college students and adults. We do not
                knowingly collect personal information from children under 13
                years of age. If you are a parent or guardian and believe your
                child has provided us with personal information, please contact
                us immediately. If we become aware that we have collected
                personal information from a child under 13, we will take steps to
                delete such information.
              </p>
            </section>

            {/* Section 9: International Data Transfers */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                9. International Data Transfers
              </h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries
                other than your country of residence. These countries may have
                data protection laws that differ from those in your country. By
                using the Service, you consent to the transfer of your
                information to these countries.
              </p>
            </section>

            {/* Section 10: CCPA */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                10. California Privacy Rights (CCPA)
              </h2>
              <p className="mb-4">
                If you are a California resident, you have additional rights under
                the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Right to Know</strong>: You can request information
                  about the categories and specific pieces of personal information
                  we collect, use, and disclose
                </li>
                <li>
                  <strong>Right to Delete</strong>: You can request deletion of
                  your personal information
                </li>
                <li>
                  <strong>Right to Opt-Out</strong>: You can opt out of the sale
                  of personal information (we do not sell personal information)
                </li>
                <li>
                  <strong>Non-Discrimination</strong>: We will not discriminate
                  against you for exercising your privacy rights
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information
                provided in Section 12.
              </p>
            </section>

            {/* Section 11: GDPR */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                11. European Privacy Rights (GDPR)
              </h2>
              <p className="mb-4">
                If you are located in the European Economic Area (EEA), you have
                certain data protection rights under the General Data Protection
                Regulation (GDPR):
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Right of Access</strong>: You have the right to access
                  your personal data
                </li>
                <li>
                  <strong>Right to Rectification</strong>: You have the right to
                  correct inaccurate personal data
                </li>
                <li>
                  <strong>Right to Erasure</strong>: You have the right to request
                  deletion of your personal data
                </li>
                <li>
                  <strong>Right to Restrict Processing</strong>: You have the
                  right to restrict how we process your data
                </li>
                <li>
                  <strong>Right to Data Portability</strong>: You have the right
                  to receive your data in a portable format
                </li>
                <li>
                  <strong>Right to Object</strong>: You have the right to object
                  to certain processing activities
                </li>
                <li>
                  <strong>Right to Withdraw Consent</strong>: Where processing is
                  based on consent, you have the right to withdraw it
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information
                provided in Section 12.
              </p>
            </section>

            {/* Section 12: Changes */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or other
                factors. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Posting the updated Privacy Policy in the app</li>
                <li>
                  Updating the "Last Updated" date at the top of this Privacy
                  Policy
                </li>
                <li>
                  Sending you an email notification (if you have provided an email
                  address)
                </li>
                <li>Displaying a prominent notice in the app</li>
              </ul>
              <p>
                Your continued use of the Service after any changes to this
                Privacy Policy constitutes your acceptance of the updated policy.
              </p>
            </section>

            {/* Section 13: Local Storage */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                13. Local Storage and Tracking Technologies
              </h2>
              <p className="mb-4">
                Our mobile app may use local storage and similar technologies to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Maintain your session and authentication state</li>
                <li>Improve app performance and user experience</li>
                <li>Store cached data for offline functionality</li>
              </ul>
              <p className="mb-4">
                We do not use cookies or tracking technologies for advertising
                purposes. We do not track your activity across other apps or
                websites.
              </p>
            </section>

            {/* Section 14: External Links */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                14. Links to External Websites
              </h2>
              <p className="mb-4">
                Our Service may contain links to external websites (e.g.,
                opportunity application pages, scholarship websites). We are not
                responsible for the privacy practices of these external sites. We
                encourage you to review the privacy policies of any external sites
                you visit through our app.
              </p>
            </section>

            {/* Section 15: Contact */}
            <section className="mb-12">
              <h2 className="font-syne text-2xl font-bold text-black mb-4">
                15. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-black/5 p-6 rounded-lg space-y-2 font-dm-sans">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@nextup.com"
                    className="text-[#3B28CC] hover:underline"
                  >
                    support@nextup.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> [Your Business Address]
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="/"
                    className="text-[#3B28CC] hover:underline"
                  >
                    nextup.com
                  </a>
                </p>
              </div>
              <p className="mt-4 text-sm text-black/60">
                For data protection inquiries or to exercise your privacy rights,
                please include "Privacy Policy Inquiry" in your subject line.
              </p>
            </section>

            {/* Note */}
            <div className="mt-12 p-6 bg-black/5 rounded-lg border-l-4 border-[#3B28CC]">
              <p className="text-sm text-black/70 font-dm-sans italic">
                <strong>Note:</strong> This Privacy Policy should be reviewed by
                legal counsel before publication to ensure compliance with all
                applicable laws and regulations in your jurisdiction. Some
                sections may need to be customized based on your specific business
                practices, location, and legal requirements.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

