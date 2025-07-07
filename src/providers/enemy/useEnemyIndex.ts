import { useContext } from "react";
import { EnemyContext } from "./EnemyContext";

export const useEnemyIndex = () => {
    const context = useContext(EnemyContext);
    // debugger;
    return context;
};
