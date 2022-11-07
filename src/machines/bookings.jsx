import { createMachine, assign } from "xstate";


export const BookingMachine = createMachine({
    id: 'buy plane tickets',
    initial: 'initial',
    context: {
      passengers: [],
      country: '',
    },
    states: {
      initial: {
        on: {
          START: 'search'
        }
      },
      search: {
        on: {
          CONTINUE: {
            target: 'passengers',
            actions: assign({
              country: (context, event) => event.country
            })
          },
          CANCEL: 'initial'
        }
      },
      passengers: {
        on: {
          DONE: 'tickets',
          CANCEL: 'initial',
          ADD: {
            target: 'passengers',
            actions: assign((context, event) => context.passengers.push(event.newPassenger))
          }
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