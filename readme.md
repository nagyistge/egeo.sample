# Egeo Sample

This is a sample application to show how to create an UI quickly and with ease
using the Egeo UI Kit and the Egeo Base Framework.

This sample includes the Sass True Framework as well as the Karma and Jasmine
frameworks installed and working. Do you also have surfire-reports and lcov reports
about the test coverage. Once you launch npm run test, you can see a new folder
in */dist/*, called *test-coverage* where you can find the reports.

This sample includes also a pre-commit process that ensures that all tests must
be passed before upload a commit to github.

## How to install Egeo as a dependency of your project

If you work with Npm or Bower, the only thing to do is to configure the Github project of Egeo as a git repository as it shown below:

### With Npm

Include the Egeo Sample dependency in the *dependencies* section of your package.json file:
```
  "dependencies": {
    ...
    "egeo.sample": "git://github.com/Stratio/egeo.sample.git#master",
    ...
  }
```
And launch `npm install`. You can also update the library using `npm update egeo.sample`.

### With Bower

Include the Egeo Sample dependency in the *dependencies* section of your bower.json file:
```
  "dependencies": {
    ...
    "egeo.sample": "git://github.com/Stratio/egeo.sample.git#master",
    ...
  }
```
And launch `bower install`. You can also update the library using `bower update egeo.sample`.


## How to install it locally

Download the project to any folder via `git clone` or using the ZIP button and launch `npm install` to install all dependencies needed to build the website ([NodeJS](https://nodejs.org) and [Git client](https://git-scm.com/download/) are required to be installed first to can use these commands on your console).

```
git clone https://github.com/Stratio/egeo.sample.git

npm install
```

## How to compile

```
npm run-script dist
```

This command compiles the app and creates a distribution with all files needed. The distribution will be set in the *dist* folder and will include the whole javascript and assets needed as well as the minified version of the CSS generated.

### How to test

```
npm run-script test
```

This command launches the suit of unit tests to test the Sass code.
