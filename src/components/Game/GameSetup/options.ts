import { OptionType } from "@/components/ui/UIRadioGroup/UIRadioGroup";
import { EnemyInputModes, GameLocationsValue } from "@/types";

type EnemyInputModeType = OptionType<EnemyInputModes>;
type GameLocationType = OptionType<GameLocationsValue> & {
    cssClassName: string;
    bgImage: string;
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
        value: GameLocationsValue.SPACE,
        label: "Космос",
        cssClassName: "space",
        bgImage: "location-bg-space.jpg",
    },
    {
        value: GameLocationsValue.NATURE,
        label: "Поле",
        cssClassName: "nature",
        bgImage: "location-bg-nature.jpg",
    },
];
