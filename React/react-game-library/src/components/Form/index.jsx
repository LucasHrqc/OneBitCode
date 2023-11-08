import { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input";

Form.propTypes = {
    addGame: PropTypes.func,
}

export default function Form({addGame}) {

    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addGame({ title, cover });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input id="title" label={"Título"} value={title} setValue={setTitle}/>
            <Input id="cover" label={"Capa"} value={cover} setValue={setCover}/>
            <button type="submit">Adicionar à biblioteca</button>
        </form>
    )
}