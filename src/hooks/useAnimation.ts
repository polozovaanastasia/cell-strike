import { useCallback, useState } from "react";

export const useAnimation = (): [boolean, () => void] => {
    const [hasAnimation, setHasAnimation] = useState(false);

    const triggerAnimation = useCallback(() => {
        setHasAnimation(false);
        requestAnimationFrame(() => {
            setHasAnimation(true);
        });
    }, []);

    return [hasAnimation, triggerAnimation];
};
