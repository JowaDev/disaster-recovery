import {NewTodoType, todo, TodoType} from './schema';
import {eq} from "drizzle-orm/sql/expressions/conditions";
import {db} from "@/db";

export async function insertTodo(newTodo: NewTodoType): Promise<TodoType[]> {
    return db.insert(todo).values(newTodo).returning();
}

export async function getTodos(): Promise<TodoType[]> {
    return db.select().from(todo);
}

export async function updateTodo(id: number, updates: Partial<NewTodoType>): Promise<TodoType[]> {
    return db.update(todo).set(updates).where(eq(todo.id, id)).returning();
}

export async function deleteTodo(id: number): Promise<void> {
    await db.delete(todo).where(eq(todo.id, id));
}
