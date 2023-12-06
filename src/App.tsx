import React from 'react';
import './App.css'
import {Display} from "./components/Display";
import {SetterDisplay} from "./components/SetterDisplay";




function App() {
    return (
        <div className="App">
            <div className='Box'>
                <Display/>
            </div>
            <div className='Box'>
                <SetterDisplay/>
            </div>
        </div>
    );
}

export default App;
