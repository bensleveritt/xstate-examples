import { test, expect } from "vitest";
import { createActor } from "xstate";
import { simpleTrafficLightMachine } from "./simple-traffic-light.machine";

// Manually test all possible state transitions
test("should transition correctly between all states", () => {
  // Create an actor from the machine
  const trafficLight = createActor(simpleTrafficLightMachine);

  // Start the actor
  trafficLight.start();

  // Test initial state
  expect(trafficLight.getSnapshot().matches("red")).toBe(true);

  // Test red -> yellow
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("yellow")).toBe(true);

  // Test yellow -> green
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("green")).toBe(true);

  // Test green -> red
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("red")).toBe(true);

  // Clean up
  trafficLight.stop();
});
