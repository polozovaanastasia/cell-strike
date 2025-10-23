import { UIButton, UIButtonSize } from "@/components/ui/UIButton/UIButton";

import {
    UIRadioGroup,
    UIRadioVariant,
} from "@/components/ui/UIRadioGroup/UIRadioGroup";
import { EnemyInputModes, GameSetupStepType } from "@/types";
import { useState } from "react";
import { EnemyFileInput } from "./EnemyFileInput/EnemyFileInput";
import { EnemyUrlInput } from "./EnemyUrlInput/EnemyUrlInput";
import cls from "./GameSetup.module.scss";
import { LocationSelector } from "./LocationSelector/LocationSelector";
import { enemyInputModes } from "./options";

type GameSetupProps = {
    enemyImageUrl: string;
    location: number | null;
    setEnemy: (url: string) => void;
    setLocation: (value: number) => void;
    startGame: (isStarted: boolean) => void;
};

export const GameSetup = ({
    enemyImageUrl,
    setEnemy,
    location,
    setLocation,
    startGame,
}: GameSetupProps) => {
    const [enemyInputMode, setEnemyInputMode] =
        useState<EnemyInputModes | null>(null);

    const [setupStep, setSetupStep] = useState<GameSetupStepType>(
        GameSetupStepType.ENEMY
    );

    const goNextStep = () => {
        const steps: GameSetupStepType[] = [
            GameSetupStepType.ENEMY,
            GameSetupStepType.LOCATION,
            GameSetupStepType.READY,
        ];

        const currentIndex = steps.indexOf(setupStep);
        const nextStep = steps[currentIndex + 1];

        if (nextStep) return setSetupStep(nextStep);
    };

    const isStep = (...steps: GameSetupStepType[]) =>
        steps.includes(setupStep) && enemyImageUrl;

    const hasEnemy = !!enemyImageUrl;

    const onEnemySelectHandler = (src: string) => {
        setEnemy(src);
        goNextStep();
    };

    const onLocationSelectHandler = (value: number) => {
        setLocation(value);
        goNextStep();
    };

    const startGameHandler = () => {
        startGame(true);
    };

    return (
        <div className={cls["game-setup"]}>
            <UIRadioGroup
                variant={UIRadioVariant.BUTTON}
                name="enemyInputMode"
                value={enemyInputMode}
                options={enemyInputModes}
                onChange={setEnemyInputMode}
                disabled={hasEnemy}
            />

            {enemyInputMode === EnemyInputModes.URL && (
                <EnemyUrlInput
                    hasEnemy={hasEnemy}
                    onEnemySelect={onEnemySelectHandler}
                />
            )}
            {enemyInputMode === EnemyInputModes.UPLOAD && (
                <EnemyFileInput
                    hasEnemy={hasEnemy}
                    onEnemySelect={onEnemySelectHandler}
                />
            )}

            {isStep(GameSetupStepType.LOCATION, GameSetupStepType.READY) && (
                <LocationSelector
                    enemyImageUrl={enemyImageUrl}
                    location={location}
                    setLocation={onLocationSelectHandler}
                />
            )}
            {isStep(GameSetupStepType.READY) && (
                <UIButton size={UIButtonSize.LG} onClick={startGameHandler}>
                    Start Game
                </UIButton>
            )}
        </div>
    );
};
