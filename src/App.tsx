import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const character = useCharacter();
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
        <C.Start>Press Enter to start game</C.Start>
      }
      
      {start &&
        <C.Map>
          <Character x={5} y={2} side={'down'} />
          <Character x={character.x} y={character.y} side={character.side} />
        </C.Map>
      }
    </C.Container>
  );
}

export default App;