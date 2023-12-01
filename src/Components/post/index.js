import styles from "./post.module.css"

export default function Post() {
    return (
        <div className={styles.post_container}>
            <div className={styles.post_head}>
                <div className={styles.post_profile}>
                    <div className={styles.image_container}>
                        <span className={styles.image_background}>

                        </span>
                        <span className={styles.follow_container}>

                        </span>
                    </div>
                    <span>Profile name</span>
                </div>
                <div className={styles.post_content}>
                    <div>
                        <h1>post title</h1>
                        <button className={styles.settings_btn}>

                        </button>
                    </div>
                    <div>
                        <p>post content</p>
                        <a href="">view more...</a>
                    </div>
                </div>
            </div>
            <div className={styles.post_body}>

            </div>
            <div className={styles.post_footer}>
                <div className={styles.react_container}>

                </div>
                <div className={styles.other_react_container}>

                </div>
            </div>
        </div>
    )
}