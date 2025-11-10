
# TreinoGo - Landingpage

This is a code bundle for TreinoGo - Landingpage. The original project is available at https://www.figma.com/design/cVAEZryrmXbXSRylGg3QaG/TreinoGo---Landingpage.

## Environment Variables

This project uses environment variables for configuration. Copy `.env.example` to `.env` and adjust the values as needed:

```bash
cp .env.example .env
```

### Required Environment Variables:

- `VITE_API_BASE_URL` - Base URL for the API (default: http://localhost:3001/api)
- `VITE_COACH_DASHBOARD_URL` - URL for the coach dashboard (default: http://localhost:5175)
- `VITE_CONTACT_EMAIL` - Contact email (default: contato@treinogo.com.br)
- `VITE_CONTACT_PHONE` - Contact phone (default: +551140028922)
- `VITE_WHATSAPP_URL` - WhatsApp contact URL (default: https://wa.me/5511999999999)
- `VITE_UNSPLASH_BASE_URL` - Unsplash images base URL (default: https://images.unsplash.com)
- `VITE_AVATARS_API_URL` - UI Avatars API URL (default: https://ui-avatars.com/api)

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deployment

For Vercel deployment, make sure to configure the environment variables in your Vercel project settings or update the `vercel.json` file with your production URLs.  