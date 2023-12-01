
import './styles.css'
import ListarComu from '../../Components/ListarComu';
import Head from "../../Components/header";
import Sidebar from "../../Components/sidebar";

export default function ListaComu(){
    return (
        <div className="app_container">
            <Head></Head>
            <div className="main_container">
                <Sidebar></Sidebar>
                <ListarComu/>
            </div>
        </div>
    )
}