import { useState } from "react";
import { UIButton, UIButtonSize } from "../../ui/UIButton/UIButton";
import { UIInput } from "../../ui/UIInput/UIInput";
import cls from "./SettingsForm.module.scss";

type SettingsFormProps = {
    startGame: (isStarted: boolean) => void;
};

export const SettingsForm = ({ startGame }: SettingsFormProps) => {
    const [url, setUrl] = useState<string>("");

    const onChangeHandler = (value: string) => {
        setUrl(value);
    };

    const addImageUrlHandler = () => {};

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
                        onClick={addImageUrlHandler}
                        size={UIButtonSize.S}
                    >
                        Set enemy
                    </UIButton>
                }
            ></UIInput>
            <UIButton onClick={startGameHandler}>Start</UIButton>
        </div>
    );
};
