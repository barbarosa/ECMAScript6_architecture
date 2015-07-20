# EcmaScript6_architecture

[![Build Status](https://travis-ci.org/barbarosa/ECMAScript6_architecture.svg?branch=master)](https://travis-ci.org/barbarosa/ECMAScript6_architecture)

![alt system_overview](https://lh3.googleusercontent.com/Q6HBwBqHKxTH1Jl2rxO09BNjIaT-8W44MQIeDg7mZVM=w900-h509-no)

Workshop and example of architecture with testable, maintainable, decoupled components written in ES6.

Can be used as a starter for an ecommerce client app.

Presentation: http://slides.com/andreipreda/js-architecture-workshop

## Content

* Basic shopping cart application writen in JavaScript ES6 that uses [React](https://facebook.github.io/react/) and [Baobab](https://github.com/Yomguithereal/baobab) although the architecture described can be framework independent

* Unit tests with example testing a React component using [jsdom](https://github.com/tmpvar/jsdom) and [cheerio](https://github.com/cheeriojs/cheerio) on [mocha](http://mochajs.org/)

* Documented code example

## Install, run and test

Assuming you have node.js, npm, gulp & mocha (globally installed), from the project directory run:

*From the project directory*:

```npm install```

```npm test```

```gulp compiled```

```gulp webserver```

## Docs

Build docs using [esdoc](https://esdoc.org/)

![alt docs_screenshot](https://lh3.googleusercontent.com/dkOH_cz9K1P8ojQQL0l2nwpcpfZ4PjatfaGe9pKQURo=w1326-h754-no)

*From the project directory*:

```npm install -g esdoc```

```esdoc -c esdoc.json```

```open ./esdoc/index.html```

## Licence
MIT
