import { memo, useEffect, useState } from "react";
import bloodImg from "../../../assets/images/blood.png";
import { classNames } from "../../../utils/classNames";
import cls from "./GameCell.module.scss";

type GameCellProps = {
    hasEnemy: boolean;
    enemyUrl: string;
    updateHits: () => void;
};

export const GameCell = memo(
    ({ hasEnemy, enemyUrl, updateHits }: GameCellProps) => {
        const [image, setImage] = useState<string>(enemyUrl);

        const gameCellClassNames = classNames(cls["game-cell"], {
            [cls["game-cell_has-enemy"]]: hasEnemy,
        });

        const onClickHandler = () => {
            if (!hasEnemy) return;
            updateHits();
            setImage(bloodImg);
        };

        useEffect(() => {
            setImage(enemyUrl);
        }, [enemyUrl, hasEnemy]);

        return (
            <div
                className={gameCellClassNames}
                style={
                    hasEnemy
                        ? {
                              backgroundImage: `url(${image})`,
                          }
                        : undefined
                }
                onClick={onClickHandler}
            ></div>
        );
    }
);
