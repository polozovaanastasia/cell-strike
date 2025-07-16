import { classNames } from "../../../utils/classNames";
import { UIRadio } from "../UIRadio/UIRadio";
import cls from "./UIRadioGroup.module.scss";

export type OptionType<T = string> = {
    value: T;
    label: string;
};

type UIRadioGroupProps<T = string> = {
    name: string;
    value: T | null;
    options: OptionType<T>[];
    onChange: (value: T) => void;
};

export const UIRadioGroup = <T extends string>({
    name,
    value,
    options,
    onChange,
}: UIRadioGroupProps<T>) => {
    return (
        <div className={classNames(cls["ui-radio-group"], {}, [])}>
            {options.map((option: OptionType<T>) => (
                <UIRadio
                    key={option.value}
                    name={name}
                    value={option.value}
                    label={option.label}
                    checked={value === option.value}
                    onChange={onChange}
                />
            ))}
        </div>
    );
};
