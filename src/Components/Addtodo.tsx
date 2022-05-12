import React, { useRef, useContext } from 'react';
import { TodoContext } from '../store/Provider';
import classes from "./Addtodo.module.css";

const Addtodo: React.FC = () => {
    const context = useContext(TodoContext);
    const inputtext = useRef<HTMLInputElement>(null);

    function submitHandeler(event: React.FormEvent) {
        event.preventDefault();
        const enteredText = inputtext.current!.value;
        context.addTodo(enteredText);
    }

    return (

        <form onSubmit={submitHandeler} className={classes.form}>
            <label htmlFor="text">Add todo</label>
            <input type="text" id='text' ref={inputtext} />
            <button> Add </button>
        </form>

    )
}

export default Addtodo;