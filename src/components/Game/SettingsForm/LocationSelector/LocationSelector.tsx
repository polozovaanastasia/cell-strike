import {
    UIRadioGroup,
    UIRadioVariant,
} from "@/components/ui/UIRadioGroup/UIRadioGroup";
import { classNames } from "@/utils/classNames";
import { gameLocations } from "../options";
import cls from "./LocationSelector.module.scss";

type LocationSelectorProps = {
    location: number;
    setLocation: (value: number) => void;
};

export const LocationSelector = ({
    location,
    setLocation,
}: LocationSelectorProps) => {
    return (
        <div className={classNames(cls["location-selector"], {}, [])}>
            <UIRadioGroup
                options={gameLocations}
                name="location"
                value={location}
                onChange={setLocation}
                variant={UIRadioVariant.CARDS}
                renderOption={(option) => (
                    <div>
                        <div
                            style={{
                                background: `url(${option.locationImageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                padding: "30px",
                            }}
                        >
                            {option.label} from SettingsForm components
                        </div>
                    </div>
                )}
            ></UIRadioGroup>
        </div>
    );
};
