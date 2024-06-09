import {z} from "zod";

export const TodoFormSchema = z.object({
    title: z.string().min(2, {message: "Title must be at least 2 characters long"}),
    description: z.string().min(2, {message: "Description must be at least 2 characters long"}),
})

export const TodoEditFormSchema = z.object({
    id: z.number(),
    title: z.string().min(2, {message: "Title must be at least 2 characters long"}),
    description: z.string().min(2, {message: "Description must be at least 2 characters long"}),
})

export const TodoDeleteSchema = z.object({
    id: z.number(),
})