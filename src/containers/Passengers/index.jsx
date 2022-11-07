import { useState } from "react";
import { UilTrashAlt } from '@iconscout/react-unicons';
import "./styles.css";


export const Passengers = ({ state, send }) => {

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

    const deletePassenger = (passenger) => {
        send('DELETE', { value: passenger });
    }

    const { passengers, country } = state.context

    return(
        <div>
            <div className="my-4 flex space-between items-center flex-wrap">
                <b>Agrega a las personas que van a volar</b>
                <div className="country">{country}</div>
            </div>
            <div className="mt-4">
                {passengers.map(passenger => (
                    <div className="flex space-between passenger-container">
                        <p className="passenger-name">{passenger}</p>
                        <UilTrashAlt  onClick={() => deletePassenger(passenger)}/>
                    </div>  
                ))}
            </div>
            <form className="mt-4">
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Daniela, Emily, Kelly ..."
                    onChange={onChange}
                    className="mb-4 search-input"
                />
                <div class="flex gap-4 space-between">
                    <button className="btn btn-secondary" onClick={onSubmit}>
                        Añadir Pasajero
                    </button>
                    <button className="btn btn-primary" onClick={goToTickets}>
                        Ver mi Ticket
                    </button>
                </div>
            </form>
        </div>
    )
}