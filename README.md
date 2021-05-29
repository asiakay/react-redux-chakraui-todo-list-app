Implementing Dark Theme Toggle 

A. Styles File to hold an obejct of the colors and associated DOM elements to toggle with the switcher

B. An action to dispatch the toggle, in other words tell the store that we should switch the color mode 

C. A reducer to toggle the color object from the styles file 

I chose to install chakra ui with the following command 

```zsh
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

The output gave me 3 warnings to address 

1.
```zsh
npm WARN @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.13.12 requires a peer of @babel/core@^7.13.0 but none is installed. You must install peer dependencies yourself.
```
2.
```zsh
npm WARN @babel/plugin-proposal-class-static-block@7.14.3 requires a peer of @babel/core@^7.12.0 but none is installed. You must install peer dependencies yourself.
```
3.
```zsh
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
```
Although the package was installed...

```zsh
+ @emotion/styled@11.3.0
+ @emotion/react@11.4.0
+ framer-motion@4.1.17
+ @chakra-ui/react@1.6.3
added 112 packages from 77 contributors and audited 1754 packages in 12.856s
```

... to avoid future complications, I installed the peer dependencies referenced by the warnings.

- @babel/core@^7.12.0
- @babel/core@^7.13.0
    [@babel/core@7.14.3](https://www.npmjs.com/package/@babel/core?activeTab=versions)

- typescript@>=2.8.0 and up
    [typescript@>=4.3.2](https://www.npmjs.com/package/typescript)


```zsh
npm i @babel/core
```

```zsh
npm i typescript
```

With no more warnings, I could move on to the next step in the documentation.

Setting up the <code>ChakraProvider</code> in the application's root, index.js for create-react-app installations.

1. add import statement 
```JSX
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
```

2. define theme
```JSX
    const theme = extendTheme({
        styles: {
            global: {
                'html, body': { 'rgb(26,32,44)',
            },
        },
    },
);
```
3. Wrap <code><TodoApp/></code> Component with <code><ChakraProvider></code> wrapper

```JSX
const rootElement = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme = {theme}>
      <TodoApp/>
    </ChakraProvider>
    </Provider>
    </React.StrictMode>,
  rootElement
);
```

Chakra UI uses it's own tags for components. 

unless we update our <input> tag to <Input>, it won't show up!

But first we'll import the component at the top of the file where our form component is housed.

```zsh
import { Input } from "@chakra-ui/react"
```

By default the input will span the full width of the page. But changing the width is as simple as wrapping the form component with a box component in the render method. This will behave like a div.  

we'll add the following command to the top of AddTodo.js

```zsh
import { Box } from "@chakra-ui/react"
```
Then we'll wrap our for with <Box></Box>
To install Chakra UI icons enter the following command in the terminal at the project's root directory. 

```ZSH
npm i @chakra-ui/icons
```
Boxes have the option to be styled and  used as buttons, or we can use a button component.

In this case, we'll use a button. 

add the following code to the top of the AddTodo.js file

```JSX 
import { Button } from "@chakra-ui/react"
```

The tag we use is <Button></Button>

Centering elements is done differently, too.
```JSX
import { Center, Square, Circle } from "@chakra-ui/react"
```

read more about it in the docs 

[Chakra-UI > Getting Started](https://chakra-ui.com/docs/getting-started)

[Chakra-UI > Color Mode](https://chakra-ui.com/docs/features/color-mode)

[Dark Mode with React.js & Redux](https://medium.com/@herrerac11/dark-mode-with-react-js-redux-d30680e98de)

[Up & Running with React, Redux Toolkit, Typescript and React Router](https://ogzhanolguncu.com/blog/react-redux-toolkit-with-typescript)

Do I store Image assets in public or src in reactJS?

**WARNING MESSAGE**
"SharedArrayBuffers (SABs) can be used to construct high-resolution timers. High-resolution timers simplify Spectre attacks on cross-origin resources.
To mitigate security risks across browsers, SharedArrayBuffers are gated behind cross-origin isolated contexts starting with Chrome 91 (May 2021). To continue using SharedArrayBuffers, please ensure that this page opts-into cross-origin isolation by setting Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy appropriately.
Note that for each iframe, only the first issue is reported for performance reasons."

5/29 - Registered for SharedArrayBuffers in non-isolated pages on Desktop platforms Trial to be implemented on deployment

Additional Documentation 
- [Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/coop-coep/)

- [SharedArrayBuffer updates in Android Chrome 88 and Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/)




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
