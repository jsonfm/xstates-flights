import { useMachine } from "@xstate/react";
import { BookingMachine } from "@/machines/bookings";
import { Layout } from "@/components/Layout";
import { StepsLayout } from "@/components/StepsLayout";


function App() {
  const [state, send] = useMachine(BookingMachine);
  console.log("machine: ", state.value);
  return (
    <div className="App">
      <Layout>
        <StepsLayout state={state} send={send}/>
      </Layout>
    </div>
  )
}

export default App
