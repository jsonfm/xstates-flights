import { useState } from "react";

export const Passengers = ({ send }) => {

    const [value, setValue] = useState('');

    const goToTickets = () => send('DONE');

    const onChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        send('ADD', { newPassenger: value});
    }

    return(
        <div>
            <p className="my-4">Agrega a las personas que van a volar.</p>
            <form>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={onChange}
                    className="mb-4"
                />
                <div class="flex gap-4 space-between">
                    <button className="btn" onClick={onSubmit}>
                        Añadir Pasajero
                    </button>
                    <button className="btn" onClick={goToTickets}>
                        Ver mi Ticket
                    </button>
                </div>
            </form>
        </div>
    )
}