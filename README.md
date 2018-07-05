Cookiecutter-webpack
====================
[![CircleCI](https://circleci.com/gh/goldhand/cookiecutter-webpack.svg?style=svg)](https://circleci.com/gh/goldhand/cookiecutter-webpack)

[![Cookiecutter-webpack](https://img.shields.io/badge/built%20with-Cookiecutter%20Webpack-f38230.svg)][cookiecutter-webpack]

Boilerplate for setting up [webpack 4][webpack4] configuration with [awesome-typescript-loader][awesome-typescript-loader] for es6 modules, [react][react] + [redux][redux] for views and state, [Istanbul][Istanbul] for code coverage and [mocha][mocha] + [chai][chai] + [enzyme][enzyme] for testing.

[webpack4]: https://github.com/webpack/webpack/tree/v4.14.0
[awesome-typescript-loader]: https://github.com/s-panferov/awesome-typescript-loader/tree/v5.2.0
[react]: https://facebook.github.io/react/
[redux]: http://redux.js.org/index.html
[Istanbul]: https://istanbul.js.org/
[mocha]: https://github.com/mochajs/mocha
[chai]: https://github.com/chaijs/chai/tree/4.1.2
[enzyme]: https://github.com/airbnb/enzyme/tree/v2.9.1
[cookiecutter-webpack]: https://github.com/goldhand/cookiecutter-webpack

Getting Started
---------------

Download `cookiecutter` to a global python path

    $ pip install cookiecutter

In your project directory run

    $ cookiecutter https://github.com/DerekCL/cookiecutter-typescript-webpack.git

Answer the prompts then `cd` into your newly created project directory.

Install npm packages

    $ npm install

Start the server

    $ npm start

Open up http://localhost:8080 in your browser.

You will have a React / Redux counter app running with redux dev-tools. See the generated `README.md` for an explanation of the react / redux project structure.


You can run the test suite

    $ npm test


You should also create a new git repo and push it to github

```
$ git init
$ git add .
$ git commit -m "Init"
$ git remote add origin git@github.com:DerekCL/project_name.git
$ git push -u origin master
```


Options
-------

* `project_name`: Your Project Name
* `repo_name`: Name of this projects git repository
* `repo_owner`: Your github username
* `static_root`: Path to where this projects source code lives, or path to static files directory if integrating into an existing project
* `production_output_path`: Path where your compiled bundles should go
* `author_name`: Your Name
* `description`: A short description of the project for the `README.md` file
* `version`: Project version number
* `css_extension`: [`sass`, `less`, `none` ] - use `less` or `sass` to preprocess styles.


Contributing
------------

Accepting pull requests!

Clone the project:
```sh
$ git clone git@github.com:DerekCL/cookiecutter-typescript-webpack.git
```
Install python and npm dependencies:
```sh
$ pip install -r requirements.txt && npm install
```
Run build tests:
```sh
$ make test
```
