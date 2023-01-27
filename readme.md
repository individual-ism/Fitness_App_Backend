# ReposFit Backend

[Backend Deployment][backend_deployment] | [Frontend Deployment][frontend_deployment] | [Frontend Repository][frontend_repository]

![Exercise](https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/04/exerciseHowOften-944015592-770x533-1-650x428.jpg)

## Description

This API is a compendium of exercises and exercise records, providing inspiration to people in their journeys toward a healthier lifestyle.

## Searching with the API

This API can be reached at its primary root at ***https://fitness-app-1114.herokuapp.com***. It has two primary components: Exercises and Exercise Records. Requests for each should use the following endpoints, with the specific purposes outlined further below:

  - Root: "/"  
  - ID: "/:id"   

  ### Retrieving All
  To retrieve all exercises or exercise records, use the base root, followed by "/exercises" or "/exerciserecs", respectively. The URL should reflect one of the following:  

    https://fitness-app-1114.herokuapp.com/exercises  
    https://fitness-app-1114.herokuapp.com/exerciserecs  


  ### Retrieving Individual Records
  To retrieve an individual record for a exercise or exercise record, use the respective URL under "Retrieving All" and add the required ObjectID after a forward slash. An example of each has been provided below:  

    https://fitness-app-1114.herokuapp.com/exercises/63d02535e60689fec33dd428  //Bench Press  
    https://fitness-app-1114.herokuapp.com/exerciserecs/63d3c93d67d65f793e9c868e //Bench Press Exercise Record


  ### Creating New Records
  To generate a new record, all post requests should be sent to the respective URL listed under "Retrieve All". The body of the request may contain the following fields, listed in the table below. The comprehensive requirements for the available fields can be found in the "models" folder of the repository, available [here][models].

  | Page | Field Names |
  |------|-------------|
  | Exercises | name <br> upper |
  | Exercise Records | type <br> duration <br> intensity <br> upperBody <br> sets <br> weight | 

  ### Updating Records
  To update a record, put requests must utilize the URL with the ObjectID of the record for which an update is being submitted, similar to the URLs listed under "Retrieving Individual Records". The body of the request must contain the field name, for which the value is to be changed, exactly as it is written in the models of the [GitHub Repository][models].

  ### Deleting Records
  To delete a record, a delete request must utilize the URL with the ObjectID for the specific record, similar to the URLs listed under "Retrieving Individual Records". 

## Technology Utilized
 Cors | CSS | Express | HTML | JavaScript | MongoDB | Mongoose | Morgan | Node.js

## Technical Requirements
- Create a functional API utilizing Express and Mongoose, for application with a frontend component
- Implement full CRUD functionality for each model
- Deploy the API via Herokuapp for public accessibility

## Notes & Issues
- All testing of the API for access - both prior to and following deployment - was conducted utilizing Google Chrome.
- Final CRUD testing was conducted utilizing Postman.

## Potential Amendments & Implementations
1. Create a search bar at the base root to search for records based on partial elements of given fields.
2. Add authentication and authorization.


[backend_deployment]: https://fitness-app-1114.herokuapp.com
[frontend_deployment]: https://reposfit.netlify.com
[frontend_repository]: https://github.com/Kan5661/unit-3
[models]: https://github.com/individual-ism/ReposFit_Backend/tree/main/models