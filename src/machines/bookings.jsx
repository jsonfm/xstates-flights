import { createMachine } from "xstate";


export const BookingMachine = createMachine({
    id: 'buy plane tickets',
    initial: 'initial',
    states: {
      initial: {
        on: {
          START: 'search'
        }
      },
      search: {
        on: {
          CONTIUNE: 'passengers',
          CANCEL: 'initial'
        }
      },
      passengers: {
        on: {
          DONE: 'tickets',
          CANCEL: 'initial'
        }
      },
      tickets: {
        on: {
          FINISH: 'initial'
        }
      },
    }
  }
)