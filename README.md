# Project Description: A simple React Redux todo list application using ChakraUI's darkmode. 


## Introducing the Chakra UI component library into a Redux Application. 

### What is a component library? 

A component library is helps designers save time and produce more consistent work. They are made up of designs, styles   and pieces of software. [source: Why Should You Use a React Component Library for your Project?](https://medium.com/@timurcatakli/why-should-you-use-a-react-component-library-for-your-project-aa530a05e038)

### What is Chakra UI?

According to the website, "[Chakra UI](https://chakra-ui.com/) is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications" In addition to React, the project documentation provides instructions for installing for [getting started](https://chakra-ui.com/docs/getting-started) with React frameworks, including [Next.js](https://nextjs.org/) and [Gatsby.js](https://www.gatsbyjs.com/) in the official documentation. 

### What makes Chakra UI different?

Examine what makes Chakra UI unique by:
1. visiting the project documentation that [compares and contrasts Chakra UI library with other popular UI and CSS frameworks](https://chakra-ui.com/docs/comparison) including Theme UI, Tailwind CSS and Google's Material UI.
2. Researching developer articles written on the subject.
  - [Review of Chakra UI](https://blog.bitsrc.io/review-of-chakra-ui-651157bdf43a#:~:text=All%20in%20all%2C%20what%20makes,gained%20a%20lot%20of%20traction.)
  - [What I've learned using Chakra-Ui so far](https://dev.to/carlosrafael22/what-i-ve-learned-with-chakra-ui-so-far-4f5e)
  - [Who is using Chakra UI? ⚡️ #405](https://github.com/chakra-ui/chakra-ui/discussions/405)


# Getting Started

This Readme assumes you've already created a Redux Application that you can install Chakra UI to be installed into. 

If you are new to Redux, then follow the [Getting started with React Redux](https://react-redux.js.org/introduction/getting-started) tutorial listed in the official documentation. 

The base of this project was built off of the official React Redux [Tutorial: Using the connect API](https://react-redux.js.org/tutorials/connect#tutorial-using-the-connect-api)


## Official Chakra UI Documentation references used to help create the build:
[Chakra-UI > Getting Started](https://chakra-ui.com/docs/getting-started)

[Chakra-UI > Input](https://chakra-ui.com/docs/form/input)

[Chakra-UI > Color Mode](https://chakra-ui.com/docs/features/color-mode)

[Chakra-UI > Changing Color Mode](https://chakra-ui.com/docs/features/color-mode#changing-color-mode)

[Chakra-UI > Icons](https://chakra-ui.com/docs/media-and-icons/icon)

[Chakra-UI > Creating your custom icons](https://chakra-ui.com/docs/media-and-icons/icon#creating-your-custom-icons)

[Chakra-UI > Customize Theme](https://chakra-ui.com/docs/theming/customize-theme)

[Chakra-UI > Updating the theme config](https://chakra-ui.com/docs/features/color-mode)



## Additional Articles for Developers written by Developers that were helpful in creating this build. 

- [Dark Mode with React.js & Redux](https://medium.com/@herrerac11/dark-mode-with-react-js-redux-d30680e98de)

- [Up & Running with React, Redux Toolkit, Typescript and React Router](https://ogzhanolguncu.com/blog/react-redux-toolkit-with-typescript)

- [Getting Dark Mode to Work Correctly](https://chakra-ui.com/docs/features/color-mode#setup)

- [Adding Dark Mode to a React App with Chakra UI](https://www.pluralsight.com/guides/adding-dark-mode-to-a-react-app-with-chakra-ui)


**DEV BUILD WARNING MESSAGE**
-----------------------------------------------------------
"SharedArrayBuffers (SABs) can be used to construct high-resolution timers. High-resolution timers simplify Spectre attacks of cross-origin resources. To mitigate security risks across browsers, SharedArrayBuffers are gated behind cross-origin isolated contexts starting with Chrome 91 (May 2021). To continue using SharedArrayBuffers, please ensure that this page opts-into cross-origin isolation by setting Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy appropriately. Note that for each iframe, only the first issue is reported for performance reasons."  
* * *                                
5/29 - Registered for SharedArrayBuffers in non-isolated    
pages on Desktop platforms Trial to be implemented during production build and      deployment                                                                                  

### Additional Documentation 

- [Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/coop-coep/)

- [SharedArrayBuffer updates in Android Chrome 88 and Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/)


In order to patch the deprecation and continue using SharedArrayBuffers, we need to input a Web Origin with an https, http, or chrome-extension prefix. 


* * * 

At this point, we're ready to deply v.0.0.1 of the application. Because it's a simple single page appliation that doesn't require database integration, to keep things simple with and scalable, I will be deploying to github pages. 

Because I plan on adding more features and updating the UI, I will be deploying using ci/cd for continuous integation and access to scalable solutions offered in the github marketplace. 

Github user [gitname](https://github.com/gitname) offers a useful guide for deploying create-react-app using the node package manager gh-pages.  [link](https://github.com/gitname/react-gh-pages)





* * *

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
