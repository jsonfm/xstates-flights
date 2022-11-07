export const Welcome = ({ send }) => {
    const startBooking = () => {
        send('START');
    }

    return(
        <div>
            <h3 className="mt-4 mb-4">¡Hoy es el día!</h3>
            <p className="mb-4">
                Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender las maravillas que hay para explorar.
            </p>
            <button className="btn mt-4" onClick={startBooking}>
                Comenzar
            </button>
        </div>
    )
}