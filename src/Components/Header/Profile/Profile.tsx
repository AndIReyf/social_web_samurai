import React, {useState} from "react";
import './Profile.scss';
import {Avatar} from "./Avatar/Avatar";
import {UserSettings} from "./UserSettings/UserSettings";

type PropsType = {}

export function Profile(props: PropsType) {

    const [isClassActive, setIsClassActive] = useState(false);
    const showMenu = () => setIsClassActive(true)

    return (
        <div className={'Profile'} onClick={showMenu}>
            <div className={'profileTitle'}>Me</div>
            <Avatar />
            <UserSettings isActive={isClassActive} />
        </div>
    )
}