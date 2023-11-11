# client candle

this project is based from

<https://github.com/vercel/commerce/tree/v1>

## folder Structure


<https://blog.webdevsimplified.com/2022-07/react-folder-structure/>
<https://medium.com/@kthamodaran/react-8-best-practices-folder-structure-5dbda48a69e>
<https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/>
<https://engineering.udacity.com/react-folder-structure-for-enterprise-level-applications-f8384eff162b>

<https://blog.webdevsimplified.com/2022-07/facade-pattern/>

***clean architeture***
<https://dev.to/rubemfsv/clean-architecture-applying-with-react-40h>
<https://github.com/eduardomoroni/react-clean-architecture>

<https://dev.to/rubemfsv/clean-architecture-the-concept-behind-the-code-52do>

<https://github.com/ryanmcdermott/clean-code-javascript>

***dependency-injection-and fp in js***
<https://jonbarnett.hashnode.dev/a-rollercoaster-ride-into-dependency-injection-and-functional-programming-in-javascript>

***design refactory***
<https://refactoring.guru/design-patterns/factory-method>

### Services folder

The services directory is less essential than components, but if you're making a plain JavaScript module that the rest of the application is using, it can be handy. A common contrived example is a LocalStorage module, which might look like this:

.
└── /src
    └── /services
        ├── /LocalStorage
        │   ├── LocalStorage.service.js
        │   └── LocalStorage.test.js
        └── index.js
An example of the service:

```js
src/services/LocalStorage/LocalStorage.service.js
export const LocalStorage = {
  get(key) {},
  set(key, value) {},
  remove(key) {},
  clear() {},
}
import { LocalStorage } from '@services'

LocalStorage.get('foo')
```

***service folder like store for redux***

This folder will be added if we use redux in your project. Inside it, there are 3 folders named actions, reducers, and constant subfolders to manage states. The actions and reducers will be called in almost all the pages, so create actions, reducers & constants according to pages name.

***store folder***

The global data store will be contained in the store directory - in this case, Redux. Each feature will have a folder, which will contain the Redux Toolkit slice, as well as actions and tests. This setup can also be used with regular Redux, you would just create a .reducers.js file and .actions.js file instead of a slice. If you're using sagas, it could be .saga.js instead of .actions.js for Redux Thunk actions.

.
└── /src
    ├── /store
    │   ├── /authentication
    │   │   ├── /authentication.slice.js
    │   │   ├── /authentication.actions.js
    │   │   └── /authentication.test.js
    │   ├── /authors
    │   │   ├── /authors.slice.js
    │   │   ├── /authors.actions.js
    │   │   └── /authors.test.js
    │   └── /books
    │       ├── /books.slice.js
    │       ├── /books.actions.js
    │       └── /books.test.js
    ├── rootReducer.js
    └── index.js
You can also add something like a ui section of the store to handle modals, toasts, sidebar toggling, and other global UI state, which I find better than having const [isOpen, setIsOpen] = useState(false) all over the place.

In the rootReducer you would import all your slices and combine them with combineReducers, and in index.js you would configure the store.

### api folder

react-project
├── api
│   ├── services
│   │   ├── Job.js
│   │   ├── User.js
│   ├── auth.js
│   └── axios.js

The api directory contains all services that take care of the communication between the React application (frontend) and an API (backend). A single service provides multiple functions to retrieve data from or post data to an external service using the HTTP protocol.

auth.js provides functions for authentication and axios.js contains an axios instance including interceptors for the outgoing HTTP requests and incoming responses. Moreover, the process of refreshing JWTs is handled in here.

### Middle ware Folder

This folder consists of middle ware that allows for side effects in the application. It is used when we are using reduce with it. Here we keep all our custom middle ware.

### file naming : use kebab-case

During refactoring, I renamed myComponent.js to MyComponent.js. It worked locally, but the CI on GitHub complained, saying the import statement was broken:

import MyComponent from "./MyComponent";
Hours of debuggine followed. Turns out, MacOS has a case-insensitive file system, so MyComponent.js and myComponent.js are the same. Git didn't recognize the change, but the CI on GitHub used a Linux image, which is case-sensitive, causing issues.

To avoid this, use kebab-case for file and folder names:

Instead of MyComponent.js, write my-component.js.
Instead of useMyHook.js, write use-my-hook.js.

## App

This is the Next.js app for this monorepo. You can run it with the following command from the root of the monorepo:

```bash
pnpm dev
```

### react-hook just ready

<https://usehooks-ts.com/react-hook/>

### comparison react-questy vs swr apollo client

<https://tanstack.com/query/v4/docs/react/comparison>
<https://dev.to/sakethkowtha/react-query-vs-useswr-122b#:~:text=React%20Query%20has%20a%20more,easier%20to%20use%20and%20understand>.

The app should be up and running at <http://localhost:3000>.

## to read

### react mvc

<https://blog.testdouble.com/posts/2019-11-04-react-mvc/>
<https://github.com/Abouelyatim/React-App-Clean-Architecture>

tick tak example
<https://betterprogramming.pub/clean-architecture-with-react-cc097a08b105>

<https://reactjsexample.com/clean-architecture-for-react/>

<https://betterprogramming.pub/how-to-avoid-use-cases-boilerplate-in-android-d0c9aa27ef27>

### design pattern for backend

src
├── app.js           app entry point
├── /api               controller layer: api routes
├── /config          config settings, env variables
├── /services        service layer: business logic
├── /models          data access layer: database models
├── /scripts            miscellaneous NPM scripts
├── /subscribers    async event handlers
└── /test                 test suites

dataAcceess or repository

simple example
<https://ctrly.blog/nodejs-layered-architecture/>
<https://mannhowie.com/clean-architecture-node>

<https://www.freecodecamp.org/news/design-pattern-for-modern-backend-development-and-use-cases/>

<https://blog.logrocket.com/node-js-project-architecture-best-practices/>

### deno

<https://medium.com/webeetle/deno-vs-node-7961136d7523>

### clean code

<https://blog.cleancoder.com/>

### TDD Harms Architecture

<https://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html>

### Open-Closed Principle (OCP)

 <https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle>

### Dependency Inversion Principle (DIP)

 <https://en.wikipedia.org/wiki/Dependency_inversion_principle>

## all you need for best react dev

 <https://profy.dev/>

### Learn a professional git workflow

Git will be the foundation of your work and workflow as a professional developer. You’ll discover how to:

- Confidently create, merge and review Pull Requests
- Work with Continuous Integration Pipelines

czWork on an existing codebase

You’ll almost always work on an existing codebase, but navigating an unfamiliar codebase can be overwhelming. You’ll learn how to:

- Navigate an unfamiliar codebase with ease
- Create bug fixes and UI changes

### Build a UI kit based on Figma designs

Every front-end developer needs to know how to work with professional designs. You’ll learn how to:

- Implement pixel-perfect designs with Figma
- Document components with Storybook

### Learn how to write automated tests

Testing is a rare, but critical skill for Junior Developers. You’ll learn how to:

Write test with Cypress
Debug your tests

### Implement your own features

Professional projects are often split into features, discussed, planned and prioritized. You’ll learn how to:

- Work through feature requests from a Kanban board
- Practice everything by writing code based on designs and covering your work with automated tests

## project examples

### Bulletproof React

A simple, scalable, and powerful architecture for building production ready React applications.

<https://github.com/alan2207/bulletproof-react/blob/master/README.md>

### prolog app

This repository is part of the React Job Simulator where you work in a professional dev environment with advanced tooling and workflows. You implement tasks based on designs starting from small bug fixes to full-blown features. Basically, you learn a lot of the things hands-on that you usually only experience once you joined a professional React team.

<https://github.com/profydev/prolog-app/blob/main/typings/page.types.ts>

### oauth

<https://auth0.com/blog/building-a-wikipedia-app-using-react-hooks-and-auth0/>

## generator code

### amplication

Instantly generate production-ready Node.js backend apps
<https://github.com/amplication/amplication>
