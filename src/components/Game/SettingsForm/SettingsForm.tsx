import { useState } from "react";
import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "../../ui/UIButton/UIButton";
import { FileInput } from "../FileInput/EnemyFileInput";
import { EnemyUrlInput } from "./EnemyUrlInput/EnemyUrlInput";
import cls from "./SettingsForm.module.scss";

type SettingsFormProps = {
    setEnemy: (url: string) => void;
    startGame: (isStarted: boolean) => void;
};

export const SettingsForm = ({ setEnemy, startGame }: SettingsFormProps) => {
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
            <EnemyUrlInput onEnemySelect={onEnemySelectHandler} />
            <FileInput onEnemySelect={onEnemySelectHandler} />

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
