import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'
import styles from '../styles/pages/portfolio.module.css'
import memeVideo from '../assets/memeVideo.mp4'
import todolist from '../assets/todoVideo.mp4'
import portfolio from '../assets/portfolioVideo.mp4'
import cvImg from '../assets/cvpretalab.png'


export function Portfolio() {
    return (
        <>
            <Header text='Meus projetinhos' image={portfolioImg} />
            <div>
                <h1 className={styles.favoriteTitle}>Meus favoritos</h1>
            </div>
            <div className={styles.portContainer}>
                <div className={styles.portItem2}>
                    <h2 className={styles.headerTitle}>MEME DO DIA</h2>
                    <video autoPlay width="100%"> <source src={memeVideo} type="video/mp4" /> </video>
                    <p>Página em react de memes do dia</p>
                    <a className={styles.botaoLink} href="https://memesdodia-carol.netlify.app/" target="_blank"> VER PROJETO</a>
                </div>
                <div className={styles.portItem}>
                    <h2 className={styles.headerTitle}>TO DO LIST</h2>
                    <video autoPlay width="100%"> <source src={todolist} type="video/mp4" /> </video>
                    <p>Uma aplicação em react para fazer uma lista de tarefas</p>
                    <a className={styles.botaoLink} href="https://listadetarefas-carol.netlify.app/" target="_blank"> VER PROJETO</a>
                </div>
                <div className={styles.portItem}>
                    <h2 className={styles.headerTitle}>PRIMEIRO PORTFOLIO</h2>
                    <video autoPlay width="100%"> <source src={portfolio} type="video/mp4" /> </video>
                    <p>Projeto do bootcamp da Pretalab utilizando HTML e CSS</p>
                    <a className={styles.botaoLink} href="https://portfolio-caroline-magalhaes.netlify.app/#formacao" target="_blank"> VER PROJETO</a>
                </div>
            </div>
            <div className={styles.tecContainer}>
                <h1 className={styles.headerTitle}>CURRÍCULO PRETALAB BOOTCAMP</h1>
                <p>
                    <img src={cvImg} width={550} />
                </p>
            </div>
        </>
    )
}