import React from 'react';

export const buttonClickHandler = () => window.alert('In your face.');

const Button = ({onClick, text}) => (
    <button onClick={onClick} type="submit">
        {text}
    </button>
);

export default Button;
