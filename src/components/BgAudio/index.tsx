import * as C from './styles';
import ReactAudioPlayer from 'react-audio-player';

export const BgAudio = () => {
    return (
        <C.Container>
            <ReactAudioPlayer
                src="/sounds/bgmusic.mp3"
                autoPlay
            />
        </C.Container>
    );
}