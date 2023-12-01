import styles from "./perfil.module.css"

export default function Perfil() {
    return (
        <div className={styles.main_body}>
            <div className={styles.perfil}>
                <img className={styles.foto} src={"/perfil.png"} alt={"imgm de perfil"} width={98} height={89} />
                <input className={styles.compartilhar_post} type="text" placeholder="Compartilhe o que está pensando" />
                <a href={"/criar_post"} className={styles.button_criar}>Criar <img src="/caneta.png" width={25} height={25} alt={""} /></a>
            </div>
        </div>
    )
}