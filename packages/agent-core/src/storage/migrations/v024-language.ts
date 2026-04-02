import type { Database } from 'better-sqlite3';
import type { Migration } from './index.js';

export const migration: Migration = {
  version: 24,
  up: (db: Database) => {
    // Store the user's UI language preference so the agent can communicate
    // in the same language the user has selected in the settings.
    db.exec(`ALTER TABLE app_settings ADD COLUMN language TEXT NOT NULL DEFAULT 'auto'`);
  },
};
