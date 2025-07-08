import { useGameState } from "../../hooks/useGameState";
import cls from "./Game.module.scss";
import { GameGrid } from "./GameGrid/GameGrid";
import { SettingsForm } from "./SettingsForm/SettingsForm";

// type GameProps = {};

export const Game = () => {
    const {
        enemyUrl,
        addEnemy,
        gameCells,
        enemyIndex,
        startGame,
        hits,
        updateHits,
    } = useGameState();

    return (
        <div className={cls.game}>
            <SettingsForm startGame={startGame} addEnemy={addEnemy} />
            <h1>Hits: {hits}</h1>
            <GameGrid
                enemyIndex={enemyIndex}
                enemyUrl={enemyUrl}
                gameCells={gameCells}
                updateHits={updateHits}
            />
        </div>
    );
};
