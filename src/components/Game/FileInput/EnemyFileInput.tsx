import { useState } from "react";
import { classNames } from "../../../utils/classNames";
import { UIButton, UIButtonSize } from "../../ui/UIButton/UIButton";
import cls from "./EnemyFileInput.module.scss";

type FileInputProps = {
    onEnemySelect: (src: string) => void;
};

export const FileInput = ({ onEnemySelect }: FileInputProps) => {
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
                <span className={cls["enemy-file-input__preview"]}>
                    {`Выбран: ${fileData.name}`}
                    <UIButton
                        className={cls["enemy-file-input__preview-btn"]}
                        size={UIButtonSize.S}
                        onClick={onEnemySelectHandler}
                    >
                        Set Enemy
                    </UIButton>
                </span>
            )}
        </label>
    );
};
