import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { BgAudio as BgMusic } from './components/BgAudio';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const character = useCharacter("Marcos");
  const [start, setStart] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
        case 'KeyA':
        case 'ArrowLeft':
        character.moveLeft();
        break;

        case 'KeyW':
        case 'ArrowUp':
        character.moveUp();
        break;

        case 'KeyD':
        case 'ArrowRight':
        character.moveRight();
        break;

        case 'KeyS':
        case 'ArrowDown':
        character.moveDown();
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
          <BgMusic />

          <C.Map>
            <Character x={character.x} y={character.y} side={character.side} name={character.name} />
          </C.Map>
        </>
      }
    </C.Container>
  );
}

export default App;