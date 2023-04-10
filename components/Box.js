import { getBox } from '@/globalfuntions';
import React from 'react';

function Box({children,color,size}) {
    return (
        <div className={`relative rounded-lg w-fit`}
        style={
            getBox(color,size)
        }
        >
            {children}
        </div>
    );
}

export default Box;