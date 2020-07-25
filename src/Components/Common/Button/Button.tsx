import React from "react";
import './Button.scss';
import '../../../fonts/fonts.css';

type PropsType = {
    btnTitle?: string
    btnIcon?: string
    isShow?: boolean
    onClick: () => void
}

export function Button(props: PropsType) {

    return (
        <div className={`Button`}>
            {
                props.isShow && <button
                    onClick={props.onClick}
                    className={props.btnIcon}>{props.btnTitle}
                </button>
            }
        </div>
    )
}