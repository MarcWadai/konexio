import React from 'react'
import '../style/components/simpleInput.scss'

function InputContainer(props) {
    const {
        title,
        error,
        children
    } = {...props}
    return (
        <div className="simpleInput">
            <label className="inputLabel">{ title || "" }</label>
            <div className="inputContainer">
                {children}
            </div>
            {error ?
                <div className="inputError">
                    <span>
                        <span>This field is required</span>
                    </span>
                </div> : null}

        </div>
    )
}

export default InputContainer