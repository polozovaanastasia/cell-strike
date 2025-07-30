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
    const [error, setError] = useState<string>("");
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

    const validateImageUrl = (url: string) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => reject(false);
            img.src = url;
        });
    };

    const onChangeHandler = (url: string) => {
        setUrl(url);
    };

    const onEnemySelectHandler = () => {
        if (!url) {
            setError("Пожалуйста, введите URL изображения.");
            triggerAnimationStart();
            return;
        }
        validateImageUrl(url)
            .then(() => {
                console.log(`SUCCESS! ${url} is valid`);
                onEnemySelect(url);
            })
            .catch(() => {
                console.log(`ERROR! ${url} is not valid`);
                setError("Некорректный URL изображения");
                triggerAnimationStart();
            });
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
