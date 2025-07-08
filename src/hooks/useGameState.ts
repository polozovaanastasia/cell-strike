import { useRef, useState } from "react";

const INTERVAL_DELAY: number = 1300;

export type EnemyIndexType = number | null;
type intervalType = NodeJS.Timeout | null;

export const useGameState = () => {
    const [enemyUrl, setEnemyUrl] = useState<string>("");
    const [enemyIndex, setEnemyIndex] = useState<EnemyIndexType>(null);
    const [hits, setHits] = useState<number>(0);
    const [miss, setMiss] = useState<number>(0);

    const gameCells = new Array(5 * 3).fill(null);

    const addEnemy = (url: string) => {
        setEnemyUrl(url);
    };

    const getRandomIndex = () => {
        return Math.floor(Math.random() * gameCells.length);
    };

    const intervalRef = useRef<intervalType>(null);

    const startGame = () => {
        intervalRef.current = setInterval(() => {
            const randomIndex = getRandomIndex();
            setEnemyIndex(randomIndex);
        }, INTERVAL_DELAY);
    };

    const stopGame = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const updateHits = () => {
        setHits((lastValue) => lastValue + 1);
        setEnemyIndex(null);
        console.log(hits);
    };

    return {
        enemyUrl,
        addEnemy,
        gameCells,
        enemyIndex,
        startGame,
        hits,
        updateHits,
    };
};
