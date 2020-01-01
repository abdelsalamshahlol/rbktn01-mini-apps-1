import React from 'react';
import Cell from './cell.jsx';
import Row from './row.jsx';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board:
                [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                ]
        }
    }

    pushToColumn(r, c) {
        //access board on the state and change the color of the circle
        console.log(`Click at ${r} and ${c}`);
        // this.state.board[r][c] = 1;
    }

    render() {
        let pushToColumn = this.pushToColumn.bind(this);
        const boardView = this.state.board.map((row, i)=> {
           return <Row row={row} key={i} pushToColumn={pushToColumn}/>;
        });

        // for (let i = 5; i >= 0; i--) {
        //     let row = [];
        //     for (let j = 0; j <= 6; j++) {
        //         row.push(
        //             <div className="col" key={i + j}>
        //                 <Cell row={i} column={j} key={`row-${i} col-${j}`}
        //                       handlePushColumn={pushToColumn}/>
        //             </div>
        //         );
        //     }
        //
        //     boardView.push(
        //         <Row circles={row} key={i}/>
        //     );
        // }
        return (
            <div className="container board-container">
                {boardView}
            </div>
        )
    }
}

export default Index;

