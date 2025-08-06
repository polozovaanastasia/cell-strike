import { UIButton, UIButtonSize } from "@/components/ui/UIButton/UIButton";
import { UIInput } from "@/components/ui/UIInput/UIInput";
import { UILoader, UILoaderSize } from "@/components/ui/UILoader/UILoader";
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
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { validateImageUrl } = useValidators();
    const [isAnimating, triggerAnimationStart, triggerAnimationEnd] =
        useAnimation();

    const EnemyUrlInputClassNames = classNames(
        cls["enemy-url-input"],
        {
            "animation-shake": isAnimating,
            [cls["enemy-url-input__is-loading"]]: isLoading,
            [cls["enemy-url-input__has-error"]]: !!error,
        },
        []
    );

    const validateWithDelay = async () => {
        const MIN_LOADING_TIME = 300;
        const startTime = Date.now();

        const isUrlValid = await validateImageUrl(url);
        const elapsedTime = Date.now() - startTime;

        setIsLoading(true);

        if (elapsedTime < MIN_LOADING_TIME) {
            await new Promise((resolve) =>
                setTimeout(resolve, MIN_LOADING_TIME)
            );
        }

        setIsLoading(false);
        return isUrlValid;
    };

    const onEnemySelectHandler = async () => {
        const isUrlValid = await validateWithDelay();

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
        setIsLoading(false);
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
                        className={cls["enemy-url-input__btn"]}
                    >
                        {isLoading ? (
                            <UILoader size={UILoaderSize.S} />
                        ) : (
                            "Установить врага"
                        )}
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
