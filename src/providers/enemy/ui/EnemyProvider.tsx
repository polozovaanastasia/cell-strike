import { useState } from "react";
import { EnemyContext, EnemyIndexType } from "../EnemyContext";

type EnemyProviderType = {
    children: React.ReactNode;
};

export const EnemyProvider = ({ children }: EnemyProviderType) => {
    const [enemyIndex, setEnemyIndex] = useState<EnemyIndexType>(null);

    return (
        <EnemyContext.Provider value={{ enemyIndex, setEnemyIndex }}>
            {children}
        </EnemyContext.Provider>
    );
};
