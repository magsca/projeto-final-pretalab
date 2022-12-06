import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Inicio} from './pages/Inicio'
import {Menu} from './components/Menu'
import {Footer} from './components/Footer'
import {Sobre} from './pages/Sobre'
import {Portfolio} from './pages/Portfolio'
import {Contato} from './pages/Contato'

export function Router() {
    return(
<BrowserRouter> {/*BrowserRouterquer dizer que a página terá rotas, que o site terá endereços diferentes*/}
<Menu /> {/*Menu fica aqui fora de routes pois ele vai aparecer em todas as paginas; bowserrouter abraça tds as paginas */}

<Routes> {/*Routes permite fazer a troca de páginas, a combinação,*/}
    <Route path="/" element={<Inicio />}/> {/* Route é quem cria de fato a troca pra esse caminho / vai trocar para o elemento inicio*/}
    <Route path="/sobre" element={<Sobre />}/> {/*path é o caminho e element é o que vai aparecer na tela */}
    <Route path="/portfolio" element={<Portfolio />}/>
    <Route path="/contato" element={<Contato />}/>
</Routes>
<Footer />
</BrowserRouter>
    )
}