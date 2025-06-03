import {
  bigint,
  index,
  mysqlTable,
  serial,
  text,
  timestamp,
  unique,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core';

export const users = mysqlTable(
  'users',
  {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).unique().notNull(),
    password: varchar('password', { length: 255 }),
    name: varchar('name', { length: 255 }).notNull(),
    avatarUrl: varchar('avatar_url', { length: 500 }),
    createdAt: timestamp('created_at').defaultNow(),
  },
  (table) => [uniqueIndex('email_idx').on(table.email)],
);

export const accounts = mysqlTable(
  'accounts',
  {
    id: serial('id').primaryKey(),
    userId: bigint('user_id', { mode: 'bigint', unsigned: true }).notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('provider_account_id', { length: 255 })
      .notNull()
      .unique(),
    accessToken: text('access_token'),
    refreshToken: text('refresh_token'),
    expiresAt: timestamp('expires_at'),
  },
  (table) => [
    unique('provider_idx').on(table.provider, table.providerAccountId),
  ],
);

export const sessions = mysqlTable(
  'sessions',
  {
    id: serial('id').primaryKey(),
    userId: bigint('user_id', { mode: 'bigint', unsigned: true }).notNull(),
    token: varchar('token', { length: 512 }).notNull(),
    expiresAt: timestamp('expires_at').notNull(),
  },
  (table) => [index('token_idx').on(table.token)],
);

export const tokens = mysqlTable(
  'tokens',
  {
    id: serial().primaryKey(),
    userId: bigint('user_id', { mode: 'bigint', unsigned: true }).notNull(),
    type: varchar('type', { length: 255 }).notNull(),
    token: varchar('token', { length: 512 }).notNull().unique(),
    expiresAt: timestamp('expires_at').notNull(),
  },
  (table) => [unique('token_unique_idx').on(table.token)],
);
