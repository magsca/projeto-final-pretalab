import { Header } from '../components/Header'
import aboutmeImg from '../assets/aboutme.svg'
import styles from '../styles/pages/sobre.module.css'
import meImg from '../assets/eucirculo.jpeg'

export function Sobre() {
    return (
        <>
            <Header text="Minha história" image={aboutmeImg} />
            <div className={styles.sobreContainer}>
                <p>
                    <img src={meImg} width={400} />
                </p>
                <div>
                    <h2 className={styles.descriptionTitle}> Caroline Magalhães, prazer!</h2>
                    <b />
                    <p className={styles.paraDescription}> Mineira, graduada em Administração de Empresas e Pós Graduada em Gestão Pública Municipal.
                        <b />
                        Em transição de carreira para área de tecnologia direcionada para front end e integrante do Pretalab Bootcamp que visa reduzir o gap de gênero e raça no mercado tecnológico.
                        <b />
                        Apaixonada por música, leitura, natureza e ao mesmo tempo ligada no 220.
                        <b />
                        Sou curiosa, resolutiva, pé no chão e pé na estrada ao ponto de me levar para o outro lado do mundo numa experiência incrível em Vancouver - Canadá que me ampliou horizontes e possibilidades.
                    </p>
                </div>
            </div>
        </>
    )
}