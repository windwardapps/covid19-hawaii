# COVID-19 Scenarios Hawaii

This project was adapted from https://github.com/neherlab/covid19_scenarios to show Hawaii specific information.

# COVID-19 Scenarios

> Tool that models hospital demand during COVID-19 outbreak

### Parameters

Parameters fall into three different categories

- population parameters
- epidemiological parameters
- clinical parameters

Most parameters can be adjust in the tool and for many of them we provide presets. The presets for populations can be
found in the file [data/populationData.tsv](data/populationData.tsv). For administrative divisions below the level of
countries, our convention is to prefix the name with the two letter country code as in `CH-Zürich`.

### Development

#### Install requirements

- Node >= 10
- Yarn 1.x

#### Run

This will run the application in development mode (with hot reloading):

```bash

git clone https://github.com/neherlab/covid19_scenarios
cd covid19_scenarios/
cp .env.example .env
yarn install
yarn dev

```

This will trigger the development server and build process. Wait for the build to finish, then navigate to
`http://localhost:3000/covid19/` in a browser (last 5 version of Chrome or Firefox are supported in dev mode)

Hit Ctrl+C in the terminal to shutdown.

> ℹ️ Hint: type "rs<Enter>" in terminal to restart the build

### Production build

TODO

### Release Build

TODO

### Continuous integration and deployment

TODO

### License

[MIT License](LICENSE)

Copyright (c) 2020 neherlab
