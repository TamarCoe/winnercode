import React from 'react'

const Select = (props) => {
    const { value } = props

    const getOptions = () => {
        if (typeof value === 'string')
            return value.split(',')
        return value
    }

    const options = getOptions()

    return (
        <select
            className="form-select"
            aria-label="Default select example"
            defaultValue={options[0]}
            >
            {options.map((option, index) =>
                <option
                    key={index}
                    defaultValue={!index}
                    value={option}>
                    {option}
                </option>
            )}
        </select>
    )
}

export default Select