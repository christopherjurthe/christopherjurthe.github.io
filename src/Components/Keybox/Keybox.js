import React, { useRef } from 'react';

const playSound = (elemRef) => {
    if (elemRef.current === null) {
        return;
    }
    const audio = elemRef.current;
    audio.currentTime = 0;
    audio.play();
};

function Keybox(props) {
    const { soundSrc, isPressed, label } = props;

    const refAudio = useRef(null);

    if (isPressed) {
        playSound(refAudio);
    }
    return (
        <div onClick={playSound(refAudio)} className={isPressed ? 'keybox keybox--isPressed' : 'keybox'}>
            <div className="keybox_label">
                <span>{label}</span>
            </div>
            <audio ref={refAudio}>
                <source src={soundSrc} type="audio/wav" />
            </audio>
        </div>
    );
}

export default Keybox;
