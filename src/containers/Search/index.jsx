import { useState } from "react";

export const Search = ({ state, send }) => {
    const [flight, setFlight] = useState('');
    const options = state.context.countries || [{ name: { common: 'United States'} }];

    const handleChange = (e) => setFlight(e.target.value);
    const goToPassengers = () => {send('CONTINUE', { country: flight })};

    return(
        <div className="search-container flex flex-column">
            <h3 className="mb-2 text-dark">Busca tu destino</h3>
            <p className="mb-2">Cientos de posibilidades, descubre nuevas experiencias ¡Vive!</p>
            <select className="mt-4" onChange={handleChange}>
                <option value="" defaultValue>Escoge un país</option>
                {options.map(({name: { common: country }}) => <option value={country} key={country}>{country}</option>)}
            </select>
            <button className={`btn ${flight && 'btn-primary'} mt-4`} onClick={goToPassengers} disabled={flight===''}>
                Continuar
            </button>
        </div>
    )
}