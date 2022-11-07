export const Tickets = ({ send, state }) => {
    const finish = () => send('FINISH');

    return(
        <div>
            <h4 className="mb-4 text-dark">Tickets</h4>
            <p className="mb-4">Gracias por volar con nosotros 💚</p>
            <button className="btn" onClick={finish}>Finalizar</button>
        </div>
    )
}