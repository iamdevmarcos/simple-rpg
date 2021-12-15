import * as C from './styles';
import ReactAudioPlayer from 'react-audio-player';

export const BgAudio = () => {

    return (
        <C.Container>
            <ReactAudioPlayer
                src="/sounds/loading.ogg"
                autoPlay={true}
                loop
                controls={false}
                className='audioElement'
            />
        </C.Container>
    );
}