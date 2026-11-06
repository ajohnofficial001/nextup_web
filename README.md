# NextUp Landing

Marketing site and waitlist for **NextUp** — an AI-powered career roadmap mobile app for underclassmen and students chasing internships, scholarships, and research roles.

Built with Next.js, TypeScript, Tailwind CSS, React Email, and Resend.

## Run locally

```bash
npm install
npm run dev -- -p 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Waitlist emails (optional)

Without env vars, waitlist submissions still succeed in **mock mode** (logged server-side, no email sent).

To send real confirmation emails:

1. Copy `.env.local.example` → `.env.local`
2. Add a [Resend](https://resend.com) API key and team inbox
3. Restart the dev server

See `WAITLIST_SETUP.md` for domain verification and template details.

## Project layout

- `app/` — pages, layout, waitlist API route
- `components/` — landing sections (Hero, Services, Waitlist, …)
- `emails/` — React Email confirmation template
- `public/` — logos and static assets

## Source

Scaffolded from [ajohnofficial001/nextup_web](https://github.com/ajohnofficial001/nextup_web) (`nextup-landing`).
