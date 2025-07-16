import { useState } from "react";
import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "../../ui/UIButton/UIButton";
import { EnemyInputModes } from "../Game";
import { EnemyFileInput } from "./EnemyFileInput/EnemyFileInput";
import { EnemyUrlInput } from "./EnemyUrlInput/EnemyUrlInput";
import cls from "./SettingsForm.module.scss";

type SettingsFormProps = {
    enemyInputMode: EnemyInputModes | null;
    setEnemy: (url: string) => void;
    startGame: (isStarted: boolean) => void;
};

export const SettingsForm = ({
    enemyInputMode,
    setEnemy,
    startGame,
}: SettingsFormProps) => {
    const [isEnemySelected, setIsEnemySelected] = useState<boolean>(false);

    const onEnemySelectHandler = (src: string) => {
        setEnemy(src);
        setIsEnemySelected(true);
    };

    const startGameHandler = () => {
        startGame(true);
    };
    return (
        <div className={cls["settings-form"]}>
            {enemyInputMode === EnemyInputModes.URL && (
                <EnemyUrlInput onEnemySelect={onEnemySelectHandler} />
            )}
            {enemyInputMode === EnemyInputModes.UPLOAD && (
                <EnemyFileInput onEnemySelect={onEnemySelectHandler} />
            )}

            {isEnemySelected && (
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
