export type EnemyIndexType = number | null;
export type IntervalType = NodeJS.Timeout | null;

export enum GameActionType {
    SET_ENEMY_URL = "SET-ENEMY-URL",
    TICK = "TICK",
    HITS = "HITS",
    MISSES = "MISSES",
}

export type GameActionsType =
    | { type: GameActionType.SET_ENEMY_URL; url: string }
    | { type: GameActionType.TICK; newEnemyIndex: number }
    | { type: GameActionType.HITS }
    | { type: GameActionType.MISSES };
