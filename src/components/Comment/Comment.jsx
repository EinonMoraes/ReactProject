import { Trash,ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/VeronicaRG.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>VeronicaRG</strong>
                            <time title='july 26, 2022' dateTime="2022-07-26 18:10:52">Cerca de 2h atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header> 

                    <p>Muito bom Maickon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />&nbsp;
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}   