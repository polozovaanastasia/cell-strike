import { UIButton, UIButtonSize } from "@/components/ui/UIButton/UIButton";
import { UIInput } from "@/components/ui/UIInput/UIInput";
import { useAnimation } from "@/hooks/useAnimation";
import { useValidators } from "@/hooks/useValidators";
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
    const [error, setError] = useState<string>("");
    const { validateImageUrl } = useValidators();
    const [animationIsActive, triggerAnimationStart, triggerAnimationEnd] =
        useAnimation();

    const EnemyUrlInputClassNames = classNames(
        cls["enemy-url-input"],
        {
            "animation-shake": animationIsActive,
            [cls["enemy-url-input__has-error"]]: !!error,
        },
        []
    );

    const onEnemySelectHandler = async () => {
        const isUrlValid = await validateImageUrl(url);
        const errorMessage = !url
            ? "Пожалуйста, введите URL изображения."
            : "Некорректный URL изображения";

        if (!url || !isUrlValid) {
            setError(errorMessage);
            triggerAnimationStart();
            return;
        }

        onEnemySelect(url);
    };

    const onChangeHandler = (url: string) => {
        setUrl(url);
    };

    const onClearHandler = () => {
        setUrl("");
        onEnemySelect("");
    };

    return (
        <div
            className={classNames(EnemyUrlInputClassNames)}
            onBlur={() => {
                setError("");
            }}
            onAnimationEnd={triggerAnimationEnd}
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
            {error && <div>{error}</div>}
        </div>
    );
};
