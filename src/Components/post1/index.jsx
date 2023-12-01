import { useLocation } from "react-router-dom";
import styles from "./post1.module.css"
import { useState } from "react";
import CriarPost from "../CriarPost";

export default function Post1({ postId }) {

    const location = useLocation();

    const isPaginaInicial = location.pathname === '/';
    const isOutraPagina = location.pathname === '/comentario';


    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.post_container}>
            <div className={styles.post_superior}>
                <div className={styles.post_perfil}>
                    <div className={styles.post_follow}>
                        <img src={"/heavy.png"} alt={""} width={98} height={89}></img>
                        <img src={"/Images/seguir.svg"} alt={""} width={32} height={43}></img>
                        <p>seguir</p>

                    </div>
                    <p>Heavy Weapons Guy</p>
                </div>
                <div className={styles.post_text}>
                    <div className={styles.menu}>
                        <input type="checkbox" id={`menu_${postId}`} className={styles.bottom} />
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
                    <p className={styles.post_titulo}>Qual é a coisa mais aleatória sobre computadores que você sabe e a maioria das pessoas não?</p>
                    <p>Quando eu era criança, alguém me disse que você poderia assistir toda a série Star Wars pelo terminal de comandos, apenas com caracteres do teclado. Para um computador Windows: Passo 1: Abra o terminal no seu PC, digite o comando abaixo e pressione ↵Enter. pkgmgr /iu:"TelnetClient" Se você ver uma...</p>
                </div>
            </div>
            
            <img className={styles.post_image} src="/Images/download.jpg" alt="" width={1116} height={540} />

            <div className={styles.comentarios}>
                {isPaginaInicial && (
                    <a href="/comentario"><img src="/Images/Comentario.svg" alt="" width={80} height={50} />Dá pra colocar o numeros de comentarios?? se nn só tirar isso (deixa a imagem)</a>
                )}

                {isOutraPagina && (
                    <button onClick={openModal}><img src="/Images/balao.svg" alt="" width={80} height={50} />Deixe um comentario</button>
                )}

                
            </div>

            {showModal && (
                <div /* className="modal" */>
                    <div /* className="modal-content" */>
                        <span /* className="close" */ onClick={closeModal}>&times;</span>
                        <CriarPost closeModal={closeModal}/>
                    </div>
                </div>
            )}
        </div>
    )
}