import { EnemyIndexType } from "../../../providers/enemy/EnemyContext";
import { classNames } from "../../../utils/classNames";
import { GameCell } from "../GameCell/GameCell";
import cls from "./GameGrid.module.scss";

type GameCell = {
    hasEnemy: boolean;
};

type GameGridProps = {
    enemyIndex: EnemyIndexType;
    gameCells: GameCell[];
};

export const GameGrid = ({ enemyIndex, gameCells }: GameGridProps) => {
    return (
        <div className={classNames(cls["game-grid"], {}, [])}>
            {gameCells.map((cell, index) => (
                <GameCell key={index} index={index} enemyIndex={enemyIndex}>
                    {cell.hasEnemy}
                </GameCell>
            ))}
        </div>
    );
};
