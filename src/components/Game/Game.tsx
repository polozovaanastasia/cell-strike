import { useState } from "react";
import { useGameState } from "../../hooks/useGameState";
import { OptionType, UIRadioGroup } from "../ui/UIRadioGroup/UIRadioGroup";
import cls from "./Game.module.scss";
import { GameGrid } from "./GameGrid/GameGrid";
import { GameStats } from "./GameStats/GameStats";
import { SettingsForm } from "./SettingsForm/SettingsForm";

export enum EnemyInputModes {
    URL = "url",
    UPLOAD = "upload",
}

const enemyInputModes: OptionType<EnemyInputModes>[] = [
    {
        value: EnemyInputModes.URL,
        label: "Вставить ссылку на изображение",
    },
    {
        value: EnemyInputModes.UPLOAD,
        label: "Загрузить изображение с компьютера",
    },
];

export const Game = () => {
    const { gameCells, enemy, hits, misses, setEnemy, startGame, updateHits } =
        useGameState();
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [selectedEnemyInputMode, setSelectedEnemyInputMode] =
        useState<EnemyInputModes | null>(null);

    const onChangeEnemyInputMode = (value: EnemyInputModes) => {
        setSelectedEnemyInputMode(value);
    };

    const onStartGameHandler = () => {
        startGame();
        setIsStarted(true);
    };

    return (
        <div className={cls.game}>
            <UIRadioGroup
                name="enemyInputMode"
                value={selectedEnemyInputMode}
                options={enemyInputModes}
                onChange={onChangeEnemyInputMode}
            />
            {!isStarted && (
                <SettingsForm
                    enemyInputMode={selectedEnemyInputMode}
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
