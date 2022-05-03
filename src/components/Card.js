import React from 'react';

const Card = ({ text }) => {
    return (
        <div>
            <h3 className="card">{text}</h3>
        </div>
    );
};

export default Card;