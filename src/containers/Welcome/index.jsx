export const Welcome = ({ send }) => {
    const startBooking = () => {
        send('START');
    }

    return(
        <div>
            <h3 className="mt-4 mb-4 text-dark">¡Hoy es el día!</h3>
            <p className="mb-4">
                Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender las maravillas que hay para explorar.
            </p>
            <button className="btn btn-primary mt-4 mr-auto" onClick={startBooking}>
                Comenzar
            </button>
        </div>
    )
}