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
    const hasPassengers = !!passengers.length;

    return(
        <div>
            <div className="my-4 flex space-between items-center flex-wrap">
                <b>Agrega a las personas que van a viajar</b>
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
                    <button className="btn btn-secondary" type="button" onClick={onSubmit}>
                        Añadir Pasajero
                    </button>
                    <button className={`btn ${hasPassengers && 'btn-primary'}`} type="button" onClick={goToTickets} disabled={!hasPassengers}>
                        Ver mi Ticket
                    </button>
                </div>
            </form>
        </div>
    )
}