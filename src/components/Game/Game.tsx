import { useGameState } from "../../hooks/useGameState";
import cls from "./Game.module.scss";
import { GameGrid } from "./GameGrid/GameGrid";
import { SettingsForm } from "./SettingsForm/SettingsForm";

export const Game = () => {
    const { gameCells, enemy, hits, misses, addEnemy, startGame, updateHits } =
        useGameState();

    return (
        <div className={cls.game}>
            <SettingsForm startGame={startGame} addEnemy={addEnemy} />
            <h1>Hits: {hits}</h1>
            <h1>Misses: {misses}</h1>
            <GameGrid
                enemyIndex={enemy.index}
                enemyUrl={enemy.url}
                gameCells={gameCells}
                updateHits={updateHits}
            />
        </div>
    );
};
