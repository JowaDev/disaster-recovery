'use server'

import {z} from "zod";
import {TodoDeleteSchema} from "@/db/todo/validator";
import {revalidatePath} from "next/cache";
import {deleteTodo} from "@/db/todo/service";

export const removeTodo = async (data: z.infer<typeof TodoDeleteSchema>) => {
    const validatedFields = TodoDeleteSchema.safeParse(data);
    if (!validatedFields.success) {
        throw new Error(validatedFields.error.errors[0].message);
    }
    const removeResult = await deleteTodo(validatedFields.data.id);
    revalidatePath('/');
    return removeResult;
}