import { defineConfig } from '@mikro-orm/core';
import { resolve } from 'path';
import { SqliteDriver } from '@mikro-orm/sqlite';

export default defineConfig({
  entities: [resolve(__dirname, '../dist/entities')],
  entitiesTs: ['./src/entities'],

  dbName: 'pom.sqlite',
  driver: SqliteDriver,
  debug: true,
  migrations: {
    path: resolve(__dirname, '../dist/migrations'),
    pathTs: resolve(__dirname, '../src/migrations'),
  },
  allowGlobalContext: true,
});
