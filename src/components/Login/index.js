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
import Container from './../common/container/index';
import Input from './../common/input/index';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/message';

const LoginComponent = ({error, onChange, onSubmit, loading}) => {
  const [value, setValue] = useState('');
  const {navigate} = useNavigation();

  const retryFn = () => {
    console.log('Retry it here');
  };
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RNcontacts</Text>
        <Text style={styles.subTitle}>Please Login to continue</Text>
        {/* only show this error when we don't have error connecting to the server */}
        {error && !error?.error && (
          <Message
            message="Invalid Credentials"
            danger
            onDismiss={() => {}}
            retryFn={retryFn}
          />
        )}
        <View style={styles.form}>
          {/* shown when we can't even connect to server (no internet etc) */}
          {error?.error && (
            <Message danger onDismiss={() => {}} message={error?.error} />
          )}
          <Input
            label="Username"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'username', value: value});
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
          />
          <CustomButton
            title="Submit"
            disabled={loading}
            loading={loading}
            primary
            onPress={onSubmit}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Create New Account</Text>
            <TouchableOpacity onPress={() => navigate(REGISTER)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
