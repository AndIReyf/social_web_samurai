import React from "react";
import "./Header.scss";
import {Logo} from "./Logo/Logo";
import {Search} from "./Search/Search";
import {Nav, NavLinksType} from "./Nav/Nav";
import {Profile} from "./Profile/Profile";

type PropsType = {}

export function Header(props: PropsType) {

    const navLinks: NavLinksType = [
        {id: 1, title: 'Home'},
        {id: 2, title: 'Network'},
        {id: 3, title: 'Jobs'},
        {id: 4, title: 'Messaging'},
        {id: 5, title: 'Notification'}
    ]

    return (
        <header className={'Header'}>
            <div className={'container'}>
                <div className="headerInner">
                    <Logo />
                    <Search />
                    <Nav navLinks={navLinks} />
                    <Profile />
                </div>
            </div>
        </header>
    )
}