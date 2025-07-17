import { UIButton, UIButtonSize } from "@/components/ui/UIButton/UIButton";
import { classNames } from "@/utils/classNames";
import { useState } from "react";
import cls from "./EnemyFileInput.module.scss";

type EnemyFileInputProps = {
    onEnemySelect: (src: string) => void;
};

export const EnemyFileInput = ({ onEnemySelect }: EnemyFileInputProps) => {
    const [fileData, setFileData] = useState<{
        name: string;
        src: string;
    } | null>(null);

    const EnemyFileInputClassNames = classNames(
        cls["enemy-file-input"],
        {
            [cls["enemy-file-input__has-file"]]: !!fileData,
        },
        []
    );

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const imageUrl = URL.createObjectURL(files[0]);
            setFileData({ name: files[0].name, src: imageUrl });
        }
    };
    const onEnemySelectHandler = () => {
        if (!fileData) return;
        onEnemySelect(fileData.src);
    };
    return (
        <label className={EnemyFileInputClassNames}>
            {!fileData && (
                <UIButton
                    className={cls["enemy-file-input__button"]}
                    size={UIButtonSize.S}
                    onClick={() => {}}
                >
                    Select enemy
                    <input
                        className={cls["enemy-file-input__control"]}
                        type="file"
                        onChange={onChangeHandler}
                    />
                </UIButton>
            )}
            {fileData && (
                <div className={cls["enemy-file-input__preview"]}>
                    <span className={cls["enemy-file-input__preview-label"]}>
                        Выбран:
                    </span>
                    <span className={cls["enemy-file-input__preview-file"]}>
                        {fileData.name}
                    </span>
                    <UIButton
                        className={cls["enemy-file-input__preview-btn"]}
                        size={UIButtonSize.S}
                        onClick={onEnemySelectHandler}
                    >
                        Set Enemy
                    </UIButton>
                </div>
            )}
        </label>
    );
};
