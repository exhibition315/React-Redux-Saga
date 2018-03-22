import React from 'react';

const CardLarge = () => {
    const comp = (
        <div className="card">
            <h2>Title header</h2>
            <h5>Sub title</h5>
            <div className="fakeimg" style={{ height: '200px' }}>Image</div>
            <p>Paragraph</p>
        </div>
    );

    return comp;
};

export default CardLarge;
