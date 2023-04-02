import React from 'react';

function Box({children}) {
    return (
        <div className=' relative before:contents-[""] before:top-[10px] before:absolute before:left-full before:w-[9px] before:h-[40%] before:skew-y-[45deg] before:bg-black after:contents-[""] after:absolute after:top-full after:left-[10px] after:w-[40%] after:h-[8px] after:bg-black after:skew-x-[45deg] rounded-lg after:-z-10'
        style={{
            boxShadow: '10px 10px 0px #000'
        }}
        >
            {children}
        </div>
    );
}

export default Box;