import React from "react"
import Coment from "../../Components/Coment"
import Head from "../../Components/header"
import Sidebar from "../../Components/sidebar"
import "./Styles.css"

export default function Comentario() {
    return (
        <div className="app_container">
            <Head></Head>
            <div className="main_container">
                <Sidebar></Sidebar>
                <Coment></Coment>
            </div>
        </div>
    )
}