'use server'

import {z} from "zod";
import {TodoEditFormSchema} from "@/db/todo/validator";
import {updateTodo} from "@/db/todo/service";
import {NewTodoType} from "@/db/todo/schema";
import {revalidatePath} from "next/cache";

export const editTodo = async (data: z.infer<typeof TodoEditFormSchema>) => {
    const validatedFields = TodoEditFormSchema.safeParse(data);
    if (!validatedFields.success) {
        throw new Error(validatedFields.error.errors[0].message);
    }
    const updateResult: NewTodoType[] = await updateTodo(validatedFields.data.id, validatedFields.data);
    revalidatePath('/');
    return updateResult;
}