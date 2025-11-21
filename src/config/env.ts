import { GoogleLogin } from "@react-oauth/google";

// Environment configuration
export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  },
  auth: {
    googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '182333140856-mkg2vf64hjpniplcceoqorsfm3cg6f03.apps.googleusercontent.com',
  },
  urls: {
    coachDashboard: import.meta.env.VITE_COACH_DASHBOARD_URL || 'http://localhost:5175',
    whatsapp: import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5511999999999',
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'contato@treinogo.com.br',
    phone: import.meta.env.VITE_CONTACT_PHONE || '+551140028922',
  },
  services: {
    unsplashBaseUrl: import.meta.env.VITE_UNSPLASH_BASE_URL || 'https://images.unsplash.com',
    avatarsApiUrl: import.meta.env.VITE_AVATARS_API_URL || 'https://ui-avatars.com/api',
  },
};