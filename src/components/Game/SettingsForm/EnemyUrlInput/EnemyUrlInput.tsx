import { useState } from "react";
import { classNames } from "../../../../utils/classNames";
import { UIButton, UIButtonSize } from "../../../ui/UIButton/UIButton";
import { UIInput } from "../../../ui/UIInput/UIInput";
import cls from "./EnemyUrlInput.module.scss";

type EnemyUrlInputProps = {
    onEnemySelect: (src: string) => void;
};

export const EnemyUrlInput = ({ onEnemySelect }: EnemyUrlInputProps) => {
    const [url, setUrl] = useState<string>("");

    const onChangeHandler = (url: string) => {
        setUrl(url);
    };

    const onEnemySelectHandler = () => {
        onEnemySelect(url);
    };
    return (
        <div className={classNames(cls["enemy-url-input"], {}, [])}>
            <UIInput
                className={cls["enemy-url-input__control"]}
                value={url}
                onChange={onChangeHandler}
                addonRight={
                    <UIButton
                        onClick={onEnemySelectHandler}
                        size={UIButtonSize.S}
                    >
                        Set enemy
                    </UIButton>
                }
                // helperText="Hello i'm helper text! "
            ></UIInput>
        </div>
    );
};
