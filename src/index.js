import React from 'react';
import ReactDOM from 'react-dom';
// 1. importing `ChakraProvider` component
import { ChakraProvider, theme } from '@chakra-ui/react';

import { Provider } from 'react-redux';
import store from './redux/store';

import TodoApp from "./TodoApp";

// import { ColorModeScript } from '@chakra-ui/color-mode';



// import './index.css';
// // import App from './App';
// import * as serviceWorker from './serviceWorker';


const rootElement = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme = {theme}>
        {/*<ColorModeScript initialColorMode={theme.config.initialColorMode}> */}
          <TodoApp/>
       {/* </ColorModeScript> */}
    </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
