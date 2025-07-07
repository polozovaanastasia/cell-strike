import { EnemyIndexType } from "../../../providers/enemy/EnemyContext";
import { classNames } from "../../../utils/classNames";
import cls from "./GameCell.module.scss";

type GameCellProps = {
    index: number;
    enemyIndex: EnemyIndexType;
    children?: boolean;
};

export const GameCell = ({ index, enemyIndex, children }: GameCellProps) => {
    const hasEnemy = index === enemyIndex;
    const gameCellClassNames = classNames(cls["game-cell"], {
        [cls["game-cell_has-enemy"]]: hasEnemy,
    });
    const url =
        "https://static.dzeninfra.ru/s3/zen-lib/1.003.1/dzen-layout/lz5XeGt8fsa/p10dM7135/642695doIrG/R6bbJdiiQPdjObAqGNbJs5f-QN9YF2tXZG0XFKf9uarVI95MwjmuP3UlMeAk5smF0uZJ_9zJAqaqYVl-nuQbl8OkSbaNc8BmbKihuIyQnPFVPFWbGRD7hmJsAFCi7yy8mnEZTNGuOqT3ZTPn7yxBQk_8wyYWAUh4enFM7p3lXENF8Qt0W2ZEMjD5sbZWAEzxHv-MnZsEq9mxr9VSfX-4rVMpFIiSpr_n6X-s-62qAc5G8s0nEgPJ9_Iyzi_WZwXEBTbDvByli76l_zZzHVbIdlG7Q9-dBi7eueQcWDay8CDSaJjJFKA35qU54_7q4cOKSfGF51AOzDY68YztGqwKR498inWaYs67aLR2OR0cijaUcAOVk0wu1nfgEhx99rIg12hbz10mMSdvuyR3Lm7AxspxSmbdSoZ__naPohQrz46DsgT8meyDOeMwcnec2k7zHLHBGp1Mp550aF0QeDOz7dtulIAa4fojqLrnuOiuDA7J8UgiVIxAcjK_Ra5b489DTzUNM9VsBbqp_jFzWJNB_VY9AxDUBSSZ8ikS1HZwsSIeYReH2-y-rquyLr7i7gnPxPeNodfMD_8_vkHn2-AExEl7DDsW7kW5q_i6tdyUw7ubvYEfWcYtG7mkXxq-t3xq2e6YzpFkemDjcqszq2MHQIQzgKyWicr4uPWCK9buA0bBM0N206XF_uC1eXCSG0S1EztFUFTML54_51tTsH44opbvXs6RrnOg4jfp-emnwEsFf0LkHcKCtju3gu6cYYTBCbJE8l5vAbNrv_g6k1mLPROziF5eCOxQfqhalLdxNGDcqdzG3Sd7LaC9IXWkKIoOSjEKKNjOy_j7_Y1gn-3LxsByjbfZLwzzZX78fxSTBfYd8AiTkM8rErwq1pOxOfAgV2sfRJgg9-HptKVwpeDFzwf3wCyVSoJ2OjWNoh1oiwDI8oJzUC2GMGP2dX2ZEsl2GbzA1hOBpxM2rhKSf_r1KROvm4ISIHAop3Bpse1vQI6L-4Ki38GGcv3wzu2SJ4pIynEL_NAmiXZvO3EynFbL-9D9RxMexipaveAf3fU2_W_QZtyInSlw4K-9K3CrrwqCzXDBKxXAzrr0NkHn3WfHhgs7g7LU5UN2qfW4fdRVwvqX9shSXAhvWDvh21j6NXzvGqKdwBKv8Kmv8WN9pOCMgw84gWOXjsRzNb0PaNpjikZGcgE2miGJvuV2tfjaFgz1HfZLkN4JZtf2oVBSfTd76lpo0AGSq3Ju7nCksmuoSkiOf0qj14pOuPj-geWc7UlGyvbJMFXmxL5n_H-009mK-JfwQR3RgO8Uu6hUUnCyOGMSqlFIWSM3rimzIrcgbQGBzLlN5p0JRHE1dkmoHW4Lz4s7Rr9Zrcz0KrN5sNTYw74YM0SZ00llVLbonRVxf3Ug0CgQjxGt8mdpfKbypWtNTASzw2fYQ0-4N7EOK98kR4ED-oL10a2JMa0wNj_Rmgz507WBEp7O4Vf3Zt4Qcv48b9bsnU4RKDjn7bVq_eini8BOs0lm0cUO8fL9CKIV4IUCgzLBPp3ngDAn9PAwmZkAM9F_h18SBiafNidSU37_POQZoR7KkaF4rad1JzbiqU8MDv9FIFYBCHk4Nkii1OvPDEAzCvuSpsn5p_45exCTBrhfvYMXnc2mkrct0F32s7Iv1O6RD51te24m_KY15KMNAAO_y2_Qwwa7crhB7x6mzARGuYU9061MsCA7ObQYm8B607SA19wIJZ9xLxpadTOx6dtpl0-Rrj2ionPntutgiwCLNkOqXkmH8H50hiATYU2HB32F9d7mQr6hN3c6ndLD8Z17Qd_bCutafOmQ0jQ-tmTXaZSGlGZ6oWu8rbfhpwAMBDHM7hYLhvr9NIQrXu-Cigd9BHoWY82wL32y-RiQAHtVd4zY00nqGDzsW1l3dzSqG-lZCFlv_6ZpfK76ICJER8I_ieYZisg4e_UN4dwsA0QLNYG4GeeFuGB89U";

    return (
        <div
            className={gameCellClassNames}
            style={
                hasEnemy
                    ? {
                          backgroundImage: `url(${url})`,
                      }
                    : undefined
            }
        ></div>
    );
};
