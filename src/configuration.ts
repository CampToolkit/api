import * as process from 'node:process';

export function configuration() {
  return {
    db: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      name: process.env.DB_NAME,
      password: process.env.DB_PASS,
      user: process.env.DB_USER,
    },
  };
}
