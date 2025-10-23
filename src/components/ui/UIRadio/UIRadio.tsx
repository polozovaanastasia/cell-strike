import { classNames } from "@/utils/classNames";
import { UIButton, UIButtonSize } from "../UIButton/UIButton";
import { UIRadioVariant } from "../UIRadioGroup/UIRadioGroup";
import cls from "./UIRadio.module.scss";

type UIRadioProps<T> = {
    name: string;
    value: T;
    label: string;
    selected: boolean;
    disabled?: boolean;
    variant?: UIRadioVariant;
    onChange: (value: T) => void;
    children?: React.ReactNode;
    className?: string;
};

type UIRadioViewProps = {
    label: string;
};

type UIRadioDefaultProps = UIRadioViewProps;

type UIRadioButtonProps = {
    disabled?: boolean;
    onClick: () => void;
} & UIRadioViewProps;

type UIRadioCardProps = {
    children?: React.ReactNode;
} & UIRadioViewProps;

export const UIRadio = <T extends string | number>({
    name,
    value,
    label,
    selected,
    disabled = false,
    variant = UIRadioVariant.DEFAULT,
    onChange,
    children,
    className,
}: UIRadioProps<T>) => {
    const UIRadioClasses = classNames(
        cls["ui-radio"],
        {
            [cls["ui-radio_selected"]]: selected,
            [cls["ui-radio_disabled"]]: disabled,
        },
        [className, cls[`variant-${variant}`]]
    );

    const onChangeHandler = () => {
        if (disabled) return;
        onChange(value);
    };

    let content: React.ReactNode;

    switch (variant) {
        case UIRadioVariant.DEFAULT:
            content = <RadioDefault label={label} />;
            break;
        case UIRadioVariant.BUTTON:
            content = <RadioButton label={label} onClick={onChangeHandler} />;
            break;
        case UIRadioVariant.CARDS:
            content = <RadioCard label={label} children={children} />;
            break;
        default:
            content = <span> {label} </span>;
    }

    return (
        <label className={UIRadioClasses}>
            <input
                className={cls["ui-radio__control"]}
                type="radio"
                name={name}
                value={value}
                checked={selected}
                disabled={disabled}
                onChange={onChangeHandler}
                hidden
            />
            {content}
        </label>
    );
};

const RadioDefault = ({ label }: UIRadioDefaultProps) => {
    return (
        <>
            <span className={cls["ui-radio__marker"]}></span>
            {label}
        </>
    );
};

const RadioButton = ({
    label,
    disabled = false,
    onClick,
}: UIRadioButtonProps) => {
    return (
        <UIButton
            className={cls["ui-radio__btn"]}
            size={UIButtonSize.LG}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </UIButton>
    );
};

const RadioCard = ({ label, children }: UIRadioCardProps) => {
    return (
        children ?? (
            <div className={cls["ui-radio__default-card"]}>
                <span className={cls["ui-radio__label"]}>{label}</span>
                <span className={cls["ui-radio__marker"]}></span>
            </div>
        )
    );
};
