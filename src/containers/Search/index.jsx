import { useState } from "react";

export const Search = ({ send }) => {
    const [flight, setFlight] = useState('');
    const options = ['Mexico', 'Venezuela', 'Colombia', 'Ecuador'];

    return(
        <div className="card">
            <h3>Busca tu destino</h3>
            <select>
                <option value="" defaultValue>Escoge un país</option>
                {options.map(country => <option value={country} key={country}>{country}</option>)}
            </select>
            <button className="btn mt-4">
                Continuar
            </button>
        </div>
    )
}