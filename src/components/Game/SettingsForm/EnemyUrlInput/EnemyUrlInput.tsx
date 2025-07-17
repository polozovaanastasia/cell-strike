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
    const [hasError, setHasError] = useState<boolean>(false);
    const [hasAnimation, triggerAnimation] = useAnimation();

    const EnemyUrlInputClassNames = classNames(
        cls["enemy-url-input"],
        {
            "animation-shake": hasAnimation,
            [cls["enemy-url-input__has-error"]]: hasError,
        },
        []
    );

    const onChangeHandler = (url: string) => {
        setUrl(url);
    };

    const onEnemySelectHandler = () => {
        if (!url) {
            setHasError(true);
            triggerAnimation();
            return;
        }
        onEnemySelect(url);
    };

    const onClearHandler = () => {
        setUrl("");
    };

    return (
        <div
            className={classNames(EnemyUrlInputClassNames)}
            onBlur={() => {
                setHasError(false);
            }}
        >
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
                allowClear
                onClear={onClearHandler}
                placeholder={"Enter image URL"}
            ></UIInput>
            {hasError && <div>Error message</div>}
        </div>
    );
};
