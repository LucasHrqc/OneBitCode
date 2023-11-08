import PropTypes from "prop-types"

Input.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
    label: PropTypes.string,
    id: PropTypes.string,
}

export default function Input({value, setValue, label, id}) {
    return (
        <div>
            <label htmlFor={id}>{label}:</label>
            <input
                type="text"
                name={id}
                id={id}
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
            />
        </div>
    )
}