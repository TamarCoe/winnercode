import React from "react";

const TextInput = (props) => {
    const { value } = props

    return (
        <input
            type="text"
            className="form-control"
            placeholder={value}
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
        />
    )
}

export default TextInput