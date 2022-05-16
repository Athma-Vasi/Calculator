# Calculator

Calculator as part of The Odin Project curriculum. This is the final project in the Foundations part of the course, designed to test DOM manipulation, functions and basic state management.

**[Click here to view project](https://athma-vasi.github.io/odin-calculator/)**

## TL;DR

- keyboard presses event listeners
- state management
- imperative logic

### Grabbing keyboard presses

Setting up event listeners for the keyboard presses required learning about data attributes, which allowed me to grab the specific button element by passing in `ev.key` to `.querySelector`.

I split off the keyboard handling function separately from the click handling function, although I ended up duplicating a lot of the same logic and function invocations, which wasn't very DRY.

### State management and functions

I decided to use an object literal to manage state instead of having variables, mostly because it made `console.log()`ing the state easier :joy:. I learned separation of concerns by splitting up big kitchen-sink functions into smaller and more manageable functions.

### Imperative logic

This was the hardest part of the entire project and required many complete rewrites. Besides liberal usage of `console.log()`, I had to keep a mental track of application state when writing the operator functions. This was quite a workout and required me to write very imperative logic.

Compounding the difficulty was my decision to use boolean flags as part of the conditional logic, which seemed to exponentially increase the complexity with every flag I added. I eventually managed to pare down the flags to just two, which was near the limit of my skills at this point in my journey.

Really, apart from data-attributes, this project did not utilize any new concepts, rather it thoroughly tested all the concepts learned in the Foundations part of the curriculum.

I fell down many times and rewrote the entire script numerous times. I felt really proud when I finished it.
