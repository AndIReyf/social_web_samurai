import React, {ChangeEvent} from "react";
import './Input.scss';

type PropsType = {
    placeholder: string
    type: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur: (value: boolean) => void
    onFocus: (value: boolean) => void
}

export function Input(props: PropsType) {
    return (
        <div className={'Input'}>
            <input
                onFocus={() => props.onFocus(true)}
                placeholder={props.placeholder}
                onBlur={() => props.onBlur(false)}
                onChange={props.onChange}
                type={props.type}/>
        </div>
    )
}