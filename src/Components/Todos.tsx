
import Todoitems from "./Todoitems";
import { TodoContext } from "../store/Provider";
import { useContext } from "react";


const Todos: React.FC = () => {
    const context = useContext(TodoContext)
    return (
        <ul>
            {context.item.map((item) =>
                <Todoitems remove={() => context.removeTodo(item.id)} key={item.id} text={item.text} />
            )}
        </ul>
    )
}

export default Todos;