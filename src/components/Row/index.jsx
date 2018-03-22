import React from 'react';
import CardLarge from './card_large';
import CardSmall from './card_small';

const Row = () => {
    const comp = (
        <div className="row">
            <div className="leftcolumn">
                <CardLarge />
                <CardLarge />
            </div>
            <div className="rightcolumn">
                <CardSmall />
            </div>
        </div>
    );

    return comp;
};

export default Row;
