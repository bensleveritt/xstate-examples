import { test, expect } from "vitest";
import { createActor } from "xstate";
import { ukTrafficLightMachine } from "./uk-traffic-light";

// Manually test all possible state transitions
test("should transition correctly between all states", () => {
  // Create an actor from the machine
  const trafficLight = createActor(ukTrafficLightMachine);

  // Start the actor
  trafficLight.start();

  // Test initial state
  expect(trafficLight.getSnapshot().matches("red")).toBe(true);

  // Test red -> red + amber
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("redAmber")).toBe(true);

  // Test red + amber -> green
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("green")).toBe(true);

  // Test green -> amber
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("amber")).toBe(true);

  // Test amber -> red
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("red")).toBe(true);

  // Clean up
  trafficLight.stop();
});
