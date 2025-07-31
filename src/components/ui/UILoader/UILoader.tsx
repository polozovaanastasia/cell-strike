import { classNames } from "@/utils/classNames";
import cls from "./UILoader.module.scss";

export enum UILoaderSize {
    // LG = "lg",
    MD = "md",
    S = "s",
}

type UILoaderProps = {
    size?: UILoaderSize;
    className?: string;
};

export const UILoader = ({
    size = UILoaderSize.MD,
    className,
}: UILoaderProps) => {
    const UILoaderClasses = classNames(cls["ui-loader"], {}, [
        className,
        cls[`ui-loader_size-${size}`],
    ]);

    return <div className={UILoaderClasses}></div>;
};
