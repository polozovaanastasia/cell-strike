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
        <label className={classNames(cls["enemy-file-input"])}>
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
                    {fileData.name}
                    <UIButton
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
