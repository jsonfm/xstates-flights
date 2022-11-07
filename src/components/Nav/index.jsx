import "./styles.css";

export const Nav = ({ state, send}) => {
    const cancel = () => send('CANCEL');

    return (
        <nav className="nav">
            <h2 className="logo"><b>Book</b>Fly ✈️</h2>
            {!state.matches('initial') &&
                <button className="btn" onClick={cancel}>
                    Cancelar
                </button>            
            }
        </nav>
    )
}