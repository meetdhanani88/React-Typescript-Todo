

const Todoitems: React.FC<{ text: string; remove: () => void }> = (props) => {
    console.log(props);

    return (
        <li onClick={props.remove}> {props.text} </li>
    )
}

export default Todoitems;