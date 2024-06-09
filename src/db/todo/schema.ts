import { pgTable, serial, varchar, boolean, timestamp } from 'drizzle-orm/pg-core';

export const todo = pgTable('todo', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }),
    description: varchar('description', { length: 1024 }),
    completed: boolean('completed').default(false),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdateFn(() => new Date()),
});

export type TodoType = typeof todo.$inferSelect;
export type NewTodoType = typeof todo.$inferInsert;
