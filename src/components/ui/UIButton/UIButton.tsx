import { classNames } from "../../../utils/classNames";
import cls from "./UIButton.module.scss";

export enum UIButtonType {
    PRIMARY = "primary",
    OUTLINE = "outline",
    ROUND = "round",
    ROUND_INVERTED = "round_inverted",
    ICON = "icon",
}

export enum UIButtonSize {
    LG = "lg",
    MD = "md",
    S = "s",
}

type UIButtonProps = {
    type?: UIButtonType;
    size?: UIButtonSize;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick: () => void;
    onMouseEnter?: () => void;

    "data-testid"?: string;
};

export const UIButton = ({
    type = UIButtonType.PRIMARY,
    size = UIButtonSize.MD,
    disabled = false,
    className,
    children,
    onClick,
    onMouseEnter,
    "data-testid": dataTestId,
}: UIButtonProps) => {
    const UIButtonClasses = classNames(
        cls["ui-button"],
        {
            [cls["ui-button_disabled"]]: disabled,
        },
        [className, cls[`type-${type}`], cls[`size-${size}`]]
    );

    return (
        <button
            data-testid={dataTestId}
            className={UIButtonClasses}
            disabled={disabled}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
        >
            {children}
        </button>
    );
};
