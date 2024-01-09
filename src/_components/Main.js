import React, { useState } from 'react'
import { map } from 'lodash'
import { Element } from '_models'
import { Drawer } from '_components'
import { keysConstants } from '_constants';
import { strings } from '_translations'

const Text = () => {
    const [text, setText] = useState('')
    const [elements, setElements] = useState([])

    const handleChangeText = (event) => {
        setText(event.target.value)
    }

    const createMat = (max_rows, max_col, elements) => {
        let mat = Array(Number(max_rows)).fill(Array(Number(max_col)))
        elements.forEach((element, i) => {
            const { LINE, COLUMN, LABEL, TYPE, VALUE } = element
            if (Number(LINE)) {
                let nElement = new Element({ label: LABEL, type: TYPE, value: VALUE })
                let line = [...mat[LINE - 1]]
                line[COLUMN - 1] = nElement
                mat[LINE - 1] = line
            }
            else setElements([])
        });

        setElements(mat)
    }

    const getElement = (str, re) => {
        let keys = map(keysConstants)

        let results = {};
        let m, p, index = 0;
        while (p = re.lastIndex, m = re.exec(str)) {
            results[keys[index]] = str.substring(p, m.index)
            index++
        }
        results[keys[index]] = str.substring(p)
        return results;
    }

    const handleClick = () => {
        if (text) {
            let max_rows = 0, max_col = 0, elements = text.split('\n')

            elements.map((element, index) => {
                let item = getElement(element, /\;+/g);
                const { LINE, COLUMN } = item
                //check max rows
                if (LINE > max_rows)
                    max_rows = LINE

                //check max cols
                if (COLUMN > max_col)
                    max_col = COLUMN

                elements[index] = item
            })

            createMat(max_rows, max_col, elements)
        }
    }

    return (
        <div className="text-center mt-5">
            <div className="p-3">
                <div className="col-sm-12 col-md-5 ">
                    <div className="input-group mb-3">
                        <span className="input-group-text">{strings.textarea}</span>
                        <textarea
                            style={{ height: '150px' }}
                            onChange={handleChangeText}
                            className="form-control col-3"
                            aria-label="With textarea" />
                    </div>
                </div>
                <div className="input-group mb-3">
                    <button type="button" onClick={handleClick} className="btn btn-warning">{strings.buttonCreate}</button>
                </div>
                <Drawer elements={elements} />
            </div>
        </div>
    )

}

export default Text