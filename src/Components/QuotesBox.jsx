import React from 'react';

const QuotesBox = ({ random, Quotes, colors}) => {
    return (
        <div>
        <h2 className='quotes' style={{ color: colors }}>{Quotes[random].quote}</h2>
        <ul className='author' style={{ color: colors }}>
            <li>{Quotes[random].author} </li>
        </ul>
        </div>
    );
};

export default QuotesBox;