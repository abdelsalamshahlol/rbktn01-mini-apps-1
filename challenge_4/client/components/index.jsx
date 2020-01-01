import React from 'react';
import {checkBoard} from '../helpers/boardChecking.js';
import Row from './row.jsx';
import Banner from './banner.jsx';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerTurn: 1,
            board:
                [
                    Array.from({length: 6}),
                    Array.from({length: 6}),
                    Array.from({length: 6}),
                    Array.from({length: 6}),
                    Array.from({length: 6}),
                    Array.from({length: 6}),

                ],
            message: ''
        }
    }

    pushToColumn(column) {
        //access board on the state and change the color of the circle
        console.log(`Click at column ${column}`);

        // shallow copy of the matrix
        let board = this.state.board;
        let currentTurn = this.state.playerTurn === 1 ? 'R' : 'Y';

        console.log(checkBoard(board))

        let gameIsOver = checkBoard(board);

        if (gameIsOver) {
            // Show game over

            return;
        }
        // Find the first row where cells are empty and insert at column
        for (let row = 5; row >= 0; row--) {
            if (!board[row][column]) {
                board[row][column] = currentTurn;
                break;
            }
        }

        // Update the state of board and the view by setting the board to shallow copy
        let nextPlayer = currentTurn === 'R' ? 2 : 1;

        this.setState({
            board: board,
            playerTurn: nextPlayer
        });

        console.log(this.state.board);
        console.log(checkBoard(board))

    }

    render() {
        let pushToColumn = this.pushToColumn.bind(this);
        const boardView = this.state.board.map((row, i) => {
            return <Row row={row} key={i} pushToColumn={pushToColumn}/>;
        });

        return (
            <section>
                <Banner message={this.state.message}/>
                <div className="container board-container pb-4">
                    {boardView}
                </div>
            </section>
        );
    }
}

export default Index;

