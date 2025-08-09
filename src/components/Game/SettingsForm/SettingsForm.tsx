import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "@/components/ui/UIButton/UIButton";

import {
    UIRadioGroup,
    UIRadioVariant,
} from "@/components/ui/UIRadioGroup/UIRadioGroup";
import { EnemyInputModes } from "@/types";
import { useState } from "react";
import { EnemyFileInput } from "./EnemyFileInput/EnemyFileInput";
import { EnemyUrlInput } from "./EnemyUrlInput/EnemyUrlInput";
import { LocationSelector } from "./LocationSelector/LocationSelector";
import cls from "./SettingsForm.module.scss";
import { enemyInputModes } from "./options";

type SettingsFormProps = {
    hasEnemy: boolean;
    setEnemy: (url: string) => void;
    location: number;
    setLocation: (value: number) => void;
    startGame: (isStarted: boolean) => void;
};

export const SettingsForm = ({
    hasEnemy,
    setEnemy,
    location,
    setLocation,
    startGame,
}: SettingsFormProps) => {
    const [enemyInputMode, setEnemyInputMode] =
        useState<EnemyInputModes | null>(null);

    const onEnemySelectHandler = (src: string) => {
        setEnemy(src);
    };

    const startGameHandler = () => {
        startGame(true);
    };

    return (
        <div className={cls["settings-form"]}>
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

            {hasEnemy && (
                <LocationSelector
                    location={location}
                    setLocation={setLocation}
                />
            )}

            {hasEnemy && (
                <UIButton
                    type={UIButtonType.OUTLINE}
                    size={UIButtonSize.LG}
                    onClick={startGameHandler}
                >
                    Start Game
                </UIButton>
            )}
        </div>
    );
};
