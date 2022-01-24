# Pokermons

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Feature covered
Scope
• Create a web application to list all Pokémon and show paginated results
• User should be shown the Pokémons in a card-based layout 
• Each card should have the image of the Pokémon
o Name
o Height
o Weight
o List of abilities.
• User should have option to choose the number of cards available per page available
options are 10, 20 and 50
• User should be shown previous and next links - on  top
• User should be able to search through the Pokémon list using the name
• User should be able to sort the result by name, height and weight.

Testings:
Handled basic UT'S  and UT'S are written in JASMIN

## not coverd:due to time constraint
1. Page refresh should maintain the sorting and search related data. 
        way to do: " we can store  the latest value of search and sort  in local storage and get the values when page is refreshed
2. User should be taken to the details page and present all the information available for
that Pokémon. The user should have a link to go back to the previous page.
    way to do: capture selected postmmon details and make link to each postmon and pass the data to the next screen and show back button