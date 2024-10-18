import { useState } from "react";
import styles from "./tic-tac-toe.module.scss";
const Square = ({
  value,
  handleClick,
}: {
  value: string;
  handleClick: () => void;
}) => {
  return (
    <button className={styles.item} onClick={handleClick}>
      {value}
    </button>
  );
};
export const TicTacToe = () => {
  const [player, setPlayer] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState();
  const winningPattern = {
    across: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    down: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ],
    diagonal: [
      [0, 4, 8],
      [2, 4, 6],
    ],
  };

  const handleClick = (i: number) => {
    if (winner) {
      return;
    }
    let arr = [...cells];
    if (player === "X") {
      arr[i] = "X";
      setPlayer("0");
    } else {
      arr[i] = "0";
      setPlayer("X");
    }
    checkWinner(arr);
    setCells(arr);
  };

  const checkWinner = (arr: any[]) => {
    Object.entries(winningPattern).map((key) => {
      key[1].map((item) => {
        if (arr[item[0]] === "" || arr[item[1]] === "" || arr[item[2]] === "") {
        } else if (
          arr[item[0]] === arr[item[1]] &&
          arr[item[1]] === arr[item[2]]
        ) {
          setWinner(arr[item[0]]);
        }
      });
    });
  };
  const handleReset = () => {
    setCells(Array(9));
    setWinner(undefined);
  };
  return (
    <div>
      <h1>Tic tac toe game</h1>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.block}>
            <Square value={cells[0]} handleClick={() => handleClick(0)} />
            <Square value={cells[1]} handleClick={() => handleClick(1)} />
            <Square value={cells[2]} handleClick={() => handleClick(2)} />
          </div>
          <div className={styles.block}>
            <Square value={cells[3]} handleClick={() => handleClick(3)} />
            <Square value={cells[4]} handleClick={() => handleClick(4)} />
            <Square value={cells[5]} handleClick={() => handleClick(5)} />
          </div>
          <div className={styles.block}>
            <Square value={cells[6]} handleClick={() => handleClick(6)} />
            <Square value={cells[7]} handleClick={() => handleClick(7)} />
            <Square value={cells[8]} handleClick={() => handleClick(8)} />
          </div>
        </div>
        {winner && <div className={styles.winnerText}>Winner is {winner}</div>}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default TicTacToe;
