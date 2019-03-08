# Basic Angular

![](https://i.gifer.com/MJQT.gif)

## Check your Angular Cli version
- Angular 6 or <
`ng -v`
- Angular 7
`ng version`

## Install Angular cli
- Installed globally in your system with "-g" 
`npm install -g @angular/cli@latest`

## Update Angular cli
- If you need Update 
`npm install @angular/cli@latest`

- You can verify if you have the 7 version
 `ng version`

- more info: https://www.techiediaries.com/updating-angular-cli-projects/

 ## Create a New Project
- Create your project 
`ng new basicAngular`

- Configure these options
![](/src/assets/images/install-options.png)

- Start service `ng serve`
- Navigate to `http://localhost:4200/`

# Reactive Form with components and services 
## Branch `feature/components-menu-footer-formUser` 
## Creation of components

We need to create 3 components
- `ng generate component menu` 
- `ng generate component footer`
- `ng generate component form-users`

## Branch `feature/add-styles-html` 
## Styles and HTML

- You can save time using these styles, just clone the branch

## Branch `feature/reactive-form` 
## Set the Reactive Form import in app.model

- `import { ReactiveFormsModule } from '@angular/forms';`
- Now you can add logic to the form

## Branch `feature/services` 
## We need add a service for our user data

- Generate a new service `ng generate service user` 
- Add the import in app.model

- `import { UserService } from './services/user/user.service';`
- Add as providers


 ## Notes

- If you have this error `node_modules/rxjs/internal/types.d.ts(81,44): error TS1005: ';' expected error after installation of Angular 6`
- *Step 1* : Go to package.json and modify "rxjs": "^6.0.0" to "rxjs": "6.0.0"
- *Step 2* `Run npm update` in your project.
- *Step 3* : 
`npm cache verify`
- Start service.
`ng serve` 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Slides
https://docs.google.com/presentation/d/1fGUlJfMMlXA2veZ6pb3nimdOX5CCIejJx4NR9Ei8kDg/edit?usp=sharing
