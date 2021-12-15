import { useState, ChangeEvent, KeyboardEvent } from 'react';
import * as C from './styles';
import { FirstLetterUp } from '../../utils/FirstLetterUp';

export const PlayerName = () => {
    const [name, setName] = useState("");

    const handlePlayerName = (e: ChangeEvent<HTMLInputElement>) => {
        const newPlayerName = e.target.value;
        setName(newPlayerName);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        switch(e.code) {
            case 'Enter':
            case 'NumpadEnter':
                (name.length > 3) ? console.log(FirstLetterUp(name)) : alert("Nome muito curto");
            break;
        }
    }

    return (
        <C.Container>
            <input
                type="text"
                value={name}
                onChange={handlePlayerName}
                placeholder="Place your name here"
                onKeyDown={handleKeyDown}
            />
        </C.Container>
    );
}