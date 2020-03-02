import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { StatusBar } from 'react-native';
import Colors from './styles/colors';
import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <App />
    </Provider>
  );
}
