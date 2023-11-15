import {pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core'

export const $notes = pgTable('notes', {
    id: serial('id').primaryKey(),
    nome: text('nome').notNull(),
    createdAT: timestamp('created_at').notNull().defaultNow(),
    imageURL: text('imageURL'),
    userId: text('user_id').notNull(),
    editorState: text('editor_state'),
});

export type NoteType = typeof $notes.$inferInsert;

// drizzle-orm
// drizzle-kit