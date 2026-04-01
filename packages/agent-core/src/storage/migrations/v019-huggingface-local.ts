import type { Database } from 'better-sqlite3';
import type { Migration } from './index.js';

/**
 * Migration v019: HuggingFace Local provider support.
 *
 * The huggingface_local_config column was never added — this migration creates it.
 * (Previous comment incorrectly claimed it was added in v010, which actually added sandbox_config.)
 */
export const migration: Migration = {
  version: 19,
  up: (db: Database) => {
    db.exec(`ALTER TABLE app_settings ADD COLUMN huggingface_local_config TEXT`);
  },
};
