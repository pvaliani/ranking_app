# Article Ranker
A simple app using React and Semantic UI to render articles from 5 mocked API's. Articles are voted for and then ranked. The ranked results are then displayed from ascending to descending votes. A user is unable to use the "previous article" button on the first article but can cycle through subsequent articles.

The app was made without the use of hooks i.e useState or useEffect in order to get practice of class based components! 

# App Deployment
The app is currently deployed at http://article-ranker.herokuapp.com/

# Notes on Deployed Version
The loading time of the application could be improved. Upon first load of the page the response time is quite slow as all article objects are fetched
from the Mock API's. As these articles are pre-loaded, subsequent hits to the site mean that articles load faster.


# Article + App Header
![image](https://user-images.githubusercontent.com/72317734/116912762-91447800-ac40-11eb-9e5c-acb00f041eae.png)
# Article Navigation
![image](https://user-images.githubusercontent.com/72317734/116912816-9ef9fd80-ac40-11eb-9fbf-587abd8a04b5.png)
# Ranking Options
![image](https://user-images.githubusercontent.com/72317734/116829638-ae276f80-ab9c-11eb-8bed-7f28fe055ff3.png)
# Ranking Display
![image](https://user-images.githubusercontent.com/72317734/116829650-bc758b80-ab9c-11eb-8f9a-bc875762c4fd.png)







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
