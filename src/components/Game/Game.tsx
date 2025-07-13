import { useState } from "react";
import { useGameState } from "../../hooks/useGameState";
import cls from "./Game.module.scss";
import { GameGrid } from "./GameGrid/GameGrid";
import { GameStats } from "./GameStats/GameStats";
import { SettingsForm } from "./SettingsForm/SettingsForm";

export const Game = () => {
    const { gameCells, enemy, hits, misses, setEnemy, startGame, updateHits } =
        useGameState();
    const [isStarted, setIsStarted] = useState<boolean>(false);

    const onStartGameHandler = () => {
        startGame();
        setIsStarted(true);
    };

    return (
        <div className={cls.game}>
            {!isStarted && (
                <SettingsForm
                    startGame={onStartGameHandler}
                    setEnemy={setEnemy}
                />
            )}

            {isStarted && (
                <>
                    <GameStats hits={hits} misses={misses}></GameStats>

                    <GameGrid
                        enemyIndex={enemy.index}
                        enemyUrl={enemy.url}
                        gameCells={gameCells}
                        updateHits={updateHits}
                    />
                </>
            )}
        </div>
    );
};
