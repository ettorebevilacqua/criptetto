"use client"

import { useState } from "react";
import styles from './tiktok.module.css';

function Square(props: any) {
    return (
        <button className={styles.square} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Board(props: any) {
    const renderSquare = (i: number) =>
        <Square value={props.squares[i]} onClick={() => props.onClick(i)}
        />

    return <div>
        <div>
            <div className={styles['board-row']}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={styles['board-row']}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={styles['board-row']}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    </div>
}

type State = {
    history: { squares: Array<string | null> }[],
    stepNumber: number,
    xIsNext: boolean
}
const stateInit: State = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
};

export default function Game() {
    const [state, setState] = useState<State>(stateInit)

    const handleClick = (i: number) => {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = state.xIsNext ? "X" : "O";
        const _history = history.concat([{ squares: squares }])
        const _state: State = {
            history: _history,
            stepNumber: history.length,
            xIsNext: !state.xIsNext
        }

        setState(_state);
    }

    const jumpTo = (step: number) =>
        setState({
            history: stateInit.history,
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });

    const render = () => {
        const history = state.history;
        const current = history[state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        const status = winner ? "Winner: " + winner : "Next player: " + (state.xIsNext ? "X" : "O")

        return (
            <div className={styles.game}>
                <div className={styles['game-board']}>
                    <Board
                        squares={current.squares}
                        onClick={(i: number) => handleClick(i)}
                    />
                </div>
                <div className={styles['game-info']}>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );

    }
    return render()
}

function calculateWinner(squares: (string | null)[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}