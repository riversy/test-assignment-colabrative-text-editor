console.log(import.meta.env);

export const WS_URI = import.meta.env.VITE_WS_URI || 'ws://localhost:8080';