import { useState } from "react";
import CriarComu from "../CriarComu";
import styles from "./sidebar.module.css"


export default function Sidebar() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar}>
                <button className={styles.criar} onClick={openModal}><img src={"/Images/Plus.svg"} alt={"mais"} width={25} height={22} />Cria Comunidade</button>
                <hr></hr>
                <p className={styles.games}>Games <img src={"/Images/Games.svg"} alt={"mais"} width={25} height={22} /></p>
                <p className={styles.design}>Design <img src={"/Images/Design.svg"} alt={"mais"} width={25} height={22} /></p>
                <p className={styles.ciencia}>Ciência <img src={"/Images/Ciencia.svg"} alt={"mais"} width={25} height={22} /></p>
                <p className={styles.tecnologia}>Tecnologia <img src={"/Images/Tecnologia.svg"} alt={"mais"} width={25} height={22} /></p>
                <p className={styles.artes}>Artes <img src={"/Images/Artes.svg"} alt={"mais"} width={25} height={22} /></p>
                <hr></hr>
                <p className={styles.explorar}>Explorar <img src={"/Images/Explorar.svg"} alt={"mais"} width={25} height={22} /></p>
            </div>

            {showModal && (
                <div /* className="modal" */>
                    <div /* className="modal-content" */>
                        <span /* className="close" */ onClick={closeModal}>&times;</span>
                        <CriarComu closeModal={closeModal}/>
                    </div>
                </div>
            )}
        </div>
    )
}