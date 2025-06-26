import { describe, it, expect } from "vitest";
import { toggleButtonMachine } from "./toggle-button.machine";
import { createActor } from "xstate";

describe("toggleButtonMachine", () => {
  it("should toggle between on and off", () => {
    const machine = createActor(toggleButtonMachine);

    machine.send({ type: "toggle" });
    expect(machine.getSnapshot().matches("on"));

    machine.send({ type: "toggle" });
    expect(machine.getSnapshot().matches("off"));
  });
});
