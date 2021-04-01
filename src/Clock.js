import { React, useState, Fragment } from 'react';

let ar = [1, 2, 3, 4, 5, 6];

export default function Clock() {
    let [settings, setSettings] = useState({
        index: 1,
        direction: 'clock',
        op: ''
    }),
        arr = [],
        setClock = () => {
            arr = ar.slice();
            if (settings.direction === 'anticlock') {
                arr.reverse();
                settings.index = arr.length - settings.index - 1;
            }
            arr.forEach((item, index) => {
                if (Number(settings.index) > index) {
                    output1.push(item);
                } else {
                    output2.push(item);
                }
            });
            settings.op = output2.concat(output1).toString();
            document.querySelector('#idx').value = '';
            document.querySelector('#dir').value = '';
            setSettings({ ...settings });

        }, output1 = [], output2 = [];

    return (
        <Fragment>
            <label htmlFor="idx">Index</label>
            <input id="idx" type="number" onChange={(e) => settings.index = e.target.value}></input>
            <label htmlFor="dir">Direction</label>
            <input id="dir" type="text" onChange={(e) => settings.direction = e.target.value}></input>
            <button type="button" onClick={() => setClock()}>Submit</button>
    Output: {settings.op}
        </Fragment>
    )
}