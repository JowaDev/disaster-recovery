'use server'

import {z} from "zod";
import {TodoFormSchema} from "@/db/todo/validator";
import {insertTodo} from "@/db/todo/service";
import {NewTodoType} from "@/db/todo/schema";
import {revalidatePath} from "next/cache";

export const createTodo = async (data: z.infer<typeof TodoFormSchema>) => {
    const validatedFields = TodoFormSchema.safeParse(data);
    if (!validatedFields.success) {
        throw new Error(validatedFields.error.errors[0].message);
    }
    const insertResult: NewTodoType[] = await insertTodo(validatedFields.data)
    revalidatePath('/');
    return insertResult;
}