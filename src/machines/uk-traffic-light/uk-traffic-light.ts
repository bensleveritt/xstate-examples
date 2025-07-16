/**
 * A UK traffic light machine.
 *
 * This machine represents a traffic light that cycles through red, amber, and green states.
 * */

import { setup } from "xstate";

export const ukTrafficLightMachine = setup({
  types: {
    events: {} as { type: "timer" },
  },
}).createMachine({
  id: "ukTrafficLight",
  initial: "red",
  states: {
    red: {
      on: {
        timer: "redAmber",
      },
    },
    redAmber: {
      on: {
        timer: "green",
      },
    },
    green: {
      on: {
        timer: "amber",
      },
    },
    amber: {
      on: {
        timer: "red",
      },
    },
  },
});
