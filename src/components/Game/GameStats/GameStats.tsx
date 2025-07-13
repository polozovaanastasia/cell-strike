import cls from "./GameStats.module.scss";

type GameStatsProps = {
    hits: number;
    misses: number;
};

export const GameStats = ({ hits, misses }: GameStatsProps) => {
    return (
        <div className={cls["game-stat"]}>
            <div>Hits: {hits}</div>
            <div>Misses: {misses}</div>
        </div>
    );
};
