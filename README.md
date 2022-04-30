# Thesaurus Syllables Gui

_Very_ simple gui for [this](https://github.com/airfork/thesaurus-syllables) repo.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Production 

To run in production mode, add ` --configuration production` to either the `ng build` (preferable) or `ng serve` command

## Configuring Api Location

By default, the app points to `http://localhost:8080/api?search=`. To change this, visit [environment.ts](src/environments/environment.ts)
or [environment.prod.ts](src/environments/environment.prod.ts) and change the value of the `apiUrl` key.
Changing the former file will have an effect on dev builds, while the latter will have an effect on prod builds.
