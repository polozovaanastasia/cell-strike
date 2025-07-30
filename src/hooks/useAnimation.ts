import { useCallback, useState } from "react";

export const useAnimation = (): [boolean, () => void, () => void] => {
    const [isAnimating, setIsAnimating] = useState(false);

    const triggerAnimationStart = useCallback(() => {
        setIsAnimating(false);
        requestAnimationFrame(() => {
            setIsAnimating(true);
        });
    }, []);

    const triggerAnimationEnd = useCallback(() => {
        setIsAnimating(false);
    }, []);

    return [isAnimating, triggerAnimationStart, triggerAnimationEnd];
};
