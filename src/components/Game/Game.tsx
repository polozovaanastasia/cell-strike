import { useGameState } from "@/hooks/useGameState";
import { useState } from "react";
import cls from "./Game.module.scss";
import { GameGrid } from "./GameGrid/GameGrid";
import { GameSetup } from "./GameSetup/GameSetup";
import { GameStats } from "./GameStats/GameStats";

export const Game = () => {
    const {
        gameCells,
        enemy,
        location,
        hits,
        misses,
        setEnemy,
        setLocation,
        startGame,
        updateHits,
    } = useGameState();
    const [isStarted, setIsStarted] = useState<boolean>(false);

    const onStartGameHandler = () => {
        startGame();
        setIsStarted(true);
    };

    return (
        <div className={cls.game}>
            {!isStarted && (
                <GameSetup
                    enemyImageUrl={enemy.url}
                    setEnemy={setEnemy}
                    location={location}
                    setLocation={setLocation}
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
