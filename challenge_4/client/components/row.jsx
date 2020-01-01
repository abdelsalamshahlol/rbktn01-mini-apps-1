import React from 'react';
import Cell from './cell.jsx';

const Row = ({row, pushToColumn})=>{
    return (
        <div className="row my-2">
            {
                row.map((cell, i)=>{
                    return <Cell row={i} cell={cell} key={i} handlePushColumn={pushToColumn}/>
                })
            }
        </div>
    );
}

export default Row;