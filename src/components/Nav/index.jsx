import "./styles.css";

export const Nav = ({ state, send}) => {

    const cancel = () => send('CANCEL');

    return (
        <nav className="nav">
            <h2 className="logo"><b>Booking </b>flight ✈️</h2>
            {(!state.matches('initial') && !state.matches('tickets')) &&
                <button className="btn btn-danger" onClick={cancel}>
                    Cancelar
                </button>            
            }
        </nav>
    )
}