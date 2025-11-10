/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_COACH_DASHBOARD_URL: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_CONTACT_PHONE: string
  readonly VITE_WHATSAPP_URL: string
  readonly VITE_UNSPLASH_BASE_URL: string
  readonly VITE_AVATARS_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}