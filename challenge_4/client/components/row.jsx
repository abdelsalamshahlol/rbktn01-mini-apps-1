import React from 'react';

const Row = ({circles})=>{
    // const rowData = circles.map((circle, i)=>{
    //     return circle;
    // })
    return (
        <div className="row my-2">
            {circles}
        </div>
        );
}

export default Row;