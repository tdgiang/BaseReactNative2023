/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/reducers/index';
import RootView from './src/RootView';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/saga/rootSaga';
// import FirebaseNotification from "./src/helper/FirebaseNotification";
import SplashScreen from 'react-native-splash-screen';
const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App = () => {
  useEffect(async () => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootView />
    </Provider>
  );
};

export default App;
