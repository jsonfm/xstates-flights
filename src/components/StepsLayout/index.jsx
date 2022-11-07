import { Welcome } from "@/containers/Welcome";
import { Search } from "@/containers/Search";
import { Passengers } from "@/containers/Passengers";
import { Tickets } from "@/containers/Tickets";
import "./styles.css";


export const StepsLayout = ({ state, send }) => {
    console.log("state: ", state);
    const render = () => {
        if(state.matches('initial')) return <Welcome send={send} />
        if(state.matches('search')) return <Search send={send} />
        if(state.matches('passengers')) return <Passengers send={send} />
        if(state.matches('tickets')) return <Tickets send={send} />
        return null;
    }

    return(
        <div>
            {render()}
        </div>
    )
}