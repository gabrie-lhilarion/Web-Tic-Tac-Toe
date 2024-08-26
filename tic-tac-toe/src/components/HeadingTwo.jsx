import React from 'react'

function HeadingTwo({ cls, textInfo }) {
    return (
        <h2 className={cls}>
            {textInfo}
        </h2>
    )
}

export default HeadingTwo