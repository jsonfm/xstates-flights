import { useState } from "react";

export const Search = ({ send }) => {
    const [flight, setFlight] = useState('');
    const options = ['Mexico', 'Venezuela', 'Colombia', 'Ecuador'];

    const handleChange = (e) => setFlight(e.target.value);
    const goToPassengers = () => send('CONTINUE');

    return(
        <div class="search-container flex flex-column">
            <h3 className="mb-2">Busca tu destino</h3>
            <p className="mb-2">Cientos de posibilidades, descubre nuevas experiencias ¡Vive!</p>
            <select className="mt-4" onChange={handleChange}>
                <option value="" defaultValue>Escoge un país</option>
                {options.map(country => <option value={country} key={country}>{country}</option>)}
            </select>
            <button className="btn mt-4" onClick={goToPassengers} disabled={flight===''}>
                Continuar
            </button>
        </div>
    )
}