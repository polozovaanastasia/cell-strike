import { UIButton, UIButtonSize } from "@/components/ui/UIButton/UIButton";

import {
    UIRadioGroup,
    UIRadioVariant,
} from "@/components/ui/UIRadioGroup/UIRadioGroup";
import { EnemyInputModes, GameLocationsValue, GameSetupStep } from "@/types";
import { useState } from "react";
import { EnemyFileInput } from "./EnemyFileInput/EnemyFileInput";
import { EnemyUrlInput } from "./EnemyUrlInput/EnemyUrlInput";
import cls from "./GameSetup.module.scss";
import { LocationSelector } from "./LocationSelector/LocationSelector";
import { enemyInputModes } from "./options";

type GameSetupProps = {
    enemyImageUrl: string;
    location: GameLocationsValue | null;
    setEnemy: (url: string) => void;
    setLocation: (value: GameLocationsValue) => void;
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

    const [setupStep, setSetupStep] = useState<GameSetupStep>(
        GameSetupStep.ENEMY
    );

    const goNextStep = () => {
        const steps: GameSetupStep[] = [
            GameSetupStep.ENEMY,
            GameSetupStep.LOCATION,
            GameSetupStep.READY,
        ];

        const currentIndex = steps.indexOf(setupStep);
        const nextStep = steps[currentIndex + 1];

        if (nextStep) return setSetupStep(nextStep);
    };

    const isStep = (...steps: GameSetupStep[]) =>
        steps.includes(setupStep) && enemyImageUrl;

    const hasEnemy = !!enemyImageUrl;

    const onEnemySelectHandler = (src: string) => {
        setEnemy(src);
        goNextStep();
    };

    const onLocationSelectHandler = (value: GameLocationsValue) => {
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

            {isStep(GameSetupStep.LOCATION, GameSetupStep.READY) && (
                <LocationSelector
                    enemyImageUrl={enemyImageUrl}
                    location={location}
                    setLocation={onLocationSelectHandler}
                />
            )}
            {isStep(GameSetupStep.READY) && (
                <UIButton size={UIButtonSize.LG} onClick={startGameHandler}>
                    Start Game
                </UIButton>
            )}
        </div>
    );
};
