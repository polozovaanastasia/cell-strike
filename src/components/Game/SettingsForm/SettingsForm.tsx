import { useState } from "react";
import { UIButton, UIButtonSize } from "../../ui/UIButton/UIButton";
import { UIInput } from "../../ui/UIInput/UIInput";

type SettingsFormProps = {};

export const SettingsForm = ({}: SettingsFormProps) => {
    const [url, setUrl] = useState<string>("");

    const onChangeHandler = (value: string) => {
        setUrl(value);
    };
    const addImageUrlHandler = () => {};

    return (
        <div className="settings-form">
            <UIInput
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
