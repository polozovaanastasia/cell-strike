import { createContext } from "react";

export type EnemyIndexType = number | null;

export type EnemyContextType = {
    enemyIndex: EnemyIndexType;
    setEnemyIndex: (index: number) => void;
};

export const EnemyContext = createContext<EnemyContextType>({
    enemyIndex: null,
    setEnemyIndex: () => {},
});
