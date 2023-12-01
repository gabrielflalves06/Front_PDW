import styles from "./post1.module.css"


export default function Comunidade({ postId }) {
    return (
        <div className={styles.post_container}>
            <div className={styles.post_superior}>
                <div className={styles.post_perfil}>
                    <div className={styles.post_follow}>
                        <img src={"/heavy.png"} alt={""} width={98} height={89}></img>
                        <img src={"/Images/seguir.svg"} alt={""} width={32} height={43}></img>
                        <p>seguir</p>

                    </div>
                </div>
                <div className={styles.post_text}>
                    <div className={styles.menu}>
                        <input type="checkbox" id={`menu_${postId}`}  className={styles.bottom} />
                        <label htmlFor={`menu_${postId}`}>
                            <span className={styles.menu_hamburguer}></span>
                        </label>

                        <ul className={styles.lista_menu}>
                            <li className={styles.menu_itens}>
                                <a href={"/"} className="lista-menu__link">Alterar</a>
                            </li>
                            <li className={styles.menu_itens}>
                                <a href={"/"} className="lista-menu__link">Excluir</a>
                            </li>
                        </ul>
                    </div>
                    <p className={styles.post_titulo}>Titulo da comunidade</p>
                    <p>Descrição</p>
                </div>
            </div>

            {/* <img className={styles.post_image} src="/Images/download.jpg" alt="" width={1116} height={540} />

            <div className={styles.comentarios}>
                <a href="/"><img src="/Images/Comentario.svg" alt="" width={80} height={50}/>Dá pra colocar o numeros de comentarios?? se nn só tirar isso (deixa a imagem)</a>
            </div> */}
        </div>
    )
}