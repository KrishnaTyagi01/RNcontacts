import React, {useContext, useState, useCallback} from 'react';
import RegisterComponent from '../../components/Register';
import envs from '../../config/env';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from './../../context/reducers/provider';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useEffect} from 'react';
import {LOGIN} from '../../constants/routeNames';

const Register = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});
  const list = ['firstName', 'lastName', 'username', 'email', 'password'];
  const {BACKEND_URL} = envs;
  const {authDispatch, authState} = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      // return statement will work when we leave the focus of the particular screen,
      // here the  register screen
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const {error, loading, data} = authState;

  console.log('auth-state: ', authState);
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 7) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'The length of password should be greater than 6',
            };
          });
        } else {
          setErrors(prev => {
            return {
              ...prev,
              [name]: null,
            };
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: `Please add ${name}`};
      });
    }
  };

  const onSubmit = () => {
    console.log('form: ', form);
    list.map(val => {
      if (!form[val]) {
        setErrors(prev => {
          return {...prev, [val]: `Please add ${val}`};
        });
      }
    });

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      errors={errors}
    />
  );
};

export default Register;
