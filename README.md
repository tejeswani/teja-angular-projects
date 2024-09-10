Let's build a reactive web-application in Angular
Use Subject and Observable to do so --

What is Angular ?
Angular is a open-source Javascript framework developed and maintained by Google for building web applications.

Observable in Angular ?
-> In Angular, Observalbles are part of the Reactive Extensions for Javascript (RxJS) Library.
-> Observables provide support for passing messages between parts of your application.
-> Observables are a powerful feature used extensively in reactive programming to handle async operations and data streams.
-> Observables provide a way to subscribe to and receive notifications when new data or events are emitted, enabling you to react to changes in real-time.

Subject in Angular ?
Subject and Observables are like publisher and publish multicast and unicast events.
Subject multicast to many observers
Observables are unicast and they're used for everything from handling events to managing asynchronous data flows.
-- basic idea is that an observable represents a stream of values that can be observed over time


node -v: v18.20.4
ng --version: 18.2.3
npm -version: 10.7.0


Typescript -> An enhanced version of Javascript which is strongly typeed programming language.
npm install -g @angular/cli
ng new angular-observables-example
npm start
ng help

ctrl+/ -> comment and uncomment
ctrl+shift+k -> to delete a line
shift+alt+up and down arrow -> duplicate the line upwards and downwards
Debugging keys --
continue -> f5
Step into -> f11
step out -> f12
