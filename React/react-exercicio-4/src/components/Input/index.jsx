import PropTypes from 'prop-types';

Input.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func,
}

export default function Input (props) {
    return (
        <input
          type="number"
          min={1}
          id="passwordSize"
          value={props.passwordSize}
          onChange={(ev) => props.setPasswordSize(ev.target.value)}
        />
    )
}