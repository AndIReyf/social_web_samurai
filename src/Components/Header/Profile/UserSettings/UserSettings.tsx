import React from "react";
import './UserSettings.scss';
import {Avatar} from "../Avatar/Avatar";

type PropsType = {
    isActive: boolean
}

export function UserSettings(props: PropsType) {
    return (
        <div className={`UserSettings ${props.isActive ? 'active' : ''}`}>
            <div className={'UserInfo'}>
                <Avatar/>
                <div>
                    <div className={'UserName'}>Andrey</div>
                    <div className={'UserProfession'}>React Dev</div>
                </div>
            </div>
            <div className={'UserProfile'}>View Profile</div>
            <div className={'Account'}>
                <div className={'AccountTitle'}>Account</div>
                <ul className={'AccountList'}>
                    <li>Settings & Privacy</li>
                    <li>Help</li>
                    <li>Language</li>
                </ul>
            </div>
            <div className={'Manage'}>
                <div className={'ManageTitle'}>Manage</div>
                <ul className={'ManageList'}>
                    <li>Post & Activity</li>
                    <li>Job posting account</li>
                    <li>Sign out</li>
                </ul>
            </div>
        </div>
    )
}