declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB: string;
      PORT: string;
    }
  }
}

export {};
