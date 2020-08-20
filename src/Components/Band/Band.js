import React, { useState, useEffect } from 'react';
import Keybox from '../Keybox/Keybox';

import clap from '../../assets/drums/clap-808.wav';
import crash from '../../assets/drums/crash-808.wav';
import kick from '../../assets/drums/kick-acoustic01.wav';
import kick2 from '../../assets/drums/kick-deep.wav';
import hihat from '../../assets/drums/hihat-808.wav';
import openhat from '../../assets/drums/openhat-808.wav';
import perc from '../../assets/drums/perc-tribal.wav';
import snare from '../../assets/drums/snare-808.wav';
import tom from '../../assets/drums/cowbell-808.wav';

import piano_c from '../../assets/piano/piano-c.wav';
import piano_d from '../../assets/piano/piano-d.wav';
import piano_e from '../../assets/piano/piano-e.wav';
import piano_f from '../../assets/piano/piano-f.wav';
import piano_g from '../../assets/piano/piano-g.wav';
import piano_a from '../../assets/piano/piano-a.wav';
import piano_h from '../../assets/piano/piano-b.wav';


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

    const pianoMapping = [
        { key: 'q', sound: piano_a, label: 'q' },
        { key: 'w', sound: piano_h, label: 'w' },
        { key: 'e', sound: piano_c, label: 'e' },
        { key: 'r', sound: piano_d, label: 'r' },
        { key: 't', sound: piano_e, label: 't' },
        { key: 'z', sound: piano_f, label: 'z' },
        { key: 'u', sound: piano_g, label: 'u' },

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

    const piano = pianoMapping.map(
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
                {piano}
            </div>
            <div className="row">
                {drums}
            </div>
        </div>
    );
}

export default Band;
