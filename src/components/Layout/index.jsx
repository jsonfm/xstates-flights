import { useMachine } from "@xstate/react";
import { BookingMachine } from "@/machines/bookings";


export const Layout = ({children}) => {
    const [state, send] = useMachine(BookingMachine);
    console.log('machine: ', state);
    return(
        <div>{children}</div>
    )
}