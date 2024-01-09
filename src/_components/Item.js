import React from 'react'
import { Select, TextInput } from '_components'
import { typesConstants } from '_constants'

const Item = (props) => {
    const { type, label } = props

    const types = {
        [typesConstants.SELECT]: {
            component: Select
        },
        [typesConstants.TEXT_INPUT]: {
            component: TextInput
        }
    }

    const itemByType = types[type]

    return (
        <div>
            <label htmlFor="basic-url" className="form-label">{label}</label>
            <div className="input-group">
                {itemByType && <itemByType.component {...props} />}
            </div>
        </div>
    )
}

export default Item