import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/cecgil.png" />
                    <div className={styles.authorInfo}>
                        <strong>Carlos Gil</strong>
                        <span>webdeveloper</span>
                    </div>
                </div>

                <time title='4 de Março' dateTime='2023'>Publicado há 1hora</time>
            </header>

            <div className={styles.content}>
                <p>AAAAAAAA</p>
                <p>BBBBBB</p>
            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                   placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>

                <Comment />
                
            </div>    

        </article>        
    )
}