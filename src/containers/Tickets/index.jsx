export const Tickets = ({ send, state }) => {
    const finish = () => send('FINISH');

    return(
        <div>
            <h4 className="mt-4 mb-4">Tickets</h4>
            <p className="mb-4">Gracias por volar con nosotros 💚</p>
            <button className="btn" onClick={finish}>Finalizar</button>
        </div>
    )
}