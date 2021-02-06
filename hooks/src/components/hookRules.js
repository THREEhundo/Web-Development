/*
ONLY CALL HOOKS AT THE TOP LEVEL
Don't call Hooks inside loops, conditions, or nested functions.
This allows Hooks to be called in the same order each time a component renders.
That's what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.

ONLY CALL HOOKS FROM REACT FUNCTIONS
1. function components
2. custom Hooks

If we want to run an effect conditionally, we can put that condition inside our Hook.
*/
