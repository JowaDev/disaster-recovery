import {TodoForm} from "@/components/TodoForm";
import {TodoList} from "@/components/TodoList";

export default function Home() {
    return (
        <main className='flex justify-center items-center h-screen'>
            <div className="h-1/2 w-1/2 bg-gray-300 border-[6px] border-gray-800 rounded-xl overflow-hidden">
                <div className="relative h-10 border-b-[4px] pt-[4px] border-gray-800">
                    <div className="flex justify-center">
                        <h1 className="text-xl font-bold">Todo App</h1>
                    </div>
                    <div
                        className="absolute h-3 w-3 bg-red-500 rounded-full top-1/2 right-2 transform -translate-y-1/2"
                    />
                    <div
                        className="absolute h-3 w-3 bg-yellow-500 rounded-full top-1/2 right-6 transform -translate-y-1/2"
                    />
                    <div
                        className="absolute h-3 w-3 bg-green-500 rounded-full top-1/2 right-10 transform -translate-y-1/2"
                    />
                </div>
                <div
                    className='grid grid-cols-2 space-x-4 divide-x-4 divide-gray-800'
                >
                    <TodoForm/>
                    <TodoList/>
                </div>
            </div>
        </main>
    );
}
