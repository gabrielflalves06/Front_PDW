/* import React, { useState } from 'react';
import CriarComu from '../../Components/CriarComu';

export default function Modal(){
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={openModal}><img src={"/Images/Plus.svg"} alt={"mais"} width={25} height={22} />Cria Comunidade</button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <CriarComu/>
                    </div>
                </div>
            )}
        </div>
    );
};
 */