import React from 'react';
import Cell from './cell.jsx';

const Row = ({row, pushToColumn})=>{
    return (
        <div className="row my-2">
            {
                row.map((value, i)=>{
                    return <Cell row={row} column={i} value={value} key={i} handlePushColumn={pushToColumn}/>
                })
            }
        </div>
    );
}

export default Row;