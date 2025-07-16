import { ChangeEvent } from "react";
import { classNames } from "../../../utils/classNames";
import { UIButton } from "../UIButton/UIButton";
import cls from "./UIRadio.module.scss";

export enum UIRadioVariant {
    DEFAULT = "default",
    BUTTON = "button",
}
type UIRadioProps<T> = {
    name: string;
    value: T;
    label: string;
    checked: boolean;
    variant?: UIRadioVariant;
    onChange: (value: T) => void;
    className?: string;
};

export const UIRadio = <T extends string>({
    name,
    value,
    label,
    checked,
    variant = UIRadioVariant.DEFAULT,
    onChange,
    className,
}: UIRadioProps<T>) => {
    const UIRadioClasses = classNames(cls["ui-radio"], {}, [
        className,
        cls[`variant-${variant}`],
    ]);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value as T);
    };
    return (
        <label className={UIRadioClasses}>
            <input
                className={classNames(cls["ui-radio__control"])}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChangeHandler}
            />
            {variant === UIRadioVariant.BUTTON && (
                <UIButton onClick={() => {}}>Button</UIButton>
            )}
            {label}
        </label>
    );
};
