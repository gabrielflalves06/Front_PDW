import './styles.css'
import Head from "../../Components/header"
import Sidebar from "../../Components/sidebar"

export default function ComunidadeExpec(){
    return(
        <div className="app_container">
            <Head></Head>
            <div className="main_container">
                <Sidebar></Sidebar>
                <MainComunidade></MainComunidade>
            </div>
            {/* <div className={styles.comentario}>
                <a href="/">
                    <img src="/Images/Brain.svg" alt="" height={100} width={100}/>
                </a>
            </div> */}
        </div>
    )
}