import React from 'react';
import Row from './row.jsx';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board:
                [
                    Array.from({length:6}),
                    Array.from({length:6}),
                    Array.from({length:6}),
                    Array.from({length:6}),
                    Array.from({length:6}),
                    Array.from({length:6}),

                ]
        }
    }

    pushToColumn(column) {
        //access board on the state and change the color of the circle
        console.log(`Click at column ${column}`);
        let board = this.state.board;
        for (let row = 5; row >= 0; row--){
            if(board[row][column]){

            }
        }
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

