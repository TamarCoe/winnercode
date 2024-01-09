import React, { useEffect } from 'react'
import { Item } from '_components'

const Drawer = (props) => {
    const { elements } = props

    useEffect(() => {
        console.log("component is created")
        return () => {
            console.log("component is destroyed")
        };
    }, [elements]);

    return (
        <div className="list">
            {elements.map((row, i) => {
                return (
                    <div className="row mb-2" key={i}>
                        {
                            row.map((col, j) => {
                                return (
                                    <div className="col-xs-12 col-sm" key={j}>
                                        <Item {...col} />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    )

}

export default Drawer