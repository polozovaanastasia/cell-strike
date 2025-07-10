import { EnemyIndexType } from "../../../types";
import { classNames } from "../../../utils/classNames";
import { GameCell } from "../GameCell/GameCell";
import cls from "./GameGrid.module.scss";

type GameGridProps = {
    enemyIndex: EnemyIndexType;
    enemyUrl: string;
    gameCells: Array<null>;
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
                        hasEnemy={hasEnemy}
                        enemyUrl={enemyUrl}
                        updateHits={updateHits}
                    />
                );
            })}
        </div>
    );
};
