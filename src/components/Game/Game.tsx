import { useGameState } from "@/hooks/useGameState";
import { useState } from "react";
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
                    hasEnemy={!!enemy.url}
                    setEnemy={setEnemy}
                    startGame={onStartGameHandler}
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
