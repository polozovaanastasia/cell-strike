import { classNames } from "../../../utils/classNames";
import { UIRadio } from "../UIRadio/UIRadio";
import cls from "./UIRadioGroup.module.scss";

export enum UIRadioVariant {
    DEFAULT = "default",
    BUTTON = "button",
}

export type OptionType<T = string> = {
    value: T;
    label: string;
};

type UIRadioGroupProps<T = string> = {
    name: string;
    value: T | null;
    options: OptionType<T>[];
    variant?: UIRadioVariant;
    onChange: (value: T) => void;
    className?: string;
};

export const UIRadioGroup = <T extends string | number>({
    name,
    value,
    options,
    variant = UIRadioVariant.DEFAULT,
    onChange,
    className,
}: UIRadioGroupProps<T>) => {
    const UIRadioGroupClasses = classNames(cls["ui-radio-group"], {}, [
        className,
        cls[`variant-${variant}`],
    ]);

    return (
        <div className={UIRadioGroupClasses}>
            {options.map((option: OptionType<T>) => (
                <UIRadio
                    key={option.value}
                    name={name}
                    value={option.value}
                    label={option.label}
                    checked={value === option.value}
                    variant={variant}
                    onChange={onChange}
                />
            ))}
        </div>
    );
};
