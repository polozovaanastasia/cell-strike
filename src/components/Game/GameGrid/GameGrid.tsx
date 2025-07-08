import { EnemyIndexType } from "../../../hooks/useGameState";
import { classNames } from "../../../utils/classNames";
import { GameCell } from "../GameCell/GameCell";
import cls from "./GameGrid.module.scss";

type GameCell = {
    hasEnemy: boolean;
};

type GameGridProps = {
    enemyIndex: EnemyIndexType;
    enemyUrl: string;
    gameCells: GameCell[];
    updateHits: () => void;
};

export const GameGrid = ({
    enemyIndex,
    enemyUrl,
    gameCells,
    updateHits,
}: GameGridProps) => {
    return (
        <div className={classNames(cls["game-grid"])}>
            {gameCells.map((cell, index) => {
                const hasEnemy = index === enemyIndex;
                return (
                    <GameCell
                        key={index}
                        index={index}
                        hasEnemy={hasEnemy}
                        enemyUrl={enemyUrl}
                        updateHits={updateHits}
                    />
                );
            })}
        </div>
    );
};
