import React from 'react';

const ColorDisplay = (props) => {
    return (
        <>
            <div
                style={{
                    backgroundColor: props.color,
                    width: '200px',
                    height: '200px',
                }}
            ></div>
        </>
    );
};

export default ColorDisplay;
