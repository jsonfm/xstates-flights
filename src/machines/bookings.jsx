import { createMachine, assign } from "xstate";
import { fetchCountries } from "@/api/countries";


const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: assign({
            countries: (context, event) => event.data,
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Fallo el request',
          })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};


export const BookingMachine = createMachine(
  {
    id: 'buy plane tickets',
    initial: 'initial',
    context: {
      passengers: [],
      country: '',
      countries: [],
      error: '',
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
        },
        ...fillCountries,
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


