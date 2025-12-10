# NextUp Landing Page - Waitlist Setup

## Resend + React Email Integration

This landing page uses Resend for sending confirmation emails to waitlist signups.

### Setup Instructions

1. **Get your Resend API Key**
   - Sign up at [resend.com](https://resend.com)
   - Go to [API Keys](https://resend.com/api-keys)
   - Create a new API key
   - Copy the key (starts with `re_`)

2. **Configure Environment Variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Then edit `.env.local` and add:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   TEAM_EMAIL=your-email@domain.com
   ```

3. **Verify Your Domain (Optional but Recommended)**
   - In Resend dashboard, go to [Domains](https://resend.com/domains)
   - Add your domain (e.g., `nextup.app`)
   - Follow DNS verification steps
   - Update the `from` field in `app/api/waitlist/route.ts`:
     ```typescript
     from: 'NextUp <noreply@nextup.app>'
     ```

4. **Test the Integration**
   ```bash
   npm run dev
   ```
   - Go to http://localhost:3000
   - Scroll to the waitlist form
   - Submit with your test email
   - Check your inbox for the confirmation email

### How It Works

1. **User submits form** → `components/Waitlist.tsx`
2. **API receives data** → `app/api/waitlist/route.ts`
3. **Two emails sent**:
   - Confirmation to user (beautiful React Email template)
   - Notification to your team email

### Features

✅ Beautiful email templates with React Email
✅ Email validation
✅ Loading states
✅ Error handling
✅ Team notifications
✅ User confirmation emails

### Free Tier Limits

- **Resend Free**: 3,000 emails/month, 100 emails/day
- Perfect for early waitlist!

### Customization

**Email Template**: Edit `emails/WaitlistConfirmation.tsx`
**API Logic**: Edit `app/api/waitlist/route.ts`
**Form UI**: Edit `components/Waitlist.tsx`

### Adding to a Database (Optional)

To store waitlist signups in a database:

1. Install Supabase/Prisma/Airtable client
2. Add database insert in `app/api/waitlist/route.ts` after validation
3. Example with Supabase:
   ```typescript
   import { createClient } from '@supabase/supabase-js'
   
   const supabase = createClient(
     process.env.SUPABASE_URL!,
     process.env.SUPABASE_KEY!
   )
   
   await supabase.from('waitlist').insert({ name, email })
   ```

### Troubleshooting

**Emails not sending?**
- Check your API key is correct in `.env.local`
- Verify the key has proper permissions
- Check Resend dashboard logs

**Getting 401 errors?**
- Restart dev server after adding `.env.local`
- Verify API key format (should start with `re_`)

**Emails going to spam?**
- Verify your domain in Resend
- Use a verified domain in the `from` field

### Production Checklist

- [ ] Add verified domain in Resend
- [ ] Update `from` email addresses
- [ ] Update team notification email
- [ ] Test with real email addresses
- [ ] Add rate limiting (optional)
- [ ] Consider adding to database for backup

---

Need help? Check [Resend docs](https://resend.com/docs) or email support@nextup.app
