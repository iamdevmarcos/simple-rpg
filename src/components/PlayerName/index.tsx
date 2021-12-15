import { useState, ChangeEvent, KeyboardEvent } from 'react';
import * as C from './styles';
import { FirstLetterUp } from '../../utils/FirstLetterUp';

type Props = {
    onChange: (playerName: string) => void
}

export const PlayerName = ({ onChange }: Props) => {
    const [name, setName] = useState("");

    const handlePlayerName = (e: ChangeEvent<HTMLInputElement>) => {
        const newPlayerName = e.target.value;
        setName(newPlayerName);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        switch(e.code) {
            case 'Enter':
            case 'NumpadEnter':
                (name.length > 3) ? onChange(FirstLetterUp(name)) : alert("this name is too short");
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