import Todo from "../Models/model";
import React, { useState } from "react";

type Todoobj = {
    item: Todo[],
    addTodo: (data: string) => void,
    removeTodo: (id: string) => void
}

export const TodoContext = React.createContext<Todoobj>({
    item: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }

})

const Provider: React.FC<{ children?: React.ReactNode }> = (props) => {

    const [Todoss, setTodoss] = useState<Todo[]>([])

    function getinput(data: string) {

        const newtodo = new Todo(data)

        setTodoss((pre) => {
            return [...pre, newtodo]
        })

    }
    function removeitem(id: string) {

        setTodoss((pre) => {
            return pre.filter(item => {
                return item.id !== id
            })
        })


    }
    const contexVal: Todoobj = {
        item: Todoss,
        addTodo: getinput,
        removeTodo: removeitem
    }

    return (
        <TodoContext.Provider value={contexVal}>{props.children}</TodoContext.Provider>
    )
}


export default Provider