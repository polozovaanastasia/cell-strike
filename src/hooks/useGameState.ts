import { INTERVAL_DELAY } from "@/constants";
import {
    EnemyIndexType,
    GameActionsType,
    GameActionType,
    IntervalType,
} from "@/types";
import { useCallback, useEffect, useReducer, useRef } from "react";

export type EnemyStateType = {
    url: string;
    index: EnemyIndexType;
};

export type GameStateType = {
    enemy: EnemyStateType;
    location: number | null;
    enemyUrl: string;
    enemyIndex: EnemyIndexType;
    hits: number;
    misses: number;
};

export const initGameState: GameStateType = {
    enemy: {
        url: "",
        index: null,
    },
    location: null,
    enemyUrl: "",
    enemyIndex: null,
    hits: 0,
    misses: 0,
};

const gameReducer = (state: GameStateType, action: GameActionsType) => {
    switch (action.type) {
        case GameActionType.SET_ENEMY_URL:
            return { ...state, enemy: { ...state.enemy, url: action.url } };

        case GameActionType.SET_LOCATION:
            return { ...state, location: action.value };

        case GameActionType.TICK:
            return {
                ...state,
                enemy: { ...state.enemy, index: action.newEnemyIndex },
            };

        case GameActionType.HITS: {
            return { ...state, hits: state.hits + 1 };
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

const setLocationAC = (value: number): GameActionsType => {
    return {
        type: GameActionType.SET_LOCATION,
        value,
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
    const [{ enemy, location, hits, misses }, dispatch] = useReducer(
        gameReducer,
        initGameState
    );

    const intervalRef = useRef<IntervalType>(null);
    const enemyRefs = useRef({
        enemyIndex: null as EnemyIndexType,
        wasHit: true,
    });

    const gameCells = new Array(8 * 3).fill(null);

    const setEnemy = useCallback((url: string) => {
        dispatch(setEnemyUrlAC(url));
    }, []);

    const setLocation = useCallback((value: number) => {
        dispatch(setLocationAC(value));
    }, []);

    const getRandomIndex = () => {
        let newIndex;

        do {
            newIndex = Math.floor(Math.random() * gameCells.length);
            console.log(enemyRefs.current.enemyIndex);
        } while (newIndex === enemyRefs.current.enemyIndex);

        return newIndex;
    };

    const startGame = () => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            const randomIndex = getRandomIndex();
            enemyRefs.current.enemyIndex = randomIndex;
            dispatch(tickAC(randomIndex));

            if (!enemyRefs.current.wasHit) {
                dispatch(missesAC());
            }
            enemyRefs.current.wasHit = false;
        }, INTERVAL_DELAY);
    };

    // const stopGame = () => {
    //     if (intervalRef.current) {
    //         clearInterval(intervalRef.current);
    //         intervalRef.current = null;
    //     }
    // };

    const updateHits = useCallback(() => {
        if (!enemyRefs.current.wasHit) {
            dispatch(hitsAC());
            enemyRefs.current.wasHit = true;
        }
    }, []);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return {
        enemy,
        location,
        hits,
        misses,
        gameCells,
        setEnemy,
        setLocation,
        startGame,
        updateHits,
    };
};
