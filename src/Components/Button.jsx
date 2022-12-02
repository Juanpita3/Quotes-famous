import React from 'react';

const Button = ({chagePhrase}) => {
    return (
        <div className='quotes'>
           <button onClick={chagePhrase}>{">>"}</button>
        </div>
    );
};

export default Button;