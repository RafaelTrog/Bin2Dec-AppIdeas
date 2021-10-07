import React, { useState } from 'react'
import './styles.css'

const Input = (props) => {
    const [placeholder, setPlaceholder] = useState(false)

    const inpt = document.querySelector(`#${props.placeholder.replace(' ', '')}`)

    const inputFocus = (stat) => {
        if (!stat) {
            if (inpt.value === '') {
                setPlaceholder(stat)
            }
        } else {
            setPlaceholder(stat)
        }
    }

    return (
        <div class="Input">
            <span
                // isDisabled={`${props.disabled}`}
                isDisabled={props.disabled ? props.value ? 'false' : 'true' : 'false'}
                className={`placeholder ${placeholder || props.value ? 'placeholder-top' : ''}`}
            >
                {props.placeholder}
            </span>
            <input
                id={props.placeholder.replace(' ', '')}
                onFocus={() => inputFocus(true)}
                onBlur={() => { inputFocus(false) }}
                disabled={props.disabled}
                value={props.value}
                onChange={(e) => { props.onChange(e.target.value) }}
            />
            {
                props.error
                    ?
                    <span className="Input-error">
                        {props.error}
                    </span>
                    :
                    ''
            }
        </div>
    )
}

export default Input