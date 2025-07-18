import CrossIcon from "@/assets/images/icons/CrossIcon.svg";
import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "@/components/ui/UIButton/UIButton";
import { useAnimation } from "@/hooks/useAnimation";
import { classNames } from "@/utils/classNames";
import { useState } from "react";
import cls from "./EnemyFileInput.module.scss";

type FileType = {
    name: string;
    src: string;
    type: string;
} | null;

type EnemyFileInputProps = {
    onEnemySelect: (src: string) => void;
};

export const EnemyFileInput = ({ onEnemySelect }: EnemyFileInputProps) => {
    const [file, setFile] = useState<FileType>(null);

    const [hasError, setHasError] = useState<boolean>(false);
    const [hasAnimation, triggerAnimation] = useAnimation();

    const EnemyFileInputClassNames = classNames(
        cls["enemy-file-input"],
        {
            "animation-shake": hasAnimation,
            [cls["enemy-file-input__has-file"]]: !!file,
            [cls["enemy-file-input__has-error"]]: hasError,
        },
        []
    );

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);

            setFile({ name: file.name, type: file.type, src: imageUrl });
        }
    };

    const onClearHandler = () => {
        setFile(null);
        setHasError(false);
    };

    const validateFileType = (file: FileType) => {
        let fileIsImage;

        if (file) {
            fileIsImage = file.type.startsWith("image/");
        }
        return fileIsImage;
    };

    const onEnemySelectHandler = () => {
        const fileIsValid = validateFileType(file);

        if (!file || !fileIsValid) {
            setHasError(true);
            triggerAnimation();
            return;
        }

        onEnemySelect(file.src);
    };

    return (
        <div className={EnemyFileInputClassNames}>
            <div className={cls["enemy-file-input__container"]}>
                <div className={cls["enemy-file-input__preview"]}>
                    <span
                        className={cls["enemy-file-input__preview-label"]}
                        hidden
                    >
                        Выбран:
                    </span>
                    <span className={cls["enemy-file-input__preview-file"]}>
                        {file && file.name}
                    </span>
                    {file && (
                        <UIButton
                            type={UIButtonType.ICON}
                            size={UIButtonSize.S}
                            className={
                                cls["enemy-file-input__preview-clear-btn"]
                            }
                            onClick={onClearHandler}
                        >
                            <CrossIcon />
                        </UIButton>
                    )}
                </div>
                {!file && (
                    <UIButton
                        className={cls["enemy-file-input__button"]}
                        size={UIButtonSize.S}
                        onClick={() => {}}
                    >
                        Выбрать врага
                        <input
                            className={cls["enemy-file-input__control"]}
                            type="file"
                            accept="image/*"
                            onChange={onChangeHandler}
                        />
                    </UIButton>
                )}
                {file && (
                    <UIButton
                        className={cls["enemy-file-input__preview-btn"]}
                        size={UIButtonSize.S}
                        onClick={onEnemySelectHandler}
                    >
                        Установить врага
                    </UIButton>
                )}
            </div>
            {hasError && (
                <div className={cls["enemy-file-input__error-message"]}>
                    Пожалуйста, выберите файл c изображением.
                </div>
            )}
        </div>
    );
};
