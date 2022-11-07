import { useMachine } from "@xstate/react";
import { BookingMachine } from "@/machines/bookings";
import { Layout } from "@/components/Layout";
import { StepsLayout } from "@/components/StepsLayout";
import { Nav } from "@/components/Nav";

function App() {
  const [state, send] = useMachine(BookingMachine);

  return (
    <div className="App">
      <Layout>
        <div className="card">
          <Nav state={state} send={send}/>
          <StepsLayout state={state} send={send}/>
        </div>
      </Layout>
    </div>
  )
}

export default App
