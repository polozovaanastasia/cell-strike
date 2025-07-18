import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "@/components/ui/UIButton/UIButton";

import {
    OptionType,
    UIRadioGroup,
    UIRadioVariant,
} from "@/components/ui/UIRadioGroup/UIRadioGroup";
import { useState } from "react";
import { EnemyFileInput } from "./EnemyFileInput/EnemyFileInput";
import { EnemyUrlInput } from "./EnemyUrlInput/EnemyUrlInput";
import cls from "./SettingsForm.module.scss";

enum EnemyInputModes {
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
        // disabled: true,
    },
];

type SettingsFormProps = {
    hasEnemy: boolean;
    setEnemy: (url: string) => void;
    startGame: (isStarted: boolean) => void;
};

export const SettingsForm = ({
    hasEnemy,
    setEnemy,
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
