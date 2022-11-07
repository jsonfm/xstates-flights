export const Tickets = ({ send, state }) => {
    const finish = () => send('FINISH');

    return(
        <div className="card">
            <h4>Tickets</h4>
            <p>Gracias Por volar con nosotros 💚</p>
            <button className="btn" onClick={finish}>Finalizar</button>
        </div>
    )
}