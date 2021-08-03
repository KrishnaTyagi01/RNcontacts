import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {GlobalContext} from '../context/reducers/provider';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
// import { GlobalContext } from './../context/reducers/provider';

const AppNavContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
