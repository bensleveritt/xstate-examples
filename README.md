# XState Examples

These are some examples of using XState to model state machines in TypeScript/JavaScript.

I often find myself wanting to use XState when defining UI and business logic, but it can be harder sell to developers who are not familiar with state machines.

I think that state machines are a powerful tool for modeling complex systems and can help improve the maintainability and scalability of your code.

This is also an opportunity for me to learn more about testing machines, such as model-based testing and property-based testing.

## Machines

### Toggle button

A super simple machine that can either be on or off, akin to a light switch.

It's so basic that you'd wonder why you'd want to model it as a state machine. However, it's a great starting point for understanding the basics of state machines, and how XState models them.

### Simple traffic light

A toy traffic light that can be in one of three states: red, yellow, or green. Demonstrating multiple transitions.

### UK traffic light

A traffic light that has 4 states, with 3 outputs: red, amber, and green. The difference is that the amber state is split into two separate states: red (stop) -> red/amber (prepare to go) -> green (go) -> amber (prepare to stop) -> red (stop again).
