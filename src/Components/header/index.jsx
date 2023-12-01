import styles from "./header.module.css"

export default function Head() {

    return (
        <div className={styles.header_container}>
            <nav>
                <div className={styles.slogan}>
                    <a href="/" />
                    <img
                        src="/Images/logo.svg"
                        alt="Think&Share slogan"
                        width={130}
                        height={85}
                    />
                </div>
                <div className={styles.search_bar}>
                    <input type="text" placeholder="Pesquisar" />
                    <button>
                        <img
                            src="/Images/Lupa.svg"
                            alt="search icon"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
                <div className={styles.icons_container}>
                    <div>
                        <a href={""}>
                            <img
                                src="/Images/Comunidade.svg"
                                alt="community icon"
                                width={70}
                                height={70}
                            />
                        </a>
                    </div>
                    <div>
                        <a href={"/login"}>
                            <img
                                src="/Images/User.svg"
                                alt="profile icon"
                                width={70}
                                height={70}
                            />
                        </a>
                    </div>
                </div>
            </nav >
        </div >
    )
}