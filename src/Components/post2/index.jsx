import { useLocation } from "react-router-dom";
import styles from "./post2.module.css"


export default function Post2() {
    const location = useLocation();

    const isPaginaInicial = location.pathname === '/';
    const isOutraPagina = location.pathname === '/comentario';


    return (
        <div className={styles.post_container}>
            <div className={styles.post_superior}>
                <div className={styles.post_perfil}>
                    <div className={styles.post_follow}>
                        <img src={"/heavy.png"} alt={""} width={98} height={89}></img>
                        <img src={"/seguir.png"} alt={""} width={32} height={43}></img>
                        <p>seguir</p>

                    </div>
                    <p>Heavy Weapons Guy</p>
                </div>
                <div className={styles.post_text}>
                    <p className={styles.post_titulo}>Qual é a coisa mais aleatória sobre computadores que você sabe e a maioria das pessoas não?</p>
                    {isPaginaInicial && (
                        <p>texto pequeno</p>
                    )}

                    {isOutraPagina && (
                        <p>O ENIAC (Electronic Numerical Integrator and Computer), um dos primeiros computadores eletrônicos de grande escala, construído durante a Segunda Guerra Mundial, pesava cerca de 30 toneladas e ocupava um espaço de mais ou menos 167 m². </p>
                    )}

                    
                </div>
            </div>

            <img className={styles.post_image} src={"/cmd_windows_1.png"} alt={""} width={1116} height={540} />
        </div>
    )
}