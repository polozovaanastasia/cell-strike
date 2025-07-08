import { useState } from "react";
import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "../../ui/UIButton/UIButton";
import { UIInput } from "../../ui/UIInput/UIInput";
import cls from "./SettingsForm.module.scss";

type SettingsFormProps = {
    addEnemy: (url: string) => void;
    startGame: (isStarted: boolean) => void;
};

export const SettingsForm = ({ addEnemy, startGame }: SettingsFormProps) => {
    const [url, setUrl] = useState<string>("");

    const onChangeHandler = (value: string) => {
        setUrl(value);
    };

    const addEnemyUrlHandler = () => {
        addEnemy(url);
    };

    const startGameHandler = () => {
        startGame(true);
    };
    return (
        <div className={cls["settings-form"]}>
            <UIInput
                className={cls["settings-form__input"]}
                value={url}
                onChange={onChangeHandler}
                addonRight={
                    <UIButton
                        onClick={addEnemyUrlHandler}
                        size={UIButtonSize.S}
                    >
                        Set enemy
                    </UIButton>
                }
            ></UIInput>
            <UIButton type={UIButtonType.OUTLINE} onClick={startGameHandler}>
                Start
            </UIButton>
        </div>
    );
};
