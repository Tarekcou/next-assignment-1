1. Differences between interfaces and types in TypeScript:
   Both are used to define the shape or structure of data.

Interface is mainly for defining object structure, especially in classes.

Type is more flexible — it can define not just objects but also unions, intersections, and primitives.

Interfaces can be extended or merged, types cannot be changed once defined.

For simple object definitions, both work similarly.

2. What is type inference in TypeScript? Why is it helpful?
   Type inference means TypeScript automatically guesses the type of a variable based on the value assigned.

It helps because you don’t have to write types manually every time.

It makes the code cleaner, faster to write, and still safe.

TypeScript will still show errors if you use the wrong type later.

3. Union and Intersection types in TypeScript:
   Union type means a variable can be one type OR another (like number or string).

Intersection type means combining two or more types together — the variable must have all properties from those types.

Union gives flexibility, intersection gives strict structure combining multiple types.

4. Difference between any, unknown, and never:
   any: Accepts any value, no checking, not safe. TypeScript won’t warn you of mistakes.

unknown: Also accepts any value, but you have to check the type before using. Safer than any.

never: Used when a function or variable will never return anything — like a function that always throws an error or runs forever.
