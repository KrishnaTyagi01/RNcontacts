import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import LoginComponent from '../../components/Login';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from './../../context/reducers/provider';
import loginUser from '../../context/actions/auth/loginUser';

const Login = () => {
  const [value, setValue] = useState('');
  const [form, setForm] = useState({});
  // const {navigate} = useNavigation();

  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (form.username && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
