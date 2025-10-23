import { OptionType } from "@/components/ui/UIRadioGroup/UIRadioGroup";
import { EnemyInputModes } from "@/types";

type EnemyInputModeType = OptionType<EnemyInputModes>;
type GameLocationType = OptionType<number> & {
    cssClassName: string;
};

export const enemyInputModes: EnemyInputModeType[] = [
    {
        value: EnemyInputModes.URL,
        label: "Вставить ссылку на изображение",
    },
    {
        value: EnemyInputModes.UPLOAD,
        label: "Загрузить изображение с компьютера",
    },
];

export const gameLocations: GameLocationType[] = [
    {
        value: 1,
        label: "Космос",
        cssClassName: "space",
    },
    {
        value: 2,
        label: "Поле",
        cssClassName: "nature",
    },
];
