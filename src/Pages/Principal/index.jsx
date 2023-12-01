import "./Styles.css"
import Sidebar from "../../Components/sidebar"
import Head from "../../Components/header"
import Main from "../../Components/main"
import React, { useState } from "react"
import CriarPost from "../../Components/CriarPost"

export default function Principal() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="app_container">
            <Head></Head>
            <div className="main_container">
                <Sidebar></Sidebar>
                <Main></Main>
            </div>
            <div className="comentario">
                <button onClick={openModal}>
                    <img src="/Images/Brain.svg" alt="" height={100} width={100} />
                </button>
            </div>

            {showModal && (
                <div /* className="modal" */>
                    <div /* className="modal-content" */>
                        <span /* className="close" */ onClick={closeModal}>&times;</span>
                        <CriarPost closeModal={closeModal} />
                    </div>
                </div>
            )}
        </div>


    )
}