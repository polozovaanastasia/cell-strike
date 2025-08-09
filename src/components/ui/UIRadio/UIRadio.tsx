import { classNames } from "@/utils/classNames";
import { UIButton, UIButtonSize } from "../UIButton/UIButton";
import { UIRadioVariant } from "../UIRadioGroup/UIRadioGroup";
import cls from "./UIRadio.module.scss";

type UIRadioProps<T> = {
    name: string;
    value: T;
    label: string;
    checked: boolean;
    disabled?: boolean;
    variant?: UIRadioVariant;
    onChange: (value: T) => void;
    children?: React.ReactNode;
    className?: string;
};

export const UIRadio = <T extends string | number>({
    name,
    value,
    label,
    checked,
    disabled = false,
    variant = UIRadioVariant.DEFAULT,
    onChange,
    children,
    className,
}: UIRadioProps<T>) => {
    const UIRadioClasses = classNames(
        cls["ui-radio"],
        {
            [cls["ui-radio_active"]]: checked,
            [cls["ui-radio_disabled"]]: disabled,
        },
        [className, cls[`variant-${variant}`]]
    );

    const onChangeHandler = () => {
        onChange(value);
    };

    if (variant === UIRadioVariant.BUTTON) {
        return (
            <div className={UIRadioClasses}>
                <input
                    className={cls["ui-radio__control"]}
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChangeHandler}
                    hidden
                />
                <UIButton
                    className={cls["ui-radio__btn"]}
                    size={UIButtonSize.LG}
                    disabled={disabled}
                    onClick={onChangeHandler}
                >
                    {label}
                </UIButton>
            </div>
        );
    }

    return (
        <label className={UIRadioClasses}>
            <input
                className={cls["ui-radio__control"]}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChangeHandler}
            />
            {variant === UIRadioVariant.CARDS ? children : <span>{label}</span>}
        </label>
    );
};
