import {FC} from "react";
import {getTodos} from "@/db/todo/service";
import {TodoType} from "@/db/todo/schema";
import {TodoEditForm} from "@/components/TodoEditForm";
import {ScrollArea} from "@/components/ui/scroll-area";

interface TodoListProps {

}

export const TodoList: FC<TodoListProps> = async () => {
    const todos = await getTodos();
    return (
        <ScrollArea className="h-[400px] w-full pr-4">
            <ul>
                {todos.map((todo: TodoType) => (
                    <li
                        key={todo.id}
                        className="p-4 border-b border-gray-200 overflow-hidden"
                    >
                        <div
                            className="text-xl font-bold whitespace-pre-wrap"
                        >
                            {todo.title}
                        </div>
                        <div
                            className="text-sm whitespace-pre-wrap"
                        >
                            {todo.description}
                        </div>
                        <TodoEditForm
                            {...todo}
                        />
                    </li>
                ))}
            </ul>
        </ScrollArea>
    )
}