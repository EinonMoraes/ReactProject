import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';


export function Post() {
    return (

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/43890876?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Mayckondf</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                    <time title='july 26, 2022' dateTime="2022-07-26 18:10:52">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉&nbsp;<a href=""> jane.design/doctorcare</a> </p>
            <p>
               <a href=""> #novoprojeto</a>&nbsp;
               <a href=""> #nlw</a>&nbsp;
               <a href=""> #rocketseat</a>&nbsp;
            </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                    placeholder="Deixe seu comentário"
                /> 

                <footer>
                <button type="submit">Publicar</button>
                </footer>
            </form>
                <div className={styles.commentList}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>

        </article> 
    )
}