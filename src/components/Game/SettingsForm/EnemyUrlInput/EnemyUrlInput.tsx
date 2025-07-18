import { UIButton, UIButtonSize } from "@/components/ui/UIButton/UIButton";
import { UIInput } from "@/components/ui/UIInput/UIInput";
import { useAnimation } from "@/hooks/useAnimation";
import { classNames } from "@/utils/classNames";
import { useState } from "react";
import cls from "./EnemyUrlInput.module.scss";

type EnemyUrlInputProps = {
    hasEnemy: boolean;
    onEnemySelect: (src: string) => void;
};

export const EnemyUrlInput = ({
    hasEnemy,
    onEnemySelect,
}: EnemyUrlInputProps) => {
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
        onEnemySelect("");
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
                        size={UIButtonSize.S}
                        disabled={hasEnemy}
                        onClick={onEnemySelectHandler}
                    >
                        Установить врага
                    </UIButton>
                }
                allowClear
                onClear={onClearHandler}
                placeholder={"Введите URL изображения"}
            ></UIInput>
            {hasError && <div>Пожалуйста, введите URL изображения.</div>}
        </div>
    );
};
