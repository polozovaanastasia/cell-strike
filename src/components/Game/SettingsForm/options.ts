import natureBgImage from "@/assets/images/location-bg-nature.jpg";
import spaceBgImage from "@/assets/images/location-bg-space.png";
import { OptionType } from "@/components/ui/UIRadioGroup/UIRadioGroup";
import { EnemyInputModes } from "@/types";

type EnemyInputModeType = OptionType<EnemyInputModes>;
type GameLocationType = OptionType<number> & {
    locationImageUrl: string;
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
        label: "Один",
        locationImageUrl: spaceBgImage,
    },
    {
        value: 2,
        label: "Два",
        locationImageUrl: natureBgImage,
    },
];
