export const HandleKeyDown = (e: KeyboardEvent) => {
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