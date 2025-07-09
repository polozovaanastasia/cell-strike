import { memo } from "react";
import { classNames } from "../../../utils/classNames";
import cls from "./GameCell.module.scss";

type GameCellProps = {
    index: number;
    hasEnemy: boolean;
    enemyUrl: string;
    updateHits: () => void;
};

export const GameCell = memo(
    ({ index, hasEnemy, enemyUrl, updateHits }: GameCellProps) => {
        const gameCellClassNames = classNames(cls["game-cell"], {
            [cls["game-cell_has-enemy"]]: hasEnemy,
        });

        const onClickHandler = () => {
            if (!hasEnemy) return;
            updateHits();
        };

        return (
            <div
                className={gameCellClassNames}
                style={
                    hasEnemy
                        ? {
                              backgroundImage: `url(${enemyUrl})`,
                          }
                        : undefined
                }
                onClick={onClickHandler}
            ></div>
        );
    }
);
