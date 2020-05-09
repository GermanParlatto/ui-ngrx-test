# UiNgrxTest

Hi there, I'm German, a young guy with a big passion, build creative things for the web.

## Objetive

The objective put hands-on to build an app using Redux + Angular, Also keep on focus on the CI/CD concepts.

## About this project

It's just a simple page that allows showing the countries details across the regions, that consist in select the region ej Asia, Europe to filter the countries. And then, ones chose the country thought another dropdown. Then a table with country details will be visible.
The countries data will be consumed through a public API

> #### NOTE:
>
> A future improvement should be to store the countries data in the browser. Although to call API whenever you change the region.
> Just consume the data from API the first time, storing in the browser, when the region is selected. That allows getting a data the next time when you choose the same region again without raising the API request.

**Libraries used**

-   [jasmine-marbles](https://www.npmjs.com/package/jasmine-marbles) to help me test the @effect of the Store and so on.
-   [npm-run-all](https://www.npmjs.com/package/npm-run-all) used to sequence build and start.
-   [start-server-and-test](https://www.npmjs.com/package/start-server-and-test) to execute in TravisCI to perform a build `ng build --prod` start app on `localhost:4200` and test. `cypress:run`
-   [cypress](https://www.npmjs.com/package/cypress) to perform end to end test.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm cypress:open` to execute the end-to-end tests via [Cypress](http://www.cypress.io/).

### Test Coverage

Run `npm run generate-coverage` to generate. Then to see the results you have to go inside of the `./coverage/index.html` folder or run `npm run show-coverage`
