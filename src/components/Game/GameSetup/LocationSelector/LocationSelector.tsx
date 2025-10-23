import {
    UIRadioGroup,
    UIRadioVariant,
} from "@/components/ui/UIRadioGroup/UIRadioGroup";
import { classNames } from "@/utils/classNames";
import { gameLocations } from "../options";
import cls from "./LocationSelector.module.scss";

type LocationSelectorProps = {
    enemyImageUrl: string;
    location: number | null;
    setLocation: (value: number) => void;
};

export const LocationSelector = ({
    enemyImageUrl,
    location,
    setLocation,
}: LocationSelectorProps) => {
    return (
        <div className={cls["location-selector"]}>
            <span>Выберите локацию:</span>
            <UIRadioGroup
                name="location"
                options={gameLocations}
                value={location}
                onChange={setLocation}
                variant={UIRadioVariant.CARDS}
                renderOption={(option, isSelected) => (
                    <div
                        className={classNames(
                            cls["location-selector__option"],
                            {
                                [cls["location-selector__option_selected"]]:
                                    isSelected,
                            },
                            [cls[`option-bg_${option.cssClassName}`]]
                        )}
                    >
                        <img
                            className={cls["location-selector__option-img"]}
                            src={enemyImageUrl}
                            alt="enemyImage"
                        />
                    </div>
                )}
            ></UIRadioGroup>
        </div>
    );
};
