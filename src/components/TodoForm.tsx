"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {toast} from "@/components/ui/use-toast"
import {createTodo} from "@/actions/createTodo";
import {TodoFormSchema} from "@/db/todo/validator";

export function TodoForm() {
    const form = useForm<z.infer<typeof TodoFormSchema>>({
        resolver: zodResolver(TodoFormSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    })

    function onSubmit(data: z.infer<typeof TodoFormSchema>) {
        createTodo(data).then(
            () => {
                form.reset()
                toast({
                    title: "Todo created",
                    description: "Your todo was successfully created.",
                })
            },
            (error) => {
                toast({
                    title: "An error occurred",
                    description: error.message,
                })
            }
        )
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 ml-4 mt-4"
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Make groceries" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the title of the todo.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Buy milk, eggs, and bread" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the description of the todo.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div
                    className='flex justify-end'
                >
                    <Button
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    )
}
