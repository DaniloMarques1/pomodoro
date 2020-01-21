import React, { useEffect, useState } from 'react';
import Routes from './routes';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const [initialRoute, setInitialRoute] = useState('');

  useEffect(() => {
    async function isLogged() {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setInitialRoute('Home');
      } else {
        setInitialRoute('Login');
      }
    }
    isLogged();
  }, [initialRoute]);

  if (!initialRoute) return null;
  const Component = Routes(initialRoute);
  return (
    <>
      <Provider store={store}>
        <Component />
      </Provider>
    </>
  );
}
