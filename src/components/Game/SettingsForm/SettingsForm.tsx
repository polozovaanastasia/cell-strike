import { useState } from "react";
import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "../../ui/UIButton/UIButton";
import {
    OptionType,
    UIRadioGroup,
    UIRadioVariant,
} from "../../ui/UIRadioGroup/UIRadioGroup";
import { EnemyFileInput } from "./EnemyFileInput/EnemyFileInput";
import { EnemyUrlInput } from "./EnemyUrlInput/EnemyUrlInput";
import cls from "./SettingsForm.module.scss";

enum EnemyInputModes {
    URL = "url",
    UPLOAD = "upload",
    // SRC = "src",
}

const enemyInputModes: OptionType<EnemyInputModes>[] = [
    {
        value: EnemyInputModes.URL,
        label: "Вставить ссылку на изображение",
    },
    {
        value: EnemyInputModes.UPLOAD,
        label: "Загрузить изображение с компьютера",
    },
    // {
    //     value: EnemyInputModes.SRC,
    //     label: "Загрузить изображение из источника",
    // },
];

type SettingsFormProps = {
    setEnemy: (url: string) => void;
    startGame: (isStarted: boolean) => void;
};

export const SettingsForm = ({ setEnemy, startGame }: SettingsFormProps) => {
    const [enemyInputMode, setEnemyInputMode] =
        useState<EnemyInputModes | null>(null);
    const [isEnemySelected, setIsEnemySelected] = useState<boolean>(false);

    const onEnemySelectHandler = (src: string) => {
        setEnemy(src);
        setIsEnemySelected(true);
    };

    const startGameHandler = () => {
        startGame(true);
    };
    return (
        <div className={cls["settings-form"]}>
            <UIRadioGroup
                variant={UIRadioVariant.BUTTON}
                name="enemyInputMode"
                value={enemyInputMode}
                options={enemyInputModes}
                onChange={setEnemyInputMode}
            />

            {enemyInputMode === EnemyInputModes.URL && (
                <EnemyUrlInput onEnemySelect={onEnemySelectHandler} />
            )}
            {enemyInputMode === EnemyInputModes.UPLOAD && (
                <EnemyFileInput onEnemySelect={onEnemySelectHandler} />
            )}

            {isEnemySelected && (
                <UIButton
                    type={UIButtonType.OUTLINE}
                    size={UIButtonSize.LG}
                    onClick={startGameHandler}
                >
                    Start Game
                </UIButton>
            )}
        </div>
    );
};
