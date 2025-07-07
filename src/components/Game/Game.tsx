import { useEffect, useState } from "react";
import { useEnemyIndex } from "../../providers/enemy/useEnemyIndex";
import cls from "./Game.module.scss";
import { GameGrid } from "./GameGrid/GameGrid";
import { SettingsForm } from "./SettingsForm/SettingsForm";

// type GameProps = {};

const gameCells = new Array(5 * 3).fill({ hasEnemy: "false" });

export const Game = () => {
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const { enemyIndex, setEnemyIndex } = useEnemyIndex();

    const startGame = () => {
        setIsStarted(true);
    };

    const getRandomIndex = () => {
        return Math.floor(Math.random() * gameCells.length);
    };

    useEffect(() => {
        if (!isStarted) return;
        const interval = setInterval(() => {
            const randomIndex = getRandomIndex();
            console.log(randomIndex);
            setEnemyIndex(randomIndex);
            console.log(enemyIndex);
        }, 1200);

        return () => clearInterval(interval);
    }, [isStarted]);

    return (
        <div className={cls.game}>
            <SettingsForm startGame={startGame} />
            <GameGrid enemyIndex={enemyIndex} gameCells={gameCells} />
        </div>
    );
};
