import { useLocation } from "react-router-dom";
import styles from "./post2.module.css"


export default function Comentario() {



    return (
        <div className={styles.post_container}>
            <div className={styles.post_superior}>
                <div className={styles.post_perfil}>
                    <div className={styles.post_follow}>
                        <img src={"/heavy.png"} alt={""} width={98} height={89}></img>
                    </div>
                    <p>Heavy Weapons Guy</p>
                </div>

                <div className={styles.post_coment}>
                    <p>teste </p>
                </div>


            </div>
        </div>
    )
}