import { useState } from "react";
import { useAnimation } from "../../../../hooks/useAnimation";
import { classNames } from "../../../../utils/classNames";
import { UIButton, UIButtonSize } from "../../../ui/UIButton/UIButton";
import { UIInput } from "../../../ui/UIInput/UIInput";
import cls from "./EnemyUrlInput.module.scss";

type EnemyUrlInputProps = {
    onEnemySelect: (src: string) => void;
};

export const EnemyUrlInput = ({ onEnemySelect }: EnemyUrlInputProps) => {
    const [url, setUrl] = useState<string>("");
    const [hasAnimation, triggerAnimation] = useAnimation();

    const EnemyUrlInputClassNames = classNames(
        cls["enemy-url-input"],
        {
            "shake-animation": hasAnimation,
        },
        []
    );

    const onChangeHandler = (url: string) => {
        setUrl(url);
    };

    const onEnemySelectHandler = () => {
        if (!url) {
            triggerAnimation();
            return;
        }
        onEnemySelect(url);
    };
    return (
        <div className={classNames(EnemyUrlInputClassNames)}>
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
