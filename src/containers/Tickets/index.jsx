import "./styles.css";

export const Tickets = ({ send, state }) => {
    const finish = () => send('FINISH');
    const { passengers, country } = state.context;

    return(
        <div className="tickets'">
            <h4 className="mb-4 text-dark">Tickets</h4>
            <p className="mb-4 text-center">Gracias por volar con nosotros. 💚</p>
            <div className="flex flex-wrap items-center justify-center mb-4 mt-4">
                <div className="country-container">
                    <h3>{country}</h3>
                </div>
                <div className="passengers-container flex flex-column">
                    <h4>Pasajeros</h4>
                    {passengers.map(passenger => <p>- {passenger}</p>)}
                </div>
            </div>
            <div className="btn-container">
                <button className="btn btn-danger" onClick={finish}>Finalizar</button>
            </div>

        </div>
    )
}