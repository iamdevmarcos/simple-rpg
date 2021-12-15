import * as C from './styles';
import ReactAudioPlayer from 'react-audio-player';

export const BgAudio = () => {
    return (
        <C.Container>
            <ReactAudioPlayer
                src="/sounds/loading.mp3"
                autoPlay={true}
            />
        </C.Container>
    );
}