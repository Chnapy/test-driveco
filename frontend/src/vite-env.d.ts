/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: Readonly<ImportMetaEnv>;
}
