import React, { useState, useEffect } from 'react';
import Keybox from '../Keybox/Keybox';

import clap from '../../assets/drums/clap-fat.wav';
import crash from '../../assets/drums/crash-808.wav';
import kick from '../../assets/drums/kick-808.wav';
import kick2 from '../../assets/drums/kick-stomp.wav';
import hihat from '../../assets/drums/hihat-808.wav';
import openhat from '../../assets/drums/openhat-808.wav';
import perc from '../../assets/drums/perc-metal.wav';
import snare from '../../assets/drums/snar-808.wav';
import tom from '../../assets/drums/tom-808.wav';

function Band() {
    const [keyPressed, setKeyPressed] = useState('');

    const drumsMapping = [
        { key: 'a', sound: clap, label: 'A' },
        { key: 's', sound: kick, label: 'S' },
        { key: 'd', sound: kick2, label: 'D' },
        { key: 'f', sound: hihat, label: 'F' },
        { key: 'g', sound: openhat, label: 'G' },
        { key: 'h', sound: perc, label: 'H' },
        { key: 'j', sound: snare, label: 'J' },
        { key: 'k', sound: tom, label: 'K' },
        { key: 'l', sound: crash, label: 'L' },

    ];

    function downHandler({ key }) {
        setKeyPressed(key);
    }
    function upHandler() {
        setKeyPressed('');
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount


    const drums = drumsMapping.map(
        item => (
            <Keybox
                isPressed={keyPressed === item.key}
                soundSrc={item.sound}
                label={item.label}
                key={item.key}
            />
        )
    );

    return (
        <div>
            <div className="row">
                {drums}
            </div>
        </div>
    );
}

export default Band;
