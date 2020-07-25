import React from "react";
import './Avatar.scss';
import AvatarPhoto from './Avatar.jpg';

type PropsType = {}

export function Avatar(props: PropsType) {
    return (
        <div className={'Avatar'}>
            <img src={AvatarPhoto} alt="Avatar"/>
        </div>
    )
}