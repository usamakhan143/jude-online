/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
  readonly VITE_STRIPE_PRICE_ID: string;
  readonly VITE_CALENDLY_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
