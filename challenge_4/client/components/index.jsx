import React from 'react';
import Circle from './circle.jsx';

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
        this.state.board[r][c] = 1;
        console.log(this.state.board)
    }

    render() {
        let pushToColumn = this.pushToColumn.bind(this);
        const boardView = [];

        for (let i = 0; i < 6; i++) {
            let row = [];
            for (let j = 0; j < 7; j++) {
                row.push(
                    <div className="col">
                        <Circle row={i} column={j} value={this.state.board[i][j]} key={`row-${i} col-${j}`}
                                handlePushColumn={pushToColumn}/>
                    </div>
                );
            }

            boardView.push(
                <div className="row my-2" key={`row-${i}`}> {row}</div>
            );
        }
        return (
            <div className="container board-container">
                {boardView}
            </div>
        )
    }
}

export default Index;

