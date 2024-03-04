/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: strings
  readonly VITE_SERVER_IP: string
  readonly VITE_SERVER_PORT: string
  readonly VITE_WS_SERVER_IP: string
  readonly VITE_WS_SERVER_PORT: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
