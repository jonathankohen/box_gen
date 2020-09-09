import React, { useState } from 'react';
import './App.css';

import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';

function App() {
    const [boxes, setBoxes] = useState([]);

    const paintJob = (newColor) => {
        setBoxes([...boxes, newColor]);
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row my-5">
                    <div className="col-4 mx-auto">
                        <ColorForm onNewColor={paintJob} />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col mx-auto d-flex flex-wrap">
                        {boxes.map((box, index) => (
                            <ColorDisplay color={box} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
