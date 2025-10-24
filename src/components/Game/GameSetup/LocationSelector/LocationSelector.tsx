import {
    UIRadioGroup,
    UIRadioVariant,
} from "@/components/ui/UIRadioGroup/UIRadioGroup";
import { GameLocationsValue } from "@/types";
import { classNames } from "@/utils/classNames";
import { gameLocations } from "../options";
import cls from "./LocationSelector.module.scss";

type LocationSelectorProps = {
    enemyImageUrl: string;
    location: GameLocationsValue | null;
    setLocation: (value: GameLocationsValue) => void;
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
                            }
                            // [cls[`option-bg_${option.cssClassName}`]]
                        )}
                    >
                        <div
                            className={cls["location-selector__option_bg"]}
                            style={{
                                backgroundImage: `url(../../../../src/assets/images/${option.bgImage})`,
                            }}
                        ></div>
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
