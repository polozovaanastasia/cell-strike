import { classNames } from "../../../utils/classNames";
import { UIButton, UIButtonSize } from "../UIButton/UIButton";
import { UIRadioVariant } from "../UIRadioGroup/UIRadioGroup";
import cls from "./UIRadio.module.scss";

type UIRadioProps<T> = {
    name: string;
    value: T;
    label: string;
    checked: boolean;
    variant?: UIRadioVariant;
    onChange: (value: T) => void;
    className?: string;
};

export const UIRadio = <T extends string | number>({
    name,
    value,
    label,
    checked,
    variant = UIRadioVariant.DEFAULT,
    onChange,
    className,
}: UIRadioProps<T>) => {
    const UIRadioClasses = classNames(
        cls["ui-radio"],
        {
            [cls["ui-radio_active"]]: checked,
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
                    onChange={onChangeHandler}
                />
                <UIButton
                    size={UIButtonSize.LG}
                    className={cls["ui-radio__btn"]}
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
            <span hidden>{label}</span>
        </label>
    );
};
