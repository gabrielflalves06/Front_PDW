import './styles.css'
import Sidebar from "../../Components/sidebar"
import Head from "../../Components/header"

export default function Perfil(){
    return(
            <div className="perfil_container">
                <Head></Head>
                <div className="perfil_body">
                    <Sidebar></Sidebar>
                    <div className="perfil_noBody">
                        <div className="perfil_top">
                            <div className="perfil_user">
                                <div className="perfil_name">
                                    <img className="perfil_icon" src={"/perfil.png"} alt={""} width={98} height={89} />
                                    <div className="perfil_noimg">
                                        <p>Engineer from Team Fortress</p>
                                        <div className="perfil_follow">
                                            <img src={"/Images/Seguir.svg"} alt={""} width={32} height={43}/>
                                            <div className="perfil_numFolow">
                                                <p>10 Seguidores</p>
                                                <p>30 Seguindo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="perfil_desc">Dell Conagher, better known as the Engineer, is a major protagonist and one of the nine playable classes in Team Fortress 2. He is a soft-spoken and amiable Texan with an interest in all things mechanical.</p>
                            </div>
    
                            <div className="perfil_comu">
                               {/*  <img src={"/Add_Book.png"} alt={""} width={74} height={63} /> */}
                                <h2>Você ainda não adicionou nenhum tópico ou comunidade.</h2>
                            </div>
                        </div>
                        <div className="perfil_post">
                            {/* <img src={"/Sad_Cloud.png"} alt={""} width={90} height={90} /> */}
                            <h2>Você não compartilhou, respondeu ou postou nada ainda.</h2>
                        </div>
                    </div>
                </div>
            </div>
    )
}