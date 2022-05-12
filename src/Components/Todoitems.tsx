
import classes from "./Todoitem.module.css"
const Todoitems: React.FC<{ text: string; remove: () => void }> = (props) => {
    console.log(props);

    return (
        <li className={classes.item} onClick={props.remove}> {props.text} </li>
    )
}

export default Todoitems;