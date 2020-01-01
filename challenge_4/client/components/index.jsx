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

        return (
            <div className="container board-container">
                {boardView}
            </div>
        )
    }
}

export default Index;

