import { useGameState } from "@/hooks/useGameState";
import { useState } from "react";
import { animals, List, people } from "../ui/UIRadio/List";
import cls from "./Game.module.scss";
import { GameGrid } from "./GameGrid/GameGrid";
import { GameStats } from "./GameStats/GameStats";
import { SettingsForm } from "./SettingsForm/SettingsForm";

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
            <List
                items={animals}
                render={(animal) => (
                    <div>
                        Животное:
                        <div>ID: {animal.id}</div>
                        <div>NAME: {animal.name}</div>
                        <div>TYPE: {animal.type}</div>
                    </div>
                )}
            />
            _______
            <List
                items={people}
                render={(person) => (
                    <div>
                        Человек:
                        <div>ID: {person.id}</div>
                        <div>NAME: {person.name}</div>
                    </div>
                )}
            />
            {!isStarted && (
                <SettingsForm
                    hasEnemy={!!enemy.url}
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
