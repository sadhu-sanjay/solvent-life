const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;

export const SERVER_URL = isDev ? 'http://127.0.0.1:8000' : 'http://api.sanjaygoswami.online'