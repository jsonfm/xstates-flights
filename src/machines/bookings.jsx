import { createMachine, assign } from "xstate";


export const BookingMachine = createMachine(
  {
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
          DONE: {
            target: 'tickets',
            cond: 'moreThanOnePassenger'
          },
          CANCEL: {
            target: 'initial',
            actions: 'cleanContext'
          },
          ADD: {
            target: 'passengers',
            actions: assign((context, event) => context.passengers.push(event.newPassenger))
          },
          DELETE: {
            target: 'passengers',
            actions: assign((context, event) => {
              const { value } = event;
              const index = context.passengers.findIndex(passenger => passenger.toLowerCase() === value.toLowerCase());
              context.passengers.splice(index, 1);
            })
          }
        }
      },
      tickets: {
        on: {
          FINISH: 'initial'
        }
      },
    },

  },
  {
    actions: {
      cleanContext: assign({
        country: "",
        passengers: []
      })
    },
    guards: {
      moreThanOnePassenger: (context) => !!context.passengers.length
    }
  }
)
