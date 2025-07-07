import { useState } from "react";
import { UIButton, UIButtonSize } from "../../ui/UIButton/UIButton";
import { UIInput } from "../../ui/UIInput/UIInput";
import cls from "./SettingsForm.module.scss";

type SettingsFormProps = {};

export const SettingsForm = ({}: SettingsFormProps) => {
    const [url, setUrl] = useState<string>("");

    const onChangeHandler = (value: string) => {
        setUrl(value);
    };
    const addImageUrlHandler = () => {};

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
            {/* <UIButton onClick={addImageUrlHandler}>Set enemy</UIButton> */}
        </div>
    );
};
