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
  expect(trafficLight.getSnapshot().context.activeSignals).toEqual({
    red: true,
    amber: false,
    green: false,
  });
  // Test red -> red + amber
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("redAmber")).toBe(true);
  expect(trafficLight.getSnapshot().context.activeSignals).toEqual({
    red: true,
    amber: true,
    green: false,
  });

  // Test red + amber -> green
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("green")).toBe(true);
  expect(trafficLight.getSnapshot().context.activeSignals).toEqual({
    red: false,
    amber: false,
    green: true,
  });

  // Test green -> amber
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("amber")).toBe(true);
  expect(trafficLight.getSnapshot().context.activeSignals).toEqual({
    red: false,
    amber: true,
    green: false,
  });

  // Test amber -> red
  trafficLight.send({ type: "timer" });
  expect(trafficLight.getSnapshot().matches("red")).toBe(true);
  expect(trafficLight.getSnapshot().context.activeSignals).toEqual({
    red: true,
    amber: false,
    green: false,
  });

  // Clean up
  trafficLight.stop();
});
