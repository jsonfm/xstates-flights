export const Welcome = ({ send }) => {
    const startBooking = () => {
        send('START');
    }

    return(
        <div className="card">
            <h3>¡Hoy es el día!</h3>
            <p>
                Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender las maravillas que hay para explorar.
            </p>
            <button className="btn" onClick={startBooking}>
                Comenzar
            </button>
        </div>
    )
}