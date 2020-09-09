import React, { useState } from 'react';

const ColorForm = (props) => {
    const [formColor, setFormColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(formColor);
        setFormColor('');
    };

    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="color_input">
                Color
            </label>
            <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                name="color_input"
                id="color_input"
                onChange={(e) => setFormColor(e.target.value)}
                value={formColor}
                placeholder="Enter color here"
            />
            <button type="submit" className="btn btn-secondary mb-2">
                Add
            </button>
        </form>
    );
};

export default ColorForm;
