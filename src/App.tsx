import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { BgAudio } from './components/BgAudio';
import { PlayerName } from './components/PlayerName';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const character = useCharacter("Marcos");
  const [playerName, setPlayerName] = useState('');
  const [start, setStart] = useState(false);
  const character2 = useCharacter(playerName);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const definePlayerName = (playerName: string) => {
    setPlayerName(playerName);
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
        case 'KeyA':
        case 'ArrowLeft':
          character2.moveLeft();
        break;

        case 'KeyW':
        case 'ArrowUp':
          character2.moveUp();
        break;

        case 'KeyD':
        case 'ArrowRight':
          character2.moveRight();
        break;

        case 'KeyS':
        case 'ArrowDown':
          character2.moveDown();
        break;

        case 'Enter':
        setStart(true);
        break;
    }
  }

  return(
    <C.Container>
      {!start &&
        <C.Start>
          Press
          <C.Key onClick={e=>setStart(true)}>Enter</C.Key>
          to start game
        </C.Start>
      }
      
      {start &&
        <>
          <BgAudio />

          {!playerName &&
            <PlayerName onChange={definePlayerName} />
          }

          {playerName && playerName !== '' &&
            <>
              <C.Map>
                <Character x={3} y={5} side={character.side} name={character.name} />
                <Character x={character2.x} y={character2.y} side={character2.side} name={character2.name} />
              </C.Map>
            </>
          }
        </>
      }
    </C.Container>
  );
}

export default App;