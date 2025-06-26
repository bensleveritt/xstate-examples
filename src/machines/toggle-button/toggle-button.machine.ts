/**
 * Toggle button
 *
 * It's either on or off.
 */

import { setup } from "xstate";

export const toggleButtonMachine = setup({
  types: {
    events: {} as { type: "toggle" },
  },
}).createMachine({
  id: "toggleButton",
  initial: "off",
  states: {
    off: {
      on: { toggle: "on" },
    },
    on: {
      on: { toggle: "off" },
    },
  },
});
