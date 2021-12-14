import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const character = useCharacter();

  return(
    <C.Container>
      <C.Map>
        <Character x={character.x} y={character.y} />
      </C.Map>
    </C.Container>
  );
}

export default App;