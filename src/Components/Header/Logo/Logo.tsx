import React from "react";
import './Logo.scss';
import samurai from './samurai.jpg';
import {NavLink} from "react-router-dom";

type PropsType = {}

export function Logo(props: PropsType) {
    return (
        <div className={'Logo'}>
            <NavLink exact to='/'><img src={samurai} alt="Logo"/></NavLink>
        </div>
    )
}