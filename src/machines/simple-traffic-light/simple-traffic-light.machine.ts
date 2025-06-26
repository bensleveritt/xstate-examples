/**
 * Simple traffic light machine
 *
 * This machine represents a traffic light with three states: red, yellow, and green.
 * Overly simplified for demonstration purposes.
 *
 */

import { setup } from "xstate";

export const simpleTrafficLightMachine = setup({
  types: {
    events: {} as { type: "timer" },
  },
}).createMachine({
  id: "simpleTrafficLight",
  initial: "red",
  states: {
    red: {
      on: {
        timer: "yellow",
      },
    },
    yellow: {
      on: {
        timer: "green",
      },
    },
    green: {
      on: {
        timer: "red",
      },
    },
  },
});
