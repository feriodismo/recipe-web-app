### DESCRIPTION
This web app was developed in [Vue.js](https://vuejs.org/) for a quick implementation.

### STRUCTURE
This web app have three views.

`Welcome` to inform the user about the web app.<br>
`Dashboard`  is where all the recipes are, the user can search by recipe title or filter to get the recipe.<br>
`NotFound` is to inform the user that the url cannot be reached.<br>

### DATA
The recipes and the ingredients data are on .JSON file to replicate a get request, in order of the aplication can work if there are more data.

### DESIGN
The design was inspired by the [Graphite Web Page ](https://www.graphitehq.com/) using the logo, font, and some styles to follow the visual guidlines

### LOCAL RUN
For running the application `clone` the repo and run:

1- `cd recipe-web-app`<br>
2- `npm i`<br>
3- `npm run serve`

### RUNNING WITH DOCKER

For running the application with docker `clone` the repo and run: 

1- `cd recipe-web-app`<br>
2- `docker build . -t recipe`<br>
3- `docker run -p 8080:8080 recipe`

*Enjoy!*
