'use client'

import {FC, useState} from "react";
import {TodoType} from "@/db/todo/schema";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {TodoEditFormSchema} from "@/db/todo/validator";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "@/components/ui/use-toast";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button, buttonVariants} from "@/components/ui/button";
import {editTodo} from "@/actions/editTodo";
import {removeTodo} from "@/actions/removeTodo";
import {cn} from "@/lib/utils";

export const TodoEditForm: FC<TodoType> = (todo) => {
    const [open, setOpen] = useState<boolean>(false);
    const form = useForm<z.infer<typeof TodoEditFormSchema>>({
        resolver: zodResolver(TodoEditFormSchema),
        defaultValues: {
            id: todo.id,
            title: todo.title!,
            description: todo.description!,
        },
    })

    function onSubmit(data: z.infer<typeof TodoEditFormSchema>) {
        editTodo(data).then(
            () => {
                setOpen(false)
                form.reset()
                toast({
                    title: "Todo modified",
                    description: "Your todo was successfully modified."
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
        <Popover
            open={open}
        >
            <div
                className='flex justify-between my-2'
            >
                <PopoverTrigger
                    className={cn(buttonVariants({}))}
                    onClick={() => setOpen(prevState => !prevState)}
                >
                    Edit
                </PopoverTrigger>
                <Button
                    onClick={async () => {
                        removeTodo(todo).then(
                            () => {
                                form.reset()
                                toast({
                                    title: "Todo removed",
                                    description: "Your todo was successfully removed."
                                })
                            },
                            (error) => {
                                toast({
                                    title: "An error occurred",
                                    description: error.message,
                                })
                            }
                        )
                    }}
                >
                    Remove
                </Button>
            </div>
            <PopoverContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <Button type="submit">Edit</Button>
                    </form>
                </Form>
            </PopoverContent>
        </Popover>
    )
}