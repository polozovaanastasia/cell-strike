import { ChangeEvent, HTMLInputTypeAttribute, memo, useId } from "react";
import { classNames } from "../../../utils/classNames";
import { UIButton, UIButtonSize, UIButtonType } from "../UIButton/UIButton";
import cls from "./UIInput.module.scss";

export enum UIInputVariant {
    DEFAULT = "default",
    FLOATING = "floating",
}

type UIInputProps = (UIInputWithClear | UIInputWithoutClear) & {
    value: string;
    variant?: UIInputVariant;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    addonLeft?: React.ReactNode;
    addonRight?: React.ReactNode;
    className?: string;
    onChange: (value: string) => void;
};

type UIInputWithClear = {
    allowClear: true;
    onClear?: () => void;
};

type UIInputWithoutClear = {
    allowClear?: false;
    onClear?: never;
};

export const UIInput = memo(
    ({
        value,
        variant = UIInputVariant.DEFAULT,
        type = "text",
        placeholder,
        disabled,
        autoFocus,
        addonLeft,
        addonRight,
        allowClear,
        className,
        onClear,
        onChange,
    }: UIInputProps) => {
        const id = useId();

        const UIInputClasses = classNames(
            cls["ui-input"],
            { [cls["ui-input_disabled"]]: disabled },
            [className, cls[`variant-${variant}`]]
        );

        const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
        };

        const onClearHandler = () => {
            if (onClear) onClear();
            onChange("");
        };

        return (
            <div className={UIInputClasses}>
                {addonLeft && (
                    <div className={cls["ui-input__addon_left"]}>
                        {addonLeft}
                    </div>
                )}
                <input
                    id={`ui-input_${id}`}
                    className={classNames(cls["ui-input__control"])}
                    value={value}
                    type={type}
                    placeholder={
                        variant === UIInputVariant.FLOATING ? " " : placeholder
                    }
                    disabled={disabled}
                    autoFocus={autoFocus}
                    onChange={onChangeHandler}
                />
                {variant === UIInputVariant.FLOATING && (
                    <label
                        htmlFor={`ui-input_${id}`}
                        className={classNames(cls["ui-input__label"])}
                    >
                        {placeholder}
                    </label>
                )}
                {addonRight && (
                    <div className={cls["ui-input__addon_right"]}>
                        {addonRight}
                    </div>
                )}
                {allowClear && value && (
                    <UIButton
                        type={UIButtonType.ICON}
                        size={UIButtonSize.S}
                        disabled={disabled}
                        className={cls["ui-input__clear-btn"]}
                        onClick={onClearHandler}
                    >
                        x{/* <CrossIcon /> */}
                    </UIButton>
                )}
            </div>
        );
    }
);

UIInput.displayName = "UIInput";
