import React, {useState} from "react";
import './Search.scss';
import {Input} from "../../Common/Input/Input";
import {Button} from "../../Common/Button/Button";

type PropsType = {

}

export function Search(props: PropsType) {

    const InpHolder: string = 'Search';
    const InpType: string = 'text';
    const btnIcon: string = 'icon-search';
    const [isFocus, setIsFocus] = useState(false);
    const focusInInput = (value: boolean) => setIsFocus(value);
    const focusOutOfInput = (value: boolean) => setIsFocus(value);

    return (
        <div className={'Search'}>
            <Input
                onBlur={focusOutOfInput}
                onFocus={focusInInput}
                type={InpType}
                placeholder={InpHolder}/>
            <Button
                isShow={isFocus}
                onClick={() => {}}
                btnIcon={btnIcon}/>
        </div>
    )
}