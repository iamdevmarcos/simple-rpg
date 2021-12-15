import { useState, ChangeEvent } from 'react';
import * as C from './styles';

export const PlayerName = () => {
    const [name, setName] = useState("");

    const handlePlayerName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <C.Container>
            <input
                type="text"
                value={name}
                onChange={handlePlayerName}
                placeholder="Place your name here"
            />
        </C.Container>
    );
}