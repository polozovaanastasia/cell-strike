export type EnemyIndexType = number | null;
export type IntervalType = NodeJS.Timeout | null;

export enum GameActionType {
    SET_ENEMY_URL = "SET-ENEMY-URL",
    SET_LOCATION = "SET-LOCATION",
    TICK = "TICK",
    HITS = "HITS",
    MISSES = "MISSES",
}

export type GameActionsType =
    | { type: GameActionType.SET_ENEMY_URL; url: string }
    | { type: GameActionType.SET_LOCATION; value: number }
    | { type: GameActionType.TICK; newEnemyIndex: number }
    | { type: GameActionType.HITS }
    | { type: GameActionType.MISSES };

export enum EnemyInputModes {
    URL = "url",
    UPLOAD = "upload",
}

export enum GameSetupStepType {
    ENEMY = "ENEMY",
    LOCATION = "LOCATION",
    READY = "READY",
}
