import React from "react";
import './Nav.scss';
import {NavLink} from "react-router-dom";

type PropsType = {
    navLinks: NavLinksType
}
export type NavLinksType = Array<NavLinkType>
type NavLinkType = {
    id: number
    title: string
}

export function Nav(props: PropsType) {

    const getClassIcon = (value: string) => {
        switch (value) {
            case 'Home': {
                return 'icon-home'
            }
            case 'Network': {
                return 'icon-user-plus'
            }
            case 'Jobs': {
                return 'icon-briefcase'
            }
            case 'Messaging': {
                return 'icon-comments-o'
            }
            case 'Notification': {
                return 'icon-bell-o'
            }
        }
    }

    return (
        <nav className={'Nav'}>
            {
                props.navLinks.map(link => {
                    const setClassIcon = (value: string) => getClassIcon(value);
                    return <NavLink to={`/${link.title}`} key={link.id}
                                    className={`navListItem ${setClassIcon(link.title)}`}>
                        {link.title}
                    </NavLink>
                })
            }
        </nav>
    )
}