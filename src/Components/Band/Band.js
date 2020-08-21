import React from 'react';
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

function Band() {
    /* state */

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

    }
    function upHandler() {

    }

    /* EventListeners */


    const drums = drumsMapping.map(
        item => (
            <Keybox

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
