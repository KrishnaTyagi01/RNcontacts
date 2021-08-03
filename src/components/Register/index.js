import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../common/customButton';
import styles from './styles';
import Container from '../common/container/index';
import Input from '../common/input/index';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/message';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
  loading,
  error,
}) => {
  const [value, setValue] = useState('');
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RNcontacts</Text>
        <Text style={styles.subTitle}>Create a Free Account</Text>
        {error?.error && <Message danger message={error?.error} retry />}

        {console.log(error)}
        <View style={styles.form}>
          <Input
            label="First Name"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value: value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value: value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'username', value: value});
            }}
            error={errors.username || error?.username?.[0]}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            error={errors.email || error?.email?.[0]}
            onChangeText={value => {
              onChange({name: 'email', value: value});
            }}
          />
          <Input
            label="Password"
            secureTextEntry={true}
            icon={<Text>show</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            onChangeText={value => {
              onChange({name: 'password', value: value});
            }}
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton
            loading={loading}
            disabled={loading} //disabled while loading
            onPress={onSubmit}
            title="Submit"
            primary
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already Have an Account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
