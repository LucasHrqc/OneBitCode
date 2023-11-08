import { useRef } from "react"

export default function RefExample() {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <h2>Exemplo de useRef no DOM</h2>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Selecione o input</button>
            <hr/>
        </div>
    )
}