import "./Styles.css"
import Sidebar from "../../Components/sidebar"
import Head from "../../Components/header"
import Main from "../../Components/main"
import React from "react"

export default function Principal() {
    return (
        <div className="app_container">
            <Head></Head>
            <div className="main_container">
                <Sidebar></Sidebar>
                <Main></Main>
            </div>
            <div className="comentario">
                <a href="/">
                    <img src="/Images/Brain.svg" alt="" height={100} width={100}/>
                </a>
            </div>
        </div>
    )
}