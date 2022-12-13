import {Header} from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'
import styles from '../styles/pages/portfolio.module.css'

import memeVideo from '../assets/memeVideo.mp4'
import todolist from '../assets/todoVideo.mp4'
import portfolio from '../assets/portfolioVideo.mp4'
import cvImg from '../assets/cvpretalab.png'



export function Portfolio() {
    return(
        <>
        <Header text='Meus projetinhos' image={portfolioImg} />
        <div className={styles.portContainer}>
            <div>
            <h1 className={styles.favoriteTitle}>Meus favoritos</h1>
            </div>
            <div>
            <h2 className={styles.headerTitle}>MEME DO DIA</h2>
            <p> 
            <video  autoPlay width={350}> <source src={memeVideo} type="video/mp4"/> </video>
            <p>Uma página em react para você se identificar hoje</p>
            <a className={styles.botaoLink} href="https://memesdodia-carol.netlify.app/" target="_blank"> VER PROJETO</a>
            
            </p>
            </div>

            <div>
            <h2 className={styles.headerTitle}>TO DO LIST</h2>
            <p>            
            <video  autoPlay width={550}> <source src={todolist} type="video/mp4"/> </video>
            <p>Uma aplicação em react para fazer um to do list</p>
            <a className={styles.botaoLink} href="https://listadetarefas-carol.netlify.app/" target="_blank"> VER PROJETO</a>
            </p>
            
            </div>

            <div>
            <h2 className={styles.headerTitle}>PRIMEIRO PORTFOLIO</h2>
            <p>
             <video autoPlay width={550}> <source src={portfolio} type="video/mp4" /> </video>
              <p>Projeto do bootcamp da Pretalab utilizando HTML e CSS</p>
                <a className={styles.botaoLink} href="https://portfolio-caroline-magalhaes.netlify.app/#formacao" target="_blank"> VER PROJETO</a>
            </p>
            </div>

            <div className={styles.tecContainer}>
                <h1 className={styles.headerTitle}>CURRÍCULO PRETALAB BOOTCAMP</h1>
               <p>
               <img src={cvImg} width={550} />
               </p>
            </div>

        </div>
        </>
    )
}