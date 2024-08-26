import React from 'react'

function HeadingOne({ cls, textInfo }) {
    return (
        <h1 className={cls}>
            {textInfo}
        </h1>
    )
}

export default HeadingOne