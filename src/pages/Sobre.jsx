import {Header} from '../components/Header'
import aboutmeImg from '../assets/aboutme.svg'

import styles from '../styles/pages/sobre.module.css'

import meImg from '../assets/eucirculo.jpeg'

export function Sobre(){
    return(
        <>
        <Header text="Minha história" image={aboutmeImg}/>
        <div className={styles.sobreContainer}>
        <h1 >Curiosidades sobre mim  </h1>
        <p> 
        <img src={meImg} width={550} />
        </p>
        <div>
        <h2 className={styles.descriptionTitle}> Caroline Magalhães, prazer!</h2>
        <p> Carolina é uma menina bem difícil de esquecer
Andar bonito e um brilho no olhar
Tem um jeito adolescente que me faz enlouquecer
E um molejo que eu não vou te enganar

Maravilha feminina, meu docinho de pavê
Inteligente, ela é muito sensual
Te confesso que estou apaixonado por você
Ô, Carolina, isso é muito natural

Ô, Carolina, eu preciso de você
Carolina é uma menina bem difícil de esquecer
Andar bonito e um brilho no olhar
Tem um jeito adolescente que me faz enlouquecer
E um molejo que eu não vou te enganar

Maravilha feminina, meu docinho de pavê
Inteligente, ela é muito sensual
Te confesso que estou apaixonado por você
Ô, Carolina, isso é muito natural

Ô, Carolina, eu preciso de você
Ô, Carolina, eu preciso de você
Ô, Carolina, eu não vou suportar não te ver
Carolina, eu preciso te falar
Ô, Carolina eu vou amar você
Carolina, Carolina

Carolina, preciso te encontrar
Carolina, me sinto muito só
Carolina, preciso te dizer
Ô, Carolina, eu só quero amar você

Carolina, preciso te encontrar
Ô, Carolina, me sinto muito só
Carolina, preciso te dizer
Ô, Carolina, eu só quero amar você

Carolina é uma menina bem difícil de esquecer
Andar bonito e um brilho no olhar
Tem um jeito adolescente que me faz enlouquecer
E um molejo que eu não vou te enganar

Maravilha feminina, meu docinho de pavê
Inteligente, ela é muito sensual
Te confesso que estou apaixonado por você
Ô, Carolina, isso é muito natural</p>
</div>
        </div>
        </>
    )
}