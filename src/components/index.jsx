import logo from '../assets/logo.png';
import '../css/interfaz.css';
import '../css/victoria.css';
import Juego from './juego.jsx';

function Header() {
    return (
        <header>
            <img src={logo} alt="" />
            <h1>Juego de TIC TAC TOE</h1>
        </header>
    );
}

export default function App() {
    return (
        <body>
            <Header></Header>
            
            <main>
                <section className="contenedor_juego">
                    <Juego></Juego>
                </section>

                <button className='btn_reiniciar' onClick={() => {window.location.reload()}}>
                    <i class="fa-solid fa-retweet"></i>  <p>Reiniciar el juego</p>
                </button>
            </main>
        </body>
    );
}