import { useCallback, useEffect, useReducer, useRef } from "react";
import { INTERVAL_DELAY } from "../constants";
import { EnemyIndexType, IntervalType } from "../types";

export type GameStateType = {
    enemyUrl: string;
    enemyIndex: EnemyIndexType;
    hits: number;
    misses: number;
};

enum GameActionType {
    SET_ENEMY_URL = "SET-ENEMY-URL",
    TICK = "TICK",
    HITS = "HITS",
    MISSES = "MISSES",
}

type GameActionsType =
    | { type: GameActionType.SET_ENEMY_URL; url: string }
    | { type: GameActionType.TICK; newEnemyIndex: number }
    | { type: GameActionType.HITS }
    | { type: GameActionType.MISSES };

export const initGameState: GameStateType = {
    enemyUrl: "",
    enemyIndex: null,
    hits: 0,
    misses: 0,
};

const gameReducer = (state: GameStateType, action: GameActionsType) => {
    switch (action.type) {
        case GameActionType.SET_ENEMY_URL:
            return { ...state, enemyUrl: action.url };

        case GameActionType.TICK:
            return { ...state, enemyIndex: action.newEnemyIndex };

        case GameActionType.HITS: {
            return { ...state, hits: state.hits + 1, enemyIndex: null };
        }
        case GameActionType.MISSES:
            return { ...state, misses: state.misses + 1 };

        default:
            return state;
    }
};

const setEnemyUrlAC = (url: string): GameActionsType => {
    return {
        type: GameActionType.SET_ENEMY_URL,
        url,
    };
};

const tickAC = (newEnemyIndex: number): GameActionsType => {
    return {
        type: GameActionType.TICK,
        newEnemyIndex,
    };
};
const hitsAC = (): GameActionsType => {
    return {
        type: GameActionType.HITS,
    };
};
const missesAC = (): GameActionsType => {
    return {
        type: GameActionType.MISSES,
    };
};

export const useGameState = () => {
    console.log("Called useGameState");
    const [state, dispatch] = useReducer(gameReducer, initGameState);

    const gameCells = new Array(5 * 3).fill(null);

    const addEnemy = useCallback((url: string) => {
        dispatch(setEnemyUrlAC(url));
    }, []);

    const getRandomIndex = () => {
        return Math.floor(Math.random() * gameCells.length);
    };

    const intervalRef = useRef<IntervalType>(null);

    const startGame = () => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            const rundomIndex = getRandomIndex();
            dispatch(tickAC(rundomIndex));
            // debugger;
            if (state.enemyIndex !== null) {
                dispatch(missesAC());
            }
        }, INTERVAL_DELAY);
    };

    const stopGame = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const updateHits = useCallback(() => {
        dispatch(hitsAC());
    }, []);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return {
        ...state,
        gameCells,
        addEnemy,
        startGame,
        updateHits,
    };
};
