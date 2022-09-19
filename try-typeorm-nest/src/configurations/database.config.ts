import { registerAs } from '@nestjs/config';

export default registerAs('databaseConfig', () => {
  return {
    database: process.env.DB_NAME || 'tempdb',
  };
});
