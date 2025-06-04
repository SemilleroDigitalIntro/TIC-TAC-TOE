import { verificarVictoria } from './victoria.jsx';
import { Victoria } from './victoria.jsx';
import { useState } from "react";

function Boton({jugada, activarJugada}) {
    /* --- indicaciones
        0 = X
        1 = O
        2 = Nada 
    */
    let representacionJugada = jugada;
    if (representacionJugada == 0) {
        representacionJugada = 'X';
    } else {
        representacionJugada = 'O'
    }

    return (
        <button className="item_columna" onClick={activarJugada}>
            <span className={(jugada != 2) ? 'active' : ''}>
                {representacionJugada}
            </span>
        </button>
    );
}

export default function Juego() {
    let [tablero , actualizarTablero] = useState([
        [2 ,2 ,2],
        [2 ,2 ,2],
        [2 ,2 ,2]
    ]);

    let [jugada , actualizarJugada] = useState(2);
    let [indicadorVictoria, actualizarIndicador] = useState(false);

    function realizarJugada(movimiento, posicionJugada) {
        let indicacionJugada = tablero[posicionJugada[0]][posicionJugada[1]];

        // actualizando movimiento
        let tipo_movimiento = 0;

        if (indicacionJugada != 2){
            // movimiento ya jugado
            tipo_movimiento = tablero[posicionJugada[0]][posicionJugada[1]];
        } else {
            // movimiento nuevo, en una posicion nueva
            if (movimiento == 2) {
                tipo_movimiento = 0;
            } else if (movimiento == 0){
                tipo_movimiento = 1;
            } else if (movimiento == 1){
                tipo_movimiento = 0;
            }
        }

        actualizarJugada(tipo_movimiento);

        // actualizando el tablero
        tablero[posicionJugada[0]][posicionJugada[1]] = tipo_movimiento;
        actualizarTablero(tablero);

        if (verificarVictoria(tablero) !== null) {
            actualizarIndicador(verificarVictoria(tablero));
        }
    }

    return (
        <>
            {
                tablero.map((item, index) => (
                    <div className="contenedor_fila" key={index}>
                        {
                            item.map((valor, index2) => (
                                <Boton 
                                    jugada={valor}
                                    key={index2} 
                                    activarJugada={() => {realizarJugada(jugada, [index, index2])}}>
                                </Boton>
                            ))
                        }
                    </div>
                ))
            }

            {
               (indicadorVictoria !== false) ? (<Victoria jugador={indicadorVictoria} />) : ''
            }
        </>
    );
}