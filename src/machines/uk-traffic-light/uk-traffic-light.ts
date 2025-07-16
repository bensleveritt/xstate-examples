/**
 * A UK traffic light machine.
 *
 * This machine represents a traffic light that cycles through red, amber, and green states.
 * */

import { setup } from "xstate";

export interface UkTrafficLightContext {
  activeSignals: {
    red: boolean;
    amber: boolean;
    green: boolean;
  };
}

const activeSignals = {
  red: false,
  amber: false,
  green: false,
};

export const ukTrafficLightMachine = setup({
  types: {
    context: {} as UkTrafficLightContext,
    events: {} as { type: "timer" },
  },
}).createMachine({
  id: "ukTrafficLight",
  initial: "red",
  context: {
    activeSignals,
  },
  states: {
    red: {
      entry: ({ context }) =>
        (context.activeSignals = { ...activeSignals, red: true }),
      on: {
        timer: "redAmber",
      },
    },
    redAmber: {
      entry: [
        ({ context }) =>
          (context.activeSignals = {
            ...activeSignals,
            red: true,
            amber: true,
          }),
      ],
      on: {
        timer: "green",
      },
    },
    green: {
      entry: ({ context }) =>
        (context.activeSignals = { ...activeSignals, green: true }),
      on: {
        timer: "amber",
      },
    },
    amber: {
      entry: ({ context }) =>
        (context.activeSignals = { ...activeSignals, amber: true }),
      on: {
        timer: "red",
      },
    },
  },
});
