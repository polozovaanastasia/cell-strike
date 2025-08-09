import { classNames } from "@/utils/classNames";
import { UIRadio } from "../UIRadio/UIRadio";
import cls from "./UIRadioGroup.module.scss";

export enum UIRadioVariant {
    DEFAULT = "default",
    BUTTON = "button",
    CARDS = "cards",
}

export type OptionType<TValue> = {
    value: TValue;
    label: string;
    disabled?: boolean;
};

type UIRadioGroupProps<TValue, TOption> = {
    name: string;
    value: TValue | null;
    options: TOption[];
    disabled?: boolean;
    variant?: UIRadioVariant;
    onChange: (value: TValue) => void;
    renderOption?: (option: TOption) => React.ReactNode;
    className?: string;
};

export const UIRadioGroup = <
    TValue extends string | number = string,
    TOption extends OptionType<TValue> = OptionType<TValue>
>({
    name,
    value,
    options,
    disabled = false,
    variant = UIRadioVariant.DEFAULT,
    onChange,
    renderOption,
    className,
}: UIRadioGroupProps<TValue, TOption>) => {
    const UIRadioGroupClasses = classNames(cls["ui-radio-group"], {}, [
        className,
        cls[`variant-${variant}`],
    ]);

    return (
        <div className={UIRadioGroupClasses}>
            {options.map((option) => (
                <UIRadio
                    key={option.value}
                    name={name}
                    value={option.value}
                    label={option.label}
                    checked={value === option.value}
                    disabled={disabled || option.disabled}
                    variant={variant}
                    onChange={onChange}
                >
                    {renderOption && renderOption(option)}
                </UIRadio>
            ))}
        </div>
    );
};
