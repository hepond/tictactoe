import React, {useState} from 'react'
import Square from './Square'

const Board = () => {
    const [board,setBoard] = useState(Array(9).fill(null));
    const [player,setPlayer] = useState('X');
    const handelClick = pos => {
        if (board[pos]){
            return;
        }
        setPlayer((last)=>{
            if (last === 'X'){
                return 'O';
            }
            if (last === 'O'){
                return 'X'
            }
    

        });
        setBoard((prev)=>{
            return prev.map((square, p)=>{
                if (pos === p) {
                    return player;
                }
                return square;
            })
        });


    };
    const renderSquare = pos => {
        console.log(board[pos]);
        return (
            <Square 
            value = {board[pos]}
            onClick={()=> handelClick(pos)} 
            />
        );
    };
    
    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)} 
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)} 
            </div>
        </div>
    )
}

export default Board
