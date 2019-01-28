This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

From within the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Additional NPM Packages Added
### react-lines-ellipsis
Truncate long text in movie descriptions

https://www.npmjs.com/package/react-lines-ellipsis

### moment js
Easily format dates

https://www.npmjs.com/package/moment

### node sass
Use scss files for css

https://www.npmjs.com/package/node-sass


## Project Structure and Description
This app displays the top 20 movies currently playing in theaters. You can also see a list of similar movies by clicking the "See Similar Movies" button for each movie. Movie data is provided by The Movie Database, https://www.themoviedb.org/.

### Files
**App.js** - contains the project layout

**HeaderContainer.js** - contains the header content

**BreadcrumbContainer.js** - contains the breadcrumb content

**MainContainer.js** - contains the main body of the page

**GalleryContainer.js** - makes a call to Get Now Playing and displays a grid of the results returned.

**MovieCard.js** - uses Ant Card component for each movie display. The Ant Button component is used for the See Similar Movies button.

**SimilarContainer.js** - Makes a call to Get Similar Movies and uses the Ant Drawer component to display a Ant Card component for each movie result.

**FooterContainer.js** - contains the footer content

**App.scss** - the main sass styles for the application

**styles/_variables.scss** - contains sass styling variables


## CORS Information

CORS is when a application on one domain makes a request for resources from another domain. The server can set the access level allowed by outside sites based on things like origin, request method and allowed custom headers. For simple requests, as is used on this site, no additional custom headers are required when making the api requests. If the server does have restrictions, from the browser you can include custom headers which will trigger a preflight request to determine from the server if the actual request is allowed.

## Next Steps I Might have Taken

    - **Store** - I did not implement Redux or Context given this component tree is pretty shallow and there’s not much state, but I would have for anything larger.

    - **Full Details Page** - I would have created a Full Details page that could be accessed by clicking any of the movies or similar movies. There would have been a "Back to Currently Playing" button. I would then have added a Router to the project and updated the Breadcrumb to reflect the currently viewed movie.

    - **Further Refactoring** - There are a few areas where I could refactor into smaller components. For example, the loader is used in GalleryContainer and SimilarContainer, so I could have broken that out into it’s own component.

    - **Additional Styling** - I left the Ant components fairly untouched. I would overwrite the base Ant theme to customize the components generally and then write CSS to sytlize them more specifically.

    - **Animation** - I'd animate the movie cards on the screen, so when loading, or filtering they would slide more nicely onto the page.


