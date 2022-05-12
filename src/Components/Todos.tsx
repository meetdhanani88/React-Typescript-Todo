
import Todoitems from "./Todoitems";
import { TodoContext } from "../store/Provider";
import { useContext } from "react";
import classes from "./Todos.module.css"


const Todos: React.FC = () => {
    const context = useContext(TodoContext)
    return (
        <ul className={classes.todos}>
            {context.item.map((item) =>
                <Todoitems remove={() => context.removeTodo(item.id)} key={item.id} text={item.text} />
            )}
        </ul>
    )
}

export default Todos;