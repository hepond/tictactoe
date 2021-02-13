import React from 'react'
function Square(props) {
    return (
        <button type="button" className="square">{props.value + 1}</button>
    )
}

export default Square
