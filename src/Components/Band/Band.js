import React, { useState, useEffect } from 'react';
import Keybox from '../Keybox/Keybox';

import kickDeep from '../../assets/drums/kick-deep.wav';
import kickLow from '../../assets/drums/1.wav';

function Band() {
    const [keyPressed, setKeyPressed] = useState('');

    const drumsMapping = [
        { key: 'a', sound: kickDeep, label: 'A' },
        { key: 's', sound: kickLow, label: 'S' },
        { key: 'd', sound: kickDeep, label: 'D' },
        { key: 'f', sound: kickLow, label: 'F' },
        { key: 'g', sound: kickDeep, label: 'G' },
        { key: 'h', sound: kickLow, label: 'H' },
        { key: 'j', sound: kickDeep, label: 'J' },
        { key: 'k', sound: kickLow, label: 'K' },
        { key: 'l', sound: kickDeep, label: 'L' },

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
