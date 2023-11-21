# DI(Dependency Injection) / IoC(Inversion of Control) 

## Tight-coupling & Loose Coupling
___
### Tight-Coupling & Dependency
- Strong coupling (Tight Coupling) is when classes and objects are dependent on each other
- If one object is changed, it often requires changes in other objects, making it easy to overlook necessary changes.
- The objects are so tightly coupled that they cannot be used independently.
- Tight coupling often involves more frequent use of the 'new' keyword, which consumes more computer memory as each new instance is created.

### Loose-Coupling & Dependency
- Loose Coupling can be understood as "the objects are coupled but loosely so," and it refers to reducing a class's direct usage of other classes, thus lessening class dependency.
- Classes are loosely coupled, making it easier to develop new features or modify and extend existing ones.
- Code maintenance is simpler.
- Substituting with test doubles becomes easier, facilitating unit testing.

## DI(Dependency Injection) & IoC(Inversion of Control)
___
### DI(Dependency Injection)
- Dependency Injection (DI) is a method for transforming Tight Coupling into Loose Coupling and is one of the techniques of Inversion of Control.
- It can be seen as a method where, instead of directly creating other objects within an object, they are created externally and then injected into it.

### IoC(Inversion of Control)
- Inversion of Control (IoC) is one of the common design patterns.
- Traditionally, developers were the ones controlling the flow of a program. However, with the advent of the IoC concept, the framework started to containerize dependencies and manage their lifecycle.
- In essence, the control of dependencies shifted from the developers to the framework, indicating a change in the flow of control. This shift is referred to as 'IoC (Inversion of Control).