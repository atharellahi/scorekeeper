import React, { useState } from 'react';

import './score.css'


const App = () => {
    const [p1score, setp1score] = useState(0);
    const [p2score, setp2score] = useState(0);
    const [playvalue, setplayvalue] = useState(4);
    const [winloseone,setwinloseone] = useState('');
    const [winlosetwo,setwinlosetwo] = useState('');
    const [activeval,setactiveval] = useState(false);

    const p1btnclick = () => {
        if (p1score < playvalue - 1) {;
            setp1score(p1score + 1);
        }

        else if (p1score === playvalue - 1) {
            setp1score(p1score + 1);
            setwinloseone('winner');
            setwinlosetwo('loser');
            setactiveval(true);
        }
        else {
            setp1score(p1score);
        }
    }
    const p2btnclick = () => {
        if (p2score < playvalue - 1) {
            setp2score(p2score + 1);

        }
        else if (p2score === playvalue - 1) {
            setp2score(p2score + 1);
            setwinlosetwo('winner');
            setwinloseone('loser');
            setactiveval(true);
        }
        else {
            setp2score(p2score);
        }
    }
    const onplaychange = (e) => {

        setplayvalue(e.target.value);
        setp1score(0);
        setp2score(0);
        setwinloseone('');
        setwinlosetwo('');
        setactiveval(false);

    }

    const rstbtnclick = () => {
        setp1score(0);
        setp2score(0);
        setwinloseone('');
        setwinlosetwo('');
        setactiveval(false);
    }
 
    return (
        <div>
            <header><h1>Score Keeper</h1></header>

            <div id='score'><p><b id="p1" className={winloseone}>{p1score}</b><b>-</b> <b id="p2" className={winlosetwo}>{p2score}</b></p></div>

            <div id='playvaluediv'><label for="playingto">Playing to</label>
            <select id="playingto" value={playvalue} onChange={onplaychange}>
                <option value="4" class="option">4</option>
                <option value="5" class="option">5</option>
                <option value="6" class="option">6</option>
                <option value="7" class="option">7</option>
                <option value="8" class="option">8</option>
                <option value="9" class="option">9</option>
                <option value="10" class="option">10</option>
            </select>
            </div>
            <div className='buttons'>
                <button id="playerone" onClick={p1btnclick} disabled={activeval}>+1 Player one</button>
                <button id="playertwo" onClick={p2btnclick} disabled={activeval}>+1 Player two</button>
                <button id="reset" onClick={rstbtnclick}>Reset</button>
            </div>
            <script src="score.js"></script>
        </div>
    )
}

export default App; 