import Perfil from "../perfil"
import Post1 from "../post1"
import Post2 from "../post2"
import styles from "./main.module.css"
/* 
interface FetchPost {
    profileImg: string,
    profileName: string,
    postTitle: string,
    postContent: string,
    postImage: string,
    reactions: {
        quantity: number,
        type: string
    },
    comments: {
        quantity: number,
        profile: {
            profileImg: string,
            profileName: string,
            content: string,
            reactions: {
                quantity: number,
                type: string,
            },
        },
    },
} */

export default function Main(/* { posts }: { posts: FetchPost[] } */) {
    return (
        <main className={styles.main_container}>
            {/* <Perfil></Perfil> */}
            <Post1 postId="post1"/>
            <Post2></Post2>
            <Post1 postId="post2"/>
            <Post2></Post2>
            <Post1 postId="post3"/>
            <Post2></Post2>
            <Post1 postId="post4"/>
            <Post2></Post2>

        </main>
    )
}